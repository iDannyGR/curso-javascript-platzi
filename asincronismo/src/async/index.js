const doSomeAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('do Some'),3000)
        : reject(new Error('Test error'))
    });
}

const doSome = async()=>{
    const something = await doSomeAsync();
    console.log(something);
}


console.log('antes');
doSome();
console.log('despues');

const anotherFunction = async()=>{
    try {
        const some = await doSomeAsync();
        console.log(some);
    } catch {
        console.error(error)
    }
}

console.log('antes 1');
anotherFunction();
console.log('despues 1');