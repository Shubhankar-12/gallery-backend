import express, { Application } from "express";
import cors from "cors";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import imageRoutes from "./routes/imageRoutes";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

connectDB();

const app: Application = express();
const PORT: number = 8800;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/api", userRoutes);
app.use("/api/images", imageRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
