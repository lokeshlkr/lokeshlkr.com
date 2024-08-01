const express = require("express");
const path = require("path");
const app = express();



app.all("/api", (req, res) => {
    res.send("Hello")
});

app.use(
    express.static(path.join(__dirname, 'frontend', 'dist', 'three-in-a-row', 'browser'))
)

app.listen(80, "0.0.0.0", () => {
    console.log("Server is live now!");
});