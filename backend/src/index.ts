const server = Bun.serve({
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server is listening on ${server.url}`);
