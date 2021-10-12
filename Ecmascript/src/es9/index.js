const obj ={
    nombre:'daniel',
    age: 32,
    pais:'SV',
};
let {pais, ...all} = obj;
console.log(all);


const obj1={
    nombre: 'Daniel',
    age:32,
}

const obj2={
    ...obj1,
    pais:'SV',
}
console.log(obj2);

//uso de finally
const queTal=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('hoola mundo'),3000)
        :  reject(new Error('test error'))
    });
};

queTal()
 .then(response => console.log(response))
 .catch(error=> console.log(error))
 .finally(()=> console.log('finalizo'))


 //regex

 const regexDato= /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexDato.exec('2018-04-20');

 const year = match[1]
 const mes = match[2]
 const dia= match[3]

 console.log(year, mes, dia);