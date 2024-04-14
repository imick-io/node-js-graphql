const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET,
};
