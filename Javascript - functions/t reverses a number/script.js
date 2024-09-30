function reverNum(n){
    n= n + "";
    return n.split("").reverse().join("");
}

console.log(Number(reverNum(12345)));