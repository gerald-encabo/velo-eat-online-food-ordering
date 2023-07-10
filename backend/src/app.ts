import "dotenv/config";
import express, { Request, Response } from "express";
import errorMiddleware from "./middleware/errorMiddleware"
import env from "./util/validateEnv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);

app.get("/api/tester", (req: Request, res: Response) => {
    res.send("Tester API!");
})

if (env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../frontend')));
  
    app.get('*', (req: Request, res: Response) =>
      res.sendFile(
        path.resolve(__dirname, '../../frontend/index.html')
      )
    )
} else {
    app.get('/', (req: Request, res: Response) => res.send('Please set to production'));
}

app.use(errorMiddleware)

export default app;