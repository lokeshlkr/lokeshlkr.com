const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'dist', 'browser')))

app.all("/api", (req, res) => {
    res.send("Hello")
});
app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'browser', 'index.html'))
})
app.listen(80, "0.0.0.0", () => {
    console.log("Listening on port 80.");
});