


// Configuring the database
import {DB_URL} from './app-config';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(DB_URL, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});




// import mongoose from 'mongoose';
// import {DB_URL} from './app-config';

// mongoose.Promise = global.Promise;
// mongoose.connect(DB_URL);

// // when successfully connected
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose default connection open to:' + DB_URL);
// });

// // when connection throws an error
// mongoose.connection.on('error', (err) => {
//   console.log('Mongoose default connection error: ' + err);
// });

// // when connection is disconnected
// mongoose.connection.on('disconnected', (err) => {
//   console.log('Mongoose default connection disconnected:', err);
// });

// // close the Mongoose connection when node process ends
// process.on('SIGINT', function() {
//   mongoose.connection.close(() => {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });