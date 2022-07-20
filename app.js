const express = require('express');
// const path = require('path')
const mongoose = require('mongoose');
const bp = require('body-parser')
const app = express();

// --Routers--
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const newsRouter = require('./routes/news');

// --Body Parser--/
app.use(bp.urlencoded({extended: false}));

// ---Using Public folder---
// app.use(express.static(path.join(__dirname, 'public')));

// --Using Routers--
app.use(homeRouter);
app.use(loginRouter);
app.use(newsRouter);

// ---Setting to EJS--
app.set('view engine', 'ejs');
app.set('views', 'pages');


mongoose.connect('mongodb://localhost:27017/nodeapp')
    .then(()=>{
        app.listen(4000, () => {
            console.log("Server is working on port 4000")
        })
    })
    .catch(err => console.log(err))