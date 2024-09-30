function validateInt(number){
    if(!Number.isInteger(number)){
        throw new Error('Invalid number');
    }
    console.log("Number is valid",number);
}

try {
    validateInt(12);
    validateInt(2.2);
} catch (error){
    console.log("Error:",error.message);
}