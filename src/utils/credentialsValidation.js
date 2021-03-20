const weakPasswords = ['qwerty_123', 'password'];

export const passwordValidation = (password) => {
    return new Promise((resolve, reject) => {
        let dynamicErrorMsg = "Default";
        // regex
        const upper = /[A-Z]/,
            lower = /[a-z]/,
            number = /[0-9]/,
            space = /\s/,
            special = /[!#$%&'()*+,./:;<=>?@^_{|}~-]/;
        // tests
        if (space.test(password)) {
            dynamicErrorMsg =  "Пароль не должен быть пустым или содержать пробелы"
            reject(dynamicErrorMsg)
        }
        if (!upper.test(password)) {
            dynamicErrorMsg = "Password must contain at least one uppercase letter"
            reject(dynamicErrorMsg)
        }
        if (!lower.test(password)) {
            dynamicErrorMsg = "Password must contain at least one lowercase letter"
            reject(dynamicErrorMsg)
        }
        if (!number.test(password)) {
            dynamicErrorMsg = "Password must contain at least one number"
            reject(dynamicErrorMsg)
        }
        if (!special.test(password)) {
            dynamicErrorMsg = "Password must contain at least one special character"
            reject(dynamicErrorMsg)
        }
        // check if password matches any of simple passwords
        if (password && weakPasswords.indexOf(password.toLowerCase()) > -1) {
            dynamicErrorMsg = "Password is too simple"
            reject(dynamicErrorMsg)
        }
        resolve("Password is good")
    })
}

export const usernameValidation = (username) => {
    return new Promise((resolve, reject) => {
        let dynamicErrorMsg = "Default dynamic error message.";
        // regex
        const firstPeriod = /^[.]/,
            lastPeriod = /[.]$/,
            space = /\s/,
            consecutiveDots = /[.]{2,}/,
            special = /[@&=_'+,<>-]/;
        // tests
        if (space.test(username)) {
            dynamicErrorMsg = "Username cannot contain space."
            reject(dynamicErrorMsg)
        }
        if (firstPeriod.test(username)) {
            dynamicErrorMsg = "Username cannot start or end with ( . )."
            reject(dynamicErrorMsg)
        }
        if (lastPeriod.test(username)) {
            dynamicErrorMsg = "Username cannot start or end with ( . )."
            reject(dynamicErrorMsg)
        }
        if (consecutiveDots.test(username)) {
            dynamicErrorMsg = "Username cannot contain two or more ( . ) in a row."
            reject(dynamicErrorMsg)
        }
        if (special.test(username)) {
            dynamicErrorMsg = "Username cannot contain these symbols: ( @&=_'+,<>- )."
            reject(dynamicErrorMsg)
        }
        resolve(true);
    });
}