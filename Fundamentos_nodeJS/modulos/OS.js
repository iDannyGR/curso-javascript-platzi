const OS = require ('os');


// console.log(OS.cpus());
// console.log(OS.platform());
// console.log(OS.userInfo());
// console.log(OS.constants);
const SIZE= 1024;
function kb(bytes){return bytes/ SIZE};
function mb(bytes){return kb(bytes)/SIZE};
function gb(bytes){return mb(bytes)/ SIZE};


console.log(OS.freemem());
console.log(kb(OS.freemem()));
console.log(mb(OS.freemem()));
console.log(gb(OS.freemem()));

console.log(gb(OS.totalmem()));


console.log(OS.homedir());
console.log(OS.tmpdir());


console.log(OS.networkInterfaces());