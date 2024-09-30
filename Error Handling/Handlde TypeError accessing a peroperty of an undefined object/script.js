try{
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
}
catch (error){
    if(error instanceof TypeError){
        console.log("Error: Property access to undefined object");

    }
    else{
        throw error;
    }
}


// Explanation:

// In the above exercise, we create a variable undefinedObject and assign it the value of undefined. Then, we try to access undefinedObject's property. Since undefined has no properties, this operation will result in a TypeError.

// The code is wrapped in a try-catch block. Inside the catch block, we check if the caught error is an instance of TypeError using the instanceof operator. If it is, we log the custom error message 'Error: Property access to undefined object'. Otherwise, if the error is not a TypeError, it might be a different type of error, so we rethrow the error using throw error.