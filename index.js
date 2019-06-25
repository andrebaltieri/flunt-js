"use strict";

let errors = [];

function ValidationContract() {
  errors = [];
}

// Check if the field has been created
ValidationContract.prototype.isRequired = (value, property, message) => {
  if (!value || value.length <= 0)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.hasMinLen = (value, min, property, message) => {
  if (!value || value.length < min)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.hasMaxLen = (value, max, property, message) => {
  if (!value || value.length > max)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.hasLen = (value, len, property, message) => {
  if (!value || value.length != len)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.isFixedLen = (value, len, property, message) => {
  if (value.length != len)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.isEmail = (value, property, message) => {
  var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) errors.push({ property: property, message: message });
};

ValidationContract.prototype.IsNullOrUndefined = (value, property, message) => {
  if (value == null || value == undefined)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.errors = () => {
  return errors;
};

ValidationContract.prototype.clear = () => {
  errors = [];
};

ValidationContract.prototype.isValid = () => {
  return errors.length == 0;
};

module.exports = ValidationContract;
