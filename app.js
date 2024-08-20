const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const allRoutes = require("./routes/allRoutes")
app.use(allRoutes)


mongoose.connect('mongodb+srv://sda01113623324:ahmedzsc100@cluster0.cpy2e.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })
  }).catch((err) => { console.log(err) });