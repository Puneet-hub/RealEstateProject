import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import salt from '../server.js';


// Register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("📌 Registration request:", { name, email });

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPassword = password;
    console.log("🔐 Hashed Password:", hashedPassword);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    console.log("✅ User registered successfully");
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ error: err.message });
  }
  // const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
console.log("🔑 Generated Salt:", salt);
console.log("🔑 Hashed Password:", hashedPassword);

};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("📌 Login request:", { email, password });

    const user = await User.findOne({ email });
    console.log("📌 User found:", user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password (email not found)' });
    }

    console.log("🔍 Plain Password:", password);
    console.log("🔍 Hashed Password from DB:", user.password);
    console.log("🔍 bcrypt.compare inputs =>", `"${password}"`, `"${user.password}"`);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("📌 Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password (wrong password)' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ error: err.message });
  }
};
