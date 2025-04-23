const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const data = jwt.verify(token, SECRET);
    req.user = data;
    next();
  } catch {
    res.sendStatus(401);
  }
};
