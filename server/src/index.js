import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectMongoDB } from "./utils/server.js";
import { loginRouter, notesRouter, userRouter } from "./routes/index.js";
import { loginCheck } from "./middlewares/loginCheck.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 2003;

// middlewares
app.use(cors({
  origin: "https://docs-playground-client.vercel.app",
  credentials: true,
}))
app.options('*',cors({
  origin: "https://docs-playground-client.vercel.app",
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static images from /server/images
app.use("/images", express.static(path.resolve(__dirname, "..", "images")));

// Routes
app.use("/login", loginRouter);
app.use("/user", loginCheck, userRouter);
// app.use("/user/note", loginCheck, notesRouter);

// connect mongodb
connectMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is listening");
    });
  })
  .catch((err) => {
    console.error("Database connection error: ", err);
  });
