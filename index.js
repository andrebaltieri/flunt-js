'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.valide = (name, value, validations = []) => {
    let error = [];
    validations.map((validation) => {
        var result = validation(value, name);
        if (result) {
            error.push(result);
        }
    });
    errors.push({ name, error, valide: error.length == 0 });
}

ValidationContract.prototype.isRequired = (message = "The '{0}' field is required") => (value, name) => (!value || value.length <= 0) ? message.replace("{0}", name) : "";

ValidationContract.prototype.hasMinLen = (min, message) => (value, name) => (!value || value.length < min) ? message : "";

ValidationContract.prototype.hasMaxLen = (max, message) => (value, name) => (!value || value.length > max) ? message : "";

ValidationContract.prototype.isFixedLen = (len, message) => (value, name) => (value.length != len) ? message : "";

ValidationContract.prototype.isEmail = (message) => (value, name) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    return !reg.test(value) ? message : "";
}

ValidationContract.prototype.errors = () => {
    return errors;
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

module.exports = ValidationContract;