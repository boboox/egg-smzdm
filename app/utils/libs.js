var models = require('../model');

module.exports.handleResult = (result) => {
    const response = Object.assign({}, models.response);
    if (!result || result.iserror) {
        response.isError = true;
        response.errorMessage = result ? result.message : '';
        response.errorCode = '';
    } else {
        response.data = result;
    }
    return response;
}
