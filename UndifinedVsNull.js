let a = null;
console.log(a);
// null

let b;
console.log(b);
// undefined

let c = undefined;
console.log(c);
// undefined



// Finally, when looking up non-existent properties in an object, you will receive undefined:
var d = {};
console.log(d.fake);
// undefined