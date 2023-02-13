const WebSocketServer = require("ws");
// create new websocket server
const wss = new WebSocketServer.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("new client connected");

  // send message to client
  ws.send("Welcome, you are connected");

  // on message from client
  ws.on("close", () => {
    console.log("the client has connected");
  });

  // handling client connection error
  ws.onerror = function () {
    console.log("Some error occurred");
  };
});
console.log("The websocket server is running on port 8080");
