import { auth } from "./auth";

// TODO: use port from BACKEND__PORT
const server = Bun.serve({
  async fetch(req) {
    const response = await auth.handler(req);
    if (response) return response;

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server is listening on ${server.url}`);
