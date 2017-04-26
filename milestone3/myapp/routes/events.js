var express = require('express');
var HashMap = require('hashmap');
var router = express.Router();

/*
 *
 */
function Event(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
}

var map = new HashMap();



/* GET users listing. */
router.get('/', function(req, res, next) {
  event = new Event(1, "Test", "A test event", new Date());
  map.set(1, event);
  console.log(map);
  console.log(event);
  res.send('respond with a resource');
});

module.exports = router;
