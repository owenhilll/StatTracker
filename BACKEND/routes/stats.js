
const express = require('express');
let router = express.Router();
var app = express();
var db = require('../BASEBALL_STATS');
const fetch = require('node-fetch');

router.get('/:team', function(req, res){
    var name = req.params.team;
    name = name.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
    
    var query = 'SELECT * FROM stats WHERE name = \''+name+ '\';';
    db.one(query)
    .then(function (rows) {
      res.status(200).json(rows);
  })
  .catch(error => { 
    console.log(`not cool`);

  res.status(404).json({msg: `The requested team could not be found. ${name} is not a valid Team. please enter the two letter abbreviation for the state you are searching for.`});

  }); 
});

module.exports = router;