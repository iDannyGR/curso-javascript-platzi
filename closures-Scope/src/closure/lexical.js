const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}



let build = buildCount(1);

build();
build();
build();