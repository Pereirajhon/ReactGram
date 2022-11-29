const {body} = require("express-validator")

const userCreateValidation = () => {
    return [body("name").isString().withMessage("o nome é obrigatório.") ]
}

module.exports = {
    userCreateValidation,
}