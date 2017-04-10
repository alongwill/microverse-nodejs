var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  throw new Error('oh no!','foo');
  //res.render('index', { title: 'Express' });
});
router.use(function (err, req, res, next) {
  console.log(err.message) // oh no!
  res.render('error', { title: 'Express' });
})
module.exports = router;
