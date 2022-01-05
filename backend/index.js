const express = require('express');

const app = express();

const db = require('./models')
db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log("Server is running on Port 8000");
    });
});

