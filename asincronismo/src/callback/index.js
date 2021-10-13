function suma(a,b){
    return a+b;
}

function calculadora(a,b, callback){
    return callback(a,b);
}

console.log(calculadora(6,15,suma));


function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);