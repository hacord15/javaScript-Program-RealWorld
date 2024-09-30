// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function valPass(password) {
    if(password.length < 8){
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasUpperCase&&hasLowerCase&&hasDigit;
}

const password ='Pass122345';
console.log(valPass(password));

const invalidPass ='pass';
console.log(valPass(invalidPass));