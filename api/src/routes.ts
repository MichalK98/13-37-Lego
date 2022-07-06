import { Express, Request, Response } from "express";
import {
  createPartsHandler,
  deletePartsHandler,
  getPartsHandler,
  updatePartsHandler,
} from "./controllers/parts.controller";

function routes(app: Express) {
  // Healthcheck
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Parts
  app.post("/api/parts", createPartsHandler);
  app.get("/api/parts", getPartsHandler);
  app.put("/api/parts", updatePartsHandler);
  app.delete("/api/parts", deletePartsHandler);
}

export default routes;
