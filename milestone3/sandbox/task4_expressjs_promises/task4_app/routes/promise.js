var express = require('express');
var router = express.Router();

/* =========================================================================
 * Start Promises example 
 * ========================================================================= */
let wrap = fn => (...args) => fn(...args).catch(args[2])

router.get('/test', wrap(async function (req, res) {
  console.log(" --> /test");
  let data = await queryDb();
  // handle data
  let csv = await makeCsv(data);
  // handle csv

  res.render('index', { title: 'Using Promises in Express - done' });
  console.log(" --> /test");
}));
function queryDb() {
  console.log('--> queryDb');
  // TODO: add timeout here
  return "foo";
}
function makeCsv(ignore_me) {
  console.log('--> makeCsv');
  // TODO: add timeout here
  return "bar";
}
/* =========================================================================
 * Start Promises example 
 * ========================================================================= */

/* GET Promises. */
router.get('/', function(req, res, next) {
  //throw new Error('oh no!','foo');
  res.render('index', { title: 'Using Promises in Express' });
});
router.use(function (err, req, res, next) {
  console.log(err.message) // oh no!
  res.render('error', { title: 'Express' });
})
module.exports = router;
