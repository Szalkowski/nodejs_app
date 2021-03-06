const dotenv = require('dotenv');

dotenv.config({
    path: __dirname+`/./../.env.${process.env.NODE_ENV}`
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    COOKIE_KEY: process.env.COOKIE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};