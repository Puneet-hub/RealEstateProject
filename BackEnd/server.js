import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import aiRoutes from './routes/aiRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Connect to DB
connectDB();
const salt = await bcrypt.genSalt(10);
// Middleware
app.use(cors());
app.use(express.json());

// Debugging
console.log('MONGO_URI:', process.env.MONGO_URI ? '✅ Loaded' : '❌ Missing');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✅ Loaded' : '❌ Missing');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '✅ Loaded' : '❌ Missing');

// Routes
app.use('/api/users', userRoutes); // ✅ login & register route
app.use('/api/properties', propertyRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/admin', adminRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default salt;