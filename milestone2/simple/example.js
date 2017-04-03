/*
 * Testing arrow functions
 */
const arr = ['a','b','c'];

function Prefixer(prefix) {
      this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + x;
      }, this); // (A)
};

normal = new Prefixer("OLD");
console.log("Result using standard function:")
console.log("    " + normal.prefixArray(arr));




function ArrowPrefixer(prefix) {
      this.prefix = prefix;
}

ArrowPrefixer.prototype.prefixArray = function (arr) {
      return arr.map((x) => this.prefix + x); // (A)
};

arrow = new ArrowPrefixer("NEW");
console.log("Result using arrow function:")
console.log("    " + arrow.prefixArray(arr));
