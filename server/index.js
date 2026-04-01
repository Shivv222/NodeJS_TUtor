const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from home page");
});

app.get("/about", (req, res) => {
    return res.send(`hello ${req.query.name}` );
});

app.listen(8002, () => console.log("server started"));

// const myServer = http.createServer(app);

// myServer.listen(8002, () => console.log("server started"));