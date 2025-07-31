const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const Property = require('../models/Property');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// AI Search Endpoint
router.post('/search', async (req, res) => {
  try {
    const { query } = req.body;

    // 1. Send query to OpenAI to extract filters
    const prompt = `
      Convert this user query into a JSON with filters for MongoDB:
      Query: "${query}"
      Example output:
      {
        "location": "Mumbai",
        "priceMax": 50000,
        "bedrooms": 2
      }
    `;

    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const filters = JSON.parse(response.choices[0].message.content);

    // 2. Build MongoDB query dynamically
    const mongoQuery = {};
    if (filters.location) mongoQuery.location = { $regex: filters.location, $options: "i" };
    if (filters.priceMax) mongoQuery.price = { $lte: filters.priceMax };
    if (filters.bedrooms) mongoQuery.bedrooms = filters.bedrooms;

    // 3. Fetch properties
    const properties = await Property.find(mongoQuery);
    res.json({ filters, properties });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI search failed' });
  }
});

module.exports = router;
