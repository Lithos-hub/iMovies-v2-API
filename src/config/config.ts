export default {
  jwSecret: process.env.JWT_SECRET || "somescrettoken",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost:27017/imovies",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};
