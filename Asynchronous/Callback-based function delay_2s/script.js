// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function afterDelay(callback){
    setTimeout(callback,2000);
}
function displayMessage(){
    console.log('Hello');
}

afterDelay(displayMessage);