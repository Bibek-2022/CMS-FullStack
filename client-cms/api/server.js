import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { mongoConnect } from "./src/config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8001;
// user middleware
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());

// connection to DB
mongoConnect();

import registerRouter from "./src/routers/registerRouter.js";
import loginRouter from "./src/routers/loginRouter.js";

// Routers
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/login", loginRouter);

/* The above code is creating a server and listening to port . */
app.get("/", (req, res) => {
  res.json({
    message: "you reach a e-commerce api",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server is running on port ${PORT}`);
});
