import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { globalErrorHandler } from "./errors/globalErrorHandler";
import notFound from "./middlewares/notFound.middleware";
import router from "./routes";

//create the express app
const app: Application = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "server is running 🚀! Welcome to the API " });
});
app.use("/api/", router);

// global error handler
app.use(globalErrorHandler);

//not found route error handler
app.use(notFound);

export default app;
