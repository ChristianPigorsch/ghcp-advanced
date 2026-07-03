---
name: build-and-run-typescript
description: Use when the user asks to build a TypeScript file, compile TypeScript to JavaScript, or start a TypeScript-based script or application.
---

1. Check whether the project already has a TypeScript build setup:
   - Look for `tsconfig.json`
   - Look for a `build` script in `package.json`

2. If a build script exists, use it first:

   ```bash
   npm run build
   ```

3. If no build script exists, compile the TypeScript file directly with the TypeScript compiler:

   ```bash
   npx tsc --target ES2022 --module NodeNext --moduleResolution NodeNext --outDir dist path/to/file.ts
   ```

   If the project already has a `tsconfig.json`, prefer:

   ```bash
   npx tsc -p tsconfig.json
   ```

4. Run the compiled JavaScript output:

   ```bash
   node dist/path/to/file.js
   ```

5. If the project uses a single-file TypeScript workflow, you can also run it directly with `tsx`:

   ```bash
   npx tsx path/to/file.ts
   ```

6. If the build or start step fails, fix the TypeScript errors first and rerun the command until it works.

7. Confirm success by checking that the script or server starts without errors and produces the expected output.
