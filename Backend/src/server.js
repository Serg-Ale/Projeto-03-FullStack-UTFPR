import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import { connectDb } from "./config/database.js";
import userRouter from "./routes/userRoutes.js";
import characterRouter from "./routes/characterRoutes.js";
import { requestLimiter } from "./middlewares/requestLimiter.js";
import { connectRedis } from "./config/redisClient.js";
import compression from "compression";

const app = express();
connectRedis();
connectDb();

app.use(compression());
app.use(requestLimiter);
app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.use("/character", characterRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`[Express] Server is listen on port ${port}`)
);
