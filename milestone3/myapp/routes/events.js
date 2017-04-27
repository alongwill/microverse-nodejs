var express = require('express');
var HashMap = require('hashmap');
var router = express.Router();

/* REQUIREMENT-1
 * The Event object
 */
function Event(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
}
// REQUIREMENT-2
var map = new HashMap();
var index = 0;

/* REQUIREMENT-3 
 * GET all events. 
 */
router.get('/list', function(req, res, next) {
  result = [];
  //console.log('/getAll - returning ' + map.keys.length);
  map.forEach(function(value, key){
    result.push(value);
  });
  res.json(result);
});

/* REQUIREMENT-4:
 * GET a specific event. 
 */
router.get('/get/:id', function(req, res, next) {
  //console.log(req.params);
  var id = parseInt(req.params.id);
  if (map.has(id)) {
    res.json(map.get(id));
  } else {
    res.json('unknown id ' + id);
  }
});

/* REQUIREMENT-5:
 * CREATE new event
 * {
 *   'title'       : 'A Title',
 *   'description' : 'A Description'
 * }
 */
router.post('/add', function(req, res, next) {
  //console.log('/add: received');
  //console.log(req.body)
  
  event = new Event(index,req.body.title,req.body.description, new Date());
  map.set(index, event);
  index++;
  res.json(event);
});
/* REQUIREMENT-6:
 * UPDATE existing event
 * {
 *   'id'          : 0,
 *   'title'       : 'A Title',
 *   'description' : 'A Description'
 * }
 */
router.put('/update', function(req, res, next) {  
  var id = parseInt(req.body.id);
  if (map.has(id)) {
    map.get(id).title = req.body.title;
    map.get(id).description = req.body.description;

    res.json(map.get(id));
  } else {
    res.json('unknown id ' + id);
  }
});

module.exports = router;