const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models')

const postRouter = require('./routes/post')
app.use("/post", postRouter);

db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log("Server is running on Port 8000");
    });
});

