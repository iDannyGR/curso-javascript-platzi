const fs = require ('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8')
// readableStream.on('data', (chunk)=>{
//     data += chunk
// });


// readableStream.on('end', ()=>{
//     console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const transfrom = stream.transfrom;

function mayus(){
    transfrom.call(this);
}
util.inherits(Mayus, Transform)