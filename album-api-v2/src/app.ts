import express, { Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { Album, albums } from "./data.js";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/api/albums", (_req: Request, res: Response) => {
    res.json(albums);
  });

  app.get("/api/albums/:id", (req: Request, res: Response) => {
    const album = albums.find((item) => item.id === req.params.id);
    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }
    res.json(album);
  });

  app.post("/api/albums", (req: Request, res: Response) => {
    const { title, year, songwriter } = req.body;
    if (
      typeof title !== "string" ||
      typeof songwriter !== "string" ||
      typeof year !== "number"
    ) {
      return res.status(400).json({ error: "Invalid album payload" });
    }

    const album: Album = {
      id: randomUUID(),
      title,
      year,
      songwriter
    };

    albums.push(album);
    res.status(201).json(album);
  });

  app.put("/api/albums/:id", (req: Request, res: Response) => {
    const index = albums.findIndex((item) => item.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Album not found" });
    }

    const { title, year, songwriter } = req.body;
    if (
      typeof title !== "string" ||
      typeof songwriter !== "string" ||
      typeof year !== "number"
    ) {
      return res.status(400).json({ error: "Invalid album payload" });
    }

    albums[index] = {
      id: req.params.id,
      title,
      year,
      songwriter
    };

    res.json(albums[index]);
  });

  app.delete("/api/albums/:id", (req: Request, res: Response) => {
    const index = albums.findIndex((item) => item.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Album not found" });
    }

    const [deleted] = albums.splice(index, 1);
    res.json(deleted);
  });

  return app;
}
