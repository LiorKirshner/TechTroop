const http = require("http");

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function sendJSON(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  // GET /api/users
  if (req.url === "/api/users" && req.method === "GET") {
    return sendJSON(res, 200, users);
  }

  // GET /api/users/:id
  if (req.url.startsWith("/api/users/") && req.method === "GET") {
    const id = parseInt(req.url.split("/api/users/")[1], 10);
    const user = users.find((u) => u.id === id);
    if (!user) {
      return sendJSON(res, 404, { error: "User not found" });
    }
    return sendJSON(res, 200, user);
  }

  // POST /api/users
  if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      // Prevent too large body
      if (body.length > 1e6) req.connection.destroy();
    });
    req.on("end", () => {
      let userData;
      try {
        userData = JSON.parse(body);
      } catch (e) {
        return sendJSON(res, 400, { error: "Invalid JSON" });
      }
      if (!userData.name || !userData.email) {
        return sendJSON(res, 400, { error: "Missing name or email" });
      }
      const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      const newUser = { id: newId, name: userData.name, email: userData.email };
      users.push(newUser);
      return sendJSON(res, 201, newUser);
    });
    return;
  }

  // Not found
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`REST API server running on port ${PORT}`);
});
