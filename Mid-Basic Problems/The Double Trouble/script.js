function doubleTrouble(arr){
    let result = [];

    arr.forEach((element , index) => {
        let currentElement = element ;
        let previousElement = arr[index - 1];

        if(index >0 && previousElement === currentElement){
            result.push(currentElement);
        }
        else{
            result.push(currentElement*2);
        }

    });
    return result;

}

console.log(doubleTrouble([1,2,2,3,3,4,5,5,6,7]));