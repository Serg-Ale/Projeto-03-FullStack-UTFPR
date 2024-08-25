import express, { json } from "express";
import "dotenv/config";

const app = express();
app.use(json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listen on portt ${port}`));
