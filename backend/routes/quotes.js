const app = require('express')();
const mongoose = require('mongoose');

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello from server"
    });
});

module.exports = app;