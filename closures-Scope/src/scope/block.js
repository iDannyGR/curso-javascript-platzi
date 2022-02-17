const fruits = ()=>{
    if(true){
            var fruit1 = 'manzana';
            let fruit2 = 'manzana';
            const fruit3 = 'manzana';
            console.log(fruit2, fruit3)
    }

    console.log(fruit1 )
}

fruits();

const anotherfunction=()=>{
    for (let i = 0; i< 10; i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
}


anotherfunction();
