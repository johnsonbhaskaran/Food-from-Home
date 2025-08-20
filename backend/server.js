import * as dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "../.env", quiet: true });

const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port: ${process.env.SERVER_PORT}`);
});
