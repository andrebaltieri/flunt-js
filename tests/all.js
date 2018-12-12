'use strict';
const ValidationContract = require("../index.js");

let contract = new ValidationContract();

exports['test that logs all failures'] = function (assert) {

    contract.valide("email", "", [
        contract.isRequired("required"),
        contract.isEmail("email")
    ]);
    assert.equal(contract.errors()[0].name, "email", 'assert pass is logged');
    assert.equal(contract.errors()[0].error[0], "required", 'assert pass is logged');
    assert.equal(contract.errors()[0].error[1], "email", 'assert pass is logged');

}

if (module == require.main) require('test').run(exports)