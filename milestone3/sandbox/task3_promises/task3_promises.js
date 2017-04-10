/*
 * https://nodejs.org/api/synopsis.html
 */

var fs = require('fs');

/*
 * Reading a file without a Promise
 */
fs.readFile('config.json',
	function (error, text) {
        if (error) {
            console.error('Error while reading config file: ' + error.message);
        } else {
            try {
                const obj = JSON.parse(text);
                console.log('---------------------------');
                console.log('*** Using standard fucntion ***');
                console.log(JSON.stringify(obj, null, 4));
                console.log('---------------------------');
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });

/*
 * Reading a file with a Promise
 */
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  fs.readFile('config.json',
	function (error, text) {
        if (error) {
            reject(error.message);
        } else {
            try {
                const obj = JSON.parse(text);
                resolve(JSON.stringify(obj, null, 4));
            } catch (e) {
                reject("Error parsing JSON: " + e);
            }
        }
    });
});

promise
.then(function(result) {
    console.log('---------------------------');
    console.log('*** Using a promise ***');
    console.log(result);
    console.log('---------------------------');
})
.catch(function (error) { // (B)
    // File read error or JSON SyntaxError
    console.error('An error occurred', error);
});
