// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

module.exports = function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) 
    return res.status(401).json({ error: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if (!token) 
    return res.status(401).json({ error: 'Token missing' });

  try {
    console.log('JWT token:', token);
    const payload = jwt.verify(token, SECRET);
    console.log('JWT payload:', payload);
    req.user = { id: payload.id };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
