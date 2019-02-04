

module.exports = (app) => {
    const login = require('../controller/login.js');

    // Retrieve all Notes
    app.post('/login', login.findAll);
}

// import express from 'express';
// import mongoose from 'mongoose';
// import {db} from '../config/db';

// const loginRouter = express.Router();

// const loginSchema = mongoose.Schema({
//     _id: String , name: String , password : String
// });
// var MyModel = mongoose.model('log', loginSchema);
// loginRouter.get('/', (req, res) => {
       
//          MyModel.find()
//          .then(user => {
//              console.log('hi',user);
//              res.send(user);
//          }).catch(err => {
//              res.status(500).send({
//                  message: err.message || "Some error occurred while retrieving notes."
//              });
//          });
         
//   })

//   export default loginRouter;