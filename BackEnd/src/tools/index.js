// Empty 
const isEmpty = require("./empty/isEmpty")

// String

const isDigit = require("./string/isDigit")
const isLowercase = require("./string/isLowercase")
const isUppercase = require("./string/isUppercase")
const isSpecial = require("./string/isSpecial")
const isAlpha = require("./string/isAlpha")
const isAlphaNumeric =  require("./string/isAlphaNumeric")
const isNumeric = require("./string/isNumeric")
const isFloat = require("./string/isFloat")

// User
const isUsername = require("./user/isUsername")
const isEmail = require("./user/isEmail")
const isFirstname = require("./user/isFirstname")
const isLastname = require("./user/isLastname")
const isPassword = require("./user/isPassword")
const isLatitude = require("./user/isLatitude")
const isLongitude = require("./user/isLongitude")

module.exports = {
    isEmpty, isDigit, isLowercase, isUppercase, isSpecial,
    isAlpha, isAlphaNumeric, isNumeric, isFloat, isUsername,
    isEmail,  isFirstname, isLastname, isPassword,
    isLatitude, isLongitude,
};
