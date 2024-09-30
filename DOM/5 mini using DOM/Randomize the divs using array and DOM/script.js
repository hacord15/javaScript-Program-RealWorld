// let bj = document.getElementsByClassName("box")

// bj[2].style.backgroundColor ="red"



let boxes = document.querySelector(".cont").children

// console.log(boxes)


// Random Color Generator
function getRandomColor(){
    let val1 =Math.ceil(0 + Math.random()* 255);
    let val2 =Math.ceil(0 + Math.random()* 255);
    let val3 =Math.ceil(0 + Math.random()* 255);

    return `rgb(${val1},${val2},${val3})`
}


// Applying the Random Colors to Each Box js
Array.from(boxes).forEach(e=>{



    // this works for background color 
    e.style.backgroundColor = getRandomColor()


    // this works for the fonts colors 
    e.style.color = getRandomColor()
    console.log(e.style)
})





// Array.from(boxes): Converts the HTMLCollection (which is an array-like object) into a proper array so that array methods, such as forEach, can be used.


// forEach(e => {...}): Iterates over each child element (now called e) within the array.

// Inside the loop:

// e.style.backgroundColor = getRandomColor(): Applies a randomly generated background color to the child element.


// e.style.color = getRandomColor(): Applies a randomly generated text color to the child element.