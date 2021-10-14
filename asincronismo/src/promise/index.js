const someThingWill=()=> {
    return new Promise ((resolve, reject)=>{
        if(true){
            resolve('esta correcto');
        }else{
            reject('error');
        }
    });
};

someThingWill()
    .then(response => console.log(response))
    .catch (err => console.log(err))

const someThingWill2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True')
            },2000)
        }else{
            const error = new Error('errorazo');
            reject(error); 
        }
    });
}

someThingWill2()
    .then(response =>console.log(response))
    .catch(err => console.error(err))

Promise.all([someThingWill(), someThingWill2()])
    .then(response =>{
        console.log('array of results', response);
    })
    .catch(err =>{
      console.error(err)  
    })