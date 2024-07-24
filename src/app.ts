import express from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home route" });
});

app.use("/api/users", userRouter);

// global error handler
app.use(globalErrorHandler);

export default app;
