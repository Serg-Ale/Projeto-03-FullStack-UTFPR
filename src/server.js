import express, { json } from "express";
import "dotenv/config";

import { connectDb } from "./config/database.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
connectDb();

app.use(json());
app.use("/auth", authRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listen on port ${port}`));
