import { Request, Response } from "express";

export async function createPartsHandler(req: Request, res: Response) {
  res.send("createPartsHandler");
  return;
}

export async function getPartsHandler(req: Request, res: Response) {
  res.send("getPartsHandler");
  return;
}

export async function updatePartsHandler(req: Request, res: Response) {
  res.send("updatePartsHandler");
  return;
}

export async function deletePartsHandler(req: Request, res: Response) {
  res.send("deletePartsHandler");
  return;
}
