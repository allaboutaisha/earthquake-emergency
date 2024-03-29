const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

require('./config/database'); 

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); 
app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users')); 
app.use('/api/orders', require('./routes/api/orders'));

const ensureLoggedIn = require('./config/ensureLoggedIn'); 
app.use('/api/packages', require('./routes/api/packages'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
}); 

// API for PAYMENT
// app.post('payment/create, async (req, res) => { 
//  const total = req.body.amount
//  console.log('Payment Request received for this", total)})
