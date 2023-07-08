import "dotenv/config";
import express, { Request, Response } from "express";
import errorMiddleware from "./middleware/errorMiddleware"
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.get("/api/tester", (req: Request, res: Response) => {
    res.send("Tester API!");
})

app.use(errorMiddleware)

export default app;