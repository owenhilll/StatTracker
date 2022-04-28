const fetch = require('node-fetch');
const db = require('./BASEBALL_STATS');
const schedule = require('node-schedule');

/* change 'hour: 0, minute: 0' in the next line to the next closest minute of the current time. i.e if it is 4:34 pm
   change the parameters to 'minute: 35' to have the function run within a minute. you will know if the function ran if
   you see 'cleared table' and 'added covid data' in the console.
   ****************** PLEASE CHANGE THE PARAMETERS BACK TO 'hour: 0, minute: 0' ONCE THE FUNCTION RUNS ************************
*/
const j = schedule.scheduleJob({hour: 17, minute: 23},  async function(){
    var TEAM_ID = [2,3,4,5,6,7,8,625,9,10,12,15,16,17,18,19,20,22,24,25,26,27,28,30,31,32,33,34,35,36,37];
    db.none('DELETE FROM stats;')
    .then(() => {
        console.log('cleared table');
    })
    .catch(error => {
        console.log(`Error deleting stats table. error message: ${error.message}`);
    });
   
    // const api_url = `https://api-baseball.p.rapidapi.com/teams/statistics?league=1&season=2019&team=5`
    // const res = await fetch(api_url);
    // const json = await res.json();
    var query = '';

    for (var i = 0; i < TEAM_ID.length; i++){
        var name; var wins; var losses; var PAtotal; var PFtotal; 
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com',
                'X-RapidAPI-Key': '64de62d98cmshe5b83c3a92bd85cp1fb748jsn3f72e1e08dfe'
            }
        }

        fetch(`https://api-baseball.p.rapidapi.com/teams/statistics?league=1&season=2019&team=${TEAM_ID[i]}`, options)
            .then(response => response.json())
            .then(response => {
                    name = response.response.team.name;
                    wins = response.response.games.wins.all.total;
                    losses = response.response.games.loses.all.total;
                    PAtotal = response.response.points.against.total.all;
                    PFtotal = response.response.points.for.total.all;

                    db.none(`INSERT INTO stats(name, wins, losses, pointsf, pointsa) VALUES('${name}', ${wins}, ${losses}, ${PAtotal}, ${PFtotal});`)
                    .then(() => {
                        console.log('added team Stat data');
                    })
                    .catch(error => {
                        console.log(`Error adding rows to stats table. error message: ${error.message}`);
                    });

            })
            .catch(err => console.error(err));
            
        
    }
});

exports.scheduler = j;