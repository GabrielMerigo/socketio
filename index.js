const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("palavra", (data) => {
    console.log(data);
    socket.emit("resultado", data + "- Gabriel Lindo");
  });

  socket.on("disconnect", () => {
    console.log("desconectou: ", socket.id);
  });
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(3000, () => {
  console.log("App is running!");
});
