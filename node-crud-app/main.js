// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const cors = require('cors')

const app = express();
const PORT = parseInt(process.env.PORT) || 4000;
const path = require('path');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connect to database'))
  .catch(e=>console.log(e));
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error))
// db.once("open", () => console.log("connected to db"))

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'dist/user-mgmt'))); 
app.use(cors())
// app.use(session({ secret: 'my secret key', saveUninitialized: true, resave: false }));
// app.use((req, res, next) => {
//   res.locals.message = req.session.message;
//   delete req.session.message;
//   next();
// })

//set template engine
app.set('view engine', 'ejs');

//route prefix
app.use("",require('./routes/routes'))

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/user-mgmt/index.html'))
})
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})