import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3050;

app.get("/", (req: Request, res: Response) => {
  res.send("Lego API");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
