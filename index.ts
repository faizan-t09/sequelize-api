import express from "express";
import dotenv from "dotenv";
dotenv.config();

import seqConn from "./dbConn";
import userRouter from "./routes/userRouter";
import roleRouter from "./routes/roleRouter";

const app = express();
app.use(express.json())

app.use("/user", userRouter);
app.use("/role", roleRouter);
app.get("*", (req: express.Request, res: express.Response) => {
  res.status(404).send("Page not found");
});

seqConn
  .sync()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(process.env.PORT || "8000", () => {
  console.log("App listening on port : " + process.env.PORT);
});
