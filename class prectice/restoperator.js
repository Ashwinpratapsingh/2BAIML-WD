function sum(...values){
    let total = 0;
    for( let n of values){
        total+=n
    }
    console.log(total);
}
sum(10,20);
sum(10,100,1000);

