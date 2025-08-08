import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import aiRoutes from './routes/aiRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';

const cloudinary = require('../cloudinaryConfig'); 





const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());


// Routes

app.use('/api/properties', propertyRoutes);
app.use('/api/ai', aiRoutes);


// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
