const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urldb: process.env.URL_MONGODB,
};