const Validator = require('validator');

const validate = (data) => {
    const mandatoryField = ['firstName', 'emailId', 'password'];
    const isAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

    if (!isAllowed) {
        throw new Error("Field missing");
    }
    
    // Fixed email validation
    if (!Validator.isEmail(data.emailId)) {
        throw new Error("Invalid email");
    }
    
    // Optional: Gmail restriction
    if (!data.emailId.endsWith('@gmail.com')) {
        throw new Error("Only Gmail addresses are allowed");
    }
    
    if (!Validator.isLength(data.firstName, { min: 3, max: 20 })) {
        throw new Error("Name must be between 3 and 20 characters");
    }
    
    if (!Validator.isStrongPassword(data.password)) {
        throw new Error("Please enter a strong password (min 8 chars, with uppercase, lowercase, number, and symbol)");
    }
}

module.exports = validate;