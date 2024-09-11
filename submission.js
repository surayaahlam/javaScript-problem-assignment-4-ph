function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    
    const tax = (income - expenses) * 0.2;
    return tax;
}


function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes("@") || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1){
        return "Invalid Email";
    }

    const emailSplit = email.split("@");
    const notification = emailSplit[0] + " sent you an email from " + emailSplit[1];
    return notification;
}


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
    return (finalScore >= 80) ? true : false;
}


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