var express = require('express');
var HashMap = require('hashmap');
var router = express.Router();

/*
 * The Event object
 */
function Event(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
}

var map = new HashMap();
var index = 0;

/* CREATE new event
 * {'title':'A Title',
 *  'description' : 'A Description'}
 */
router.post('/add', function(req, res, next) {
  console.log('/add: received');
  console.log(req.body)
  
  event = new Event(index,req.body.title,req.body.description, new Date());
  map.set(index, event);
  index++;
  res.json(event);
});

/* GET all events. */
router.get('/getAll', function(req, res, next) {
  result = [];
  console.log('/getAll - returning ' + map.keys.length);
  map.forEach(function(value, key){
    result.push(value);
  });
  res.json(result);
});

module.exports = router;