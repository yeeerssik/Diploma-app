const mongoose = require('mongoose');

const URL = 'mongodb+srv://yers:Vem_100802@diploma-project-cluster.sozejqp.mongodb.net/cv-studio-db';

const conn = mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

connection.on('error', (error) => {
    console.log(error);
});