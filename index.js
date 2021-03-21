require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type']
}));

/* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    next();
}); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/routes/index')(app);

app.listen(process.env.PORT, () =>
    console.log(`Server is running on port: ${process.env.PORT}`)
);