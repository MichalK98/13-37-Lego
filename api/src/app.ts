import express, { Express, Request, Response } from "express";
import routes from "./routes";

const port = 3050;

const app: Express = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

  routes(app);
});
