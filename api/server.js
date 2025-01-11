'use strict';

const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// success
const app = express();
app.get("/success", (req, res) => {
  res.send("Datadog APM Test Success")
})

// error
app.get("/error", (req, res) => {
  res.status(500).send("Datadog APM Test Error")
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
