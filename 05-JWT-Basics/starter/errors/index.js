 const CustomAPIError = require ('./custom-error')

 const {StatusCodes} = require('http-status-codes')
 const BadRequestError = require ('./bad-request')
 const UnauthenticatedError = require ('./unaunthenticated')

 module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError
 }