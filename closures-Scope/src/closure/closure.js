const moneyBox = (coins)=>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`)
}

moneyBox(5);
moneyBox(10);


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