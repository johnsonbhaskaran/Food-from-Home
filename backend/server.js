import express from "express";
import "dotenv/config.js";

// eslint-disable-next-line no-undef
const PORT = process.env.SERVER_PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
