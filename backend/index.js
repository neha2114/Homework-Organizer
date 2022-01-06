const express = require('express');

const app = express();
app.use(express.json());

const db = require('./models')

const postRouter = require('./routes/post')
app.use("/post", postRouter);

db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log("Server is running on Port 8000");
    });
});

