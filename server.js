const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('/.well-known/acme-challenge/Pgy-4adoAqOpRtrXDJeQrwlZELvSxSVuxnHILgrd7VE', (req, res) => {
  res.status(200);
  res.send('Pgy-4adoAqOpRtrXDJeQrwlZELvSxSVuxnHILgrd7VE.4f8cJWG471h_xzaArV9sMiuAfqw7Zy6QriFRDH5uXOM');
});

app.get('/hey', (req, res) => {
  res.send('ho!')
})

app.listen(process.env.PORT || 8080);