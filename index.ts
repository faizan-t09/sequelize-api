import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("*", (req: express.Request, res: express.Response) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT || "8000", () => {
  console.log("App listening on port : " + process.env.PORT);
});
