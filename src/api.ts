import express from "express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/data/all", (req, res) => {
  res.send(data);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
