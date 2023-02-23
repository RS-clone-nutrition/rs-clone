import jwt from "jsonwebtoken";
import secret from "../config.js";

const authMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(403).json({ message: 'user is not authorized' })
    }

    const decodateData = jwt.verify(token, secret.key);


    req.user = decodateData
    next()
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: 'user is not authorized' })
  }
}

export default authMiddleware;
