// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $blog_index from "./routes/blog/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $profile from "./routes/profile.tsx";

import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/blog/index.tsx": $blog_index,
    "./routes/index.tsx": $index,
    "./routes/profile.tsx": $profile,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
