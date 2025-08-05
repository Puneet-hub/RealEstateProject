import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Auth Header:', authHeader); // DEBUG

  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  console.log('Extracted Token:', token); // DEBUG

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded User:', decoded); // DEBUG
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Error:', err.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
