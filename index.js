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

ValidationContract.prototype.isFixedLen = (value, len, property, message) => {
  if (!value || value.length != len)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.isEmail = (value, property, message) => {
  var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) errors.push({ property: property, message: message });
};

ValidationContract.prototype.isNullOrUndefined = (value, property, message) => {
  if (value == null || value == undefined)
    errors.push({ property: property, message: message });
};

/* Date Validations */

function _isDate(value) {
  return Object.prototype.toString.call(value) == "[object Date]";
}

ValidationContract.prototype.isDate = (value, property, message) => {
  if (!_isDate(value)) {
    errors.push({ property: property, message: message });
  }
};

ValidationContract.prototype.dateIsGreaterThan = (
  value,
  comparer,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || value <= comparer)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.dateIsGreaterOrEqualsThan = (
  value,
  comparer,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || value < comparer)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.dateIsLessThan = (
  value,
  comparer,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || value >= comparer)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.dateIsLessOrEqualsThan = (
  value,
  comparer,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || value > comparer)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.dateIsEquals = (
  value,
  comparer,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || value != comparer)
    errors.push({ property: property, message: message });
};

ValidationContract.prototype.dateIsBetween = (
  value,
  from,
  to,
  property,
  message
) => {
  if (!_isDate(value) || !_isDate(comparer) || !(value > from && value < to))
    errors.push({ property: property, message: message });
};

/* End Date Validations */

ValidationContract.prototype.errors = () => {
  return errors;
};

ValidationContract.prototype.clear = () => {
  errors = [];
};

ValidationContract.prototype.isValid = () => {
  return errors.length == 0;
};

//export default ValidationContract;
module.exports = ValidationContract;
