function calculateTax(income, expenses) {

    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    
    const tax = (income - expenses) * 0.2;
    return tax;
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(7000, 8000));

console.log('.............................');

function sendNotification(email) {

    if (typeof email !== 'string' || !email.includes("@") || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1){
        return "Invalid Email";
    }

    const emailSplit = email.split("@");
    const notification = emailSplit[0] +" sent you an email from "+ emailSplit[1];
    return notification;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification(5));

console.log('.............................');

function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return "Invalid Input"
    }

    for (let letter of name){
        if (isNaN(parseInt(letter)) === false){
            return true;
        }
    }
    return false;
}

// console.log(isNaN(parseInt("7")));
// console.log(isNaN(parseInt("f")));
// console.log(parseInt("7"));
// console.log(parseInt("f"));

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
console.log(checkDigitsInName(345));

console.log('.............................');

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean'){
        return "Invalid Input";
    }

    let finalScore = 0;
    for (let key in obj){
        if (key === 'testScore' && obj[key] <= 50){
            finalScore += obj[key];
        }
        if (key === 'schoolGrade' && obj[key] <= 30){
            finalScore += obj[key];
        }
        if (key === 'isFFamily' && obj[key] === true){
            finalScore += 20;
        }
    }
    // if (finalScore >= 80){
    //     return true;
    // } else {
    //     return false;
    // }
    return (finalScore >= 80) ? true : false;
}


console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25,
    isFFamily : true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 50, schoolGrade: 30,
    isFFamily : false }));

console.log('.............................');

function waitingTime(waitingTimes , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber < waitingTimes.length){
        return "Invalid Input";
    }
    let sum = 0;
    for (let time of waitingTimes){
        sum += time;
    }

    const averageTime = Math.round(sum / waitingTimes.length);

    const waitingInterviewees = (serialNumber - 1) - waitingTimes.length;

    const waitingTime = averageTime * waitingInterviewees;
    return waitingTime;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));

