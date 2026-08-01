import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";
import type { AddressInfo } from "node:net";

let server: any;
let baseUrl: string;

before(() => {
  const app = createApp();
  server = app.listen(0);
  const address = server.address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(() => {
  server.close();
});

describe("Album API v2", () => {
  it("lists all albums", async () => {
    const response = await fetch(`${baseUrl}/api/albums`);
    assert.equal(response.status, 200);
    const albums = await response.json() as any[];
    assert.equal(Array.isArray(albums), true);
    assert.equal(albums.length, 10);
  });

  it("gets a single album", async () => {
    const listRes = await fetch(`${baseUrl}/api/albums`);
    const albums = await listRes.json() as any[];
    const id = albums[0].id;

    const res = await fetch(`${baseUrl}/api/albums/${id}`);
    assert.equal(res.status, 200);
    const album = await res.json() as any;
    assert.equal(album.id, id);
  });

  it("adds a new album", async () => {
    const payload = {
      title: "New Album",
      year: 2025,
      songwriter: "Test Writer"
    };

    const res = await fetch(`${baseUrl}/api/albums`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    assert.equal(res.status, 201);
    const album = await res.json() as any;
    assert.equal(album.title, payload.title);
    assert.equal(album.year, payload.year);
    assert.equal(album.songwriter, payload.songwriter);
  });

  it("updates an album", async () => {
    const listRes = await fetch(`${baseUrl}/api/albums`);
    const albums = await listRes.json() as any[];
    const id = albums[0].id;

    const updated = {
      title: "Updated Title",
      year: albums[0].year,
      songwriter: albums[0].songwriter
    };

    const res = await fetch(`${baseUrl}/api/albums/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    });

    assert.equal(res.status, 200);
    const album = await res.json() as any;
    assert.equal(album.title, updated.title);
  });

  it("deletes an album", async () => {
    const listRes = await fetch(`${baseUrl}/api/albums`);
    const albums = await listRes.json() as any[];
    const id = albums[0].id;

    const res = await fetch(`${baseUrl}/api/albums/${id}`, { method: "DELETE" });
    assert.equal(res.status, 200);
    const deleted = await res.json() as any;
    assert.equal(deleted.id, id);
  });
});
