# Album API v2

A Node.js REST API for managing music albums, built with TypeScript and Express. This is a rewrite of the previous DotNet `albums-api` in modern TypeScript.

## Features

- **In-memory data storage** — 10 seeded albums with title, year, and songwriter
- **Full CRUD operations** — List, Get, Add, Update, and Delete albums
- **RESTful API** — Standard HTTP methods and status codes
- **TypeScript** — Strict type checking and ES2022 target
- **Unit tests** — Comprehensive test suite using Node's built-in `node:test` runner

## Installation

Install project dependencies:

```bash
cd album-api-v2
npm install
```

## Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output files will be generated in the `dist/` directory.

## Running the Server

Start the API server on port 3000:

```bash
npm start
```

The server will log:
```
Album API v2 listening on port 3000
```

Access the API at `http://localhost:3000/api/albums`.

## Running Tests

Run the unit test suite:

```bash
npm test
```

Tests verify all CRUD operations:
- Listing all albums
- Getting a single album by ID
- Adding a new album
- Updating an existing album
- Deleting an album

## API Routes

### List All Albums
```
GET /api/albums
```
Returns array of all 10 albums.

### Get Single Album
```
GET /api/albums/:id
```
Returns album with specified ID, or 404 if not found.

### Add New Album
```
POST /api/albums
```
Request body:
```json
{
  "title": "Album Title",
  "year": 2024,
  "songwriter": "Songwriter Name"
}
```
Returns created album with auto-generated UUID.

### Update Album
```
PUT /api/albums/:id
```
Request body (same as POST):
```json
{
  "title": "Updated Title",
  "year": 2024,
  "songwriter": "Updated Songwriter"
}
```
Returns updated album.

### Delete Album
```
DELETE /api/albums/:id
```
# Album API v2

A Node.js REST API for managing music albums, built with TypeScript and Express. This is a rewrite of the previous DotNet `albums-api` in modern TypeScript.

## Features

- **In-memory data storage** — 10 seeded albums with title, year, and songwriter
- **Full CRUD operations** — List, Get, Add, Update, and Delete albums
- **RESTful API** — Standard HTTP methods and status codes
- **TypeScript** — Strict type checking and ES2022 target
- **Unit tests** — Comprehensive test suite using Node's built-in `node:test` runner

## Instructions

Follow these steps to run and test the API locally:

- Clone or open the project and change into the folder:

```bash
cd album-api-v2
```

- Install dependencies:

```bash
npm install
```

- Build the project (optional for production run):

```bash
npm run build
```

- Start the server (default port 3000):

```bash
npm start
```

- For development with hot reload:

```bash
npm run dev
```

- Run the unit tests:

```bash
npm test
```

After the server starts, the API is available at `http://localhost:3000/api/albums`.

## API Overview

### List All Albums
```
GET /api/albums
```
Returns array of all seeded albums.

### Get Single Album
```
GET /api/albums/:id
```
Returns album with specified ID, or 404 if not found.

### Add New Album
```
POST /api/albums
```
Request body:
```json
{
  "title": "Album Title",
  "year": 2024,
  "songwriter": "Songwriter Name"
}
```
Returns created album with auto-generated UUID.

### Update Album
```
PUT /api/albums/:id
```
Request body (same as POST):
```json
{
  "title": "Updated Title",
  "year": 2024,
  "songwriter": "Updated Songwriter"
}
```
Returns updated album.

### Delete Album
```
DELETE /api/albums/:id
```
Returns deleted album data.

## Seeded Albums

The API comes with 10 pre-seeded albums:

1. Imagine — John Lennon (1971)
2. Hotel California — Don Felder / Don Henley / Glenn Frey (1976)
3. Like a Rolling Stone — Bob Dylan (1965)
4. Purple Rain — Prince (1984)
5. Bohemian Rhapsody — Freddie Mercury (1975)
6. Smells Like Teen Spirit — Kurt Cobain / Krist Novoselic / Dave Grohl (1991)
7. Billie Jean — Michael Jackson (1982)
8. Stairway to Heaven — Jimmy Page / Robert Plant (1971)
9. What a Wonderful World — Bob Thiele / George David Weiss (1967)
10. Respect — Otis Redding (1967)

## Project Structure

```
album-api-v2/
├── src/
│   ├── data.ts       — Album interface and seeded data
│   ├── app.ts        — Express app and route handlers
│   └── server.ts     — Server startup
├── test/
│   └── album-api.test.ts — Unit tests
├── package.json
├── tsconfig.json
└── README.md
```

## Development

For development with hot reload:

```bash
npm run dev
```

This uses `ts-node` to run TypeScript directly.

## Technologies

- **Node.js** — Runtime
- **Express 4.18** — Web framework
- **TypeScript 6.0** — Type-safe language
- **node:test** — Built-in test runner

## License

MIT
