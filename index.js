const express = require("express");
const path = require("path");
const app = express();

const fs = require('fs');
const https = require('https');

const privateKey = fs.readFileSync(process.env.HOME + '/.site/privatekey', 'utf8');
const certificate = fs.readFileSync(process.env.HOME + '/.site/cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const PORT = 443



app.use(express.static(path.join(__dirname, 'frontend', 'dist', 'browser')))

app.all("/api", (req, res) => {
    res.send("Hello")
});
app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'browser', 'index.html'))
})


const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, "0.0.0.0", () => {
    console.log("Server is live now! Listening on port:", PORT);
});