import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import User from '../models/users';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = 'mongodb://trig:c0ding!@ds153715.mlab.com:53715/space-repetition';

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

app.post('/user', jsonParser, (req, res) => {
  if (!req.body.username) {
    return res.status(400).json({message: 'Must specify a username'})
  }
  User
  .create({
    username: req.body.username,
    questions: [],
    score: 0
  })
  .then(
    res.status(201).json({message: 'User created'}))
  .catch(err => {
    console.error(err);
    res.status(500).json({message: 'Internal server error'})
  });
});

app.get('/user', (req, res) => {
  User
    .findOne()
    .exec()
    .then(username => {
      res.json({
        username,
        questions,
        score
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
})


function runServer(databaseURL=DATABASE_URL) {
    return new Promise((resolve, reject) => {
      mongoose.connect(databaseURL, err => {
        if (err) {
          return reject(err)
        }
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
            resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err)
        });
    });
  });
}

if (require.main === module) {
    runServer();
}
