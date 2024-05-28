import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // to accept the json format data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // to store the images files
app.use(cookieParser());

export { app };
