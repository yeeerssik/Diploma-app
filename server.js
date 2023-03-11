const express = require('express');
const dbConnect = require('./dbConnect')
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT || PORT;
const userRoute = require('./routes/userRoute');
const path = require('path');

app.use('/api/user', userRoute);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('cv-app-front/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "cv-app-front/build/index.html"));
    });
}

app.get('/', (req, res) => res.send("Hello, world!!!!"));
app.listen(port, () => console.log("Hello, world!!!"));