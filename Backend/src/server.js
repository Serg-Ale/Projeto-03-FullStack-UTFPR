import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import { connectDb } from "./config/database.js";
import userRouter from "./routes/userRoutes.js";
import characterRouter from "./routes/characterRoutes.js";
import { requestLimiter } from "./middlewares/requestLimiter.js";

const app = express();
connectDb();

app.use(requestLimiter);
app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/character", characterRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listen on port ${port}`));
