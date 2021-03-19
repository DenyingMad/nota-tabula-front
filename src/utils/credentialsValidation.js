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