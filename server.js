const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

app.get('/.well-known/acme-challenge/Pgy-4adoAqOpRtrXDJeQrwlZELvSxSVuxnHILgrd7VE', (req, res) => {
  res.status(200);
  res.send('Pgy-4adoAqOpRtrXDJeQrwlZELvSxSVuxnHILgrd7VE.4f8cJWG471h_xzaArV9sMiuAfqw7Zy6QriFRDH5uXOM');
});

app.get('/hey', (req, res) => {
  res.send('ho!')
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || 8080);