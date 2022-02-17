const person = ()=>{
    saveName = 'Name';
    return {
        getName: ()=>{
            return saveName;
        },
        setName:(name)=>{
            saveName = name;
        }
    };
}


newPerson = person();

console.log(newPerson.getName());

newPerson.setName('daniel');
console.log(newPerson.getName())