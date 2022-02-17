var a = 'hola';

function hello(){
    let b = 'hola mundo';
    const c = 'hola ñangomundo';
        if(true){
            let d = 'hola mundo mundo ñango';
            debugger
        }
}


hello();


const moneybox1 = ()=>{
    var saveCoins = 0;
    const countCoint = (coins)=>{
        saveCoins +=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
return countCoint;
}

let mymone = moneybox1()

mymone(10);
mymone(10);