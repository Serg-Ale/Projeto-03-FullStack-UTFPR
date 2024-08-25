import express, { json } from "express";
import "dotenv/config";

import { connectDb } from "./config/database.js";
import userRouter from "./routes/userRoutes.js";
import characterRouter from "./routes/characterRoutes.js";

const app = express();
connectDb();

app.use(json());
app.use("/user", userRouter);
app.use("/character", characterRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listen on port ${port}`));
