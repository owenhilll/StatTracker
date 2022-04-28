
var express = require('express');
var app = express();
const schedule = require('./Pull_Data')
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('Listening on port', PORT);
app.use(cors());

schedule.scheduler;

app.use('/stats', require('./routes/stats'));

// app.use(function (req, res) {
//   res.sendStatus(404);
// });

app.set('title', 'GeeksforGeeks');
  
app.get('/', (req, res) => {
  res.send(app.get('title'));
})