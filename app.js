const express = require('express');
const app = express();
const path = require('path')
const rutaMain = require('./routers/main.js')


const port = process.env.PORT || 3030;

let publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Servidor funcionando en:  http://localhost:${port}/`);
});


app.use('/home',rutaMain)