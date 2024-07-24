import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home route" });
});

// global error handler
app.use(globalErrorHandler);

export default app;
