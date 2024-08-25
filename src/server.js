import express, { json } from "express";
import "dotenv/config";

import { connectDb } from "./config/database.js";

const app = express();
connectDb();
app.use(json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listen on portt ${port}`));
