const ValidationContract = require("./index");

test("Check if field 'name' has been sent", () => {
  let customDoc = {
    name: "My Name"
  };

  let contract = new ValidationContract();

  contract.isRequired(customDoc.name, "name", "The name must be sent");

  expect(contract.isValid()).toBe(true);
});

test("Check if field 'name' has not been sent", () => {
  let customDoc = {
    description: "My Description"
  };

  let contract = new ValidationContract();

  contract.isRequired(customDoc.name, "name", "The name must be sent");

  expect(contract.isValid()).toBe(false);
});

test("Check if field 'password' has minimum lenght 6 (test with more 6)", () => {
  let customDoc = {
    password: "123456"
  };

  let contract = new ValidationContract();

  contract.hasMinLen(
    customDoc.password,
    6,
    "password",
    "The password has been more 6 characters"
  );

  expect(contract.isValid()).toBe(true);
});

test("Check if field 'password' has minimum lenght 6 (test with less 6)", () => {
  let customDoc = {
    password: "12345"
  };

  let contract = new ValidationContract();

  contract.hasMinLen(
    customDoc.password,
    6,
    "password",
    "The password has been more 6 characters"
  );

  expect(contract.isValid()).toBe(false);
});

test("Check if field 'password' has max lenght 9 (test with more 9)", () => {
  let customDoc = {
    password: "12345678910"
  };

  let contract = new ValidationContract();

  contract.hasMaxLen(
    customDoc.password,
    9,
    "password",
    "The password has been less 9 characters"
  );

  expect(contract.isValid()).toBe(false);
});

test("Check if field 'password' has max lenght 9 (test with less 9)", () => {
  let customDoc = {
    password: "123456789"
  };

  let contract = new ValidationContract();

  contract.hasMaxLen(
    customDoc.password,
    9,
    "password",
    "The password has been less 9 characters"
  );

  expect(contract.isValid()).toBe(true);
});

test("Check if field 'document' has fixed lenght 11 (test with 11)", () => {
  let customDoc = {
    document: "12345678910"
  };

  let contract = new ValidationContract();

  contract.isFixedLen(
    customDoc.document,
    11,
    "document",
    "The document has been 11 characters"
  );

  expect(contract.isValid()).toBe(true);
});

test("Check if field 'document' has fixed lenght 11 (test with 10)", () => {
  let customDoc = {
    document: "1234567891"
  };

  let contract = new ValidationContract();

  contract.isFixedLen(
    customDoc.document,
    11,
    "document",
    "The document has been 11 characters"
  );

  expect(contract.isValid()).toBe(false);
});

test("Check if field 'email' is a true email", () => {
  let customDoc = {
    email: "test@test.com"
  };

  let contract = new ValidationContract();

  contract.isEmail(
    customDoc.email,
    "document",
    "The email must been a true email"
  );

  expect(contract.isValid()).toBe(true);
});

test("Check if field 'email' is a false email", () => {
  let customDoc = {
    email: "test.com"
  };

  let contract = new ValidationContract();

  contract.isEmail(
    customDoc.email,
    "document",
    "The email must been a true email"
  );

  expect(contract.isValid()).toBe(false);
});
