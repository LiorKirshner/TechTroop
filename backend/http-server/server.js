const http = require("http");

const server = http.createServer(function (request, response) {
  const req = request;
  const res = response;
  console.log(`Incoming request: ${req.method} ${req.url}`);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "Lior Kirshner",
        email: "lior.kirshner@email.com",
        github: "https://github.com/LiorKirshner",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log(`Node server created at port ${PORT}`);
});
