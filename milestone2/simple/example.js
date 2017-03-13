/*
 * https://nodejs.org/api/synopsis.html
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


function Prefixer(prefix) {
      this.prefix = prefix;
}

// Prefixer.prototype.prefixArray = function (arr) {
//       return arr.map(function (x) {
//       return this.prefix + x;
//       }, this); // (A)
// };
Prefixer.prototype.prefixArray = function (arr) {
      return arr.map((x) => this.prefix + x); // (A)
};

const arr = ['a','b','c'];
p = new Prefixer("PRE");


const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');

});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
      console.log(p.prefixArray(arr));
});
