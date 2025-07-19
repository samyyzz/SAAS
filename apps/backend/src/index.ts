import express, { Request, Response } from "express";
import { PORT } from "./util";
import cors from "cors"
import { userRouter } from "./routes/user";

const app = express();
app.use(express.json());
app.use(cors())

const port = PORT;

app.use((req: Request, res: Response, next) => {
  console.log(req, res);
  next();
});

app.use("/api/auth", userRouter);

app.listen(() => {
  console.log(`Backend : Server is running on http://localhost:${port}`);
});
