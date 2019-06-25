const ValidationContract = require("./index");

test("Check if field 'name' has been sent", () => {
  let customDoc = {
    name: "My Name"
  };

  let contract = new ValidationContract();

  contract.isRequired(customDoc.name, "name", "The name must be sent");

  expect(contract.IsValid()).toBe(true);
});

test("Check if field 'name' has not been sent", () => {
  let customDoc = {
    description: "My Description"
  };

  let contract = new ValidationContract();

  contract.isRequired(customDoc.name, "name", "The name must be sent");

  expect(contract.IsValid()).toBe(false);
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

  expect(contract.IsValid()).toBe(true);
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

  expect(contract.IsValid()).toBe(false);
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

  expect(contract.IsValid()).toBe(false);
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

  expect(contract.IsValid()).toBe(true);
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

  expect(contract.IsValid()).toBe(true);
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

  expect(contract.IsValid()).toBe(false);
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

  expect(contract.IsValid()).toBe(true);
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

  expect(contract.IsValid()).toBe(false);
});

test("Check if field 'email' is null", () => {
  let customDoc = {
    email: null
  };

  let contract = new ValidationContract();

  contract.IsNullOrUndefined(
    customDoc.email,
    "document",
    "The email must been a true email"
  );

  expect(contract.IsValid()).toBe(false);
});

test("Check if field 'email' is undefined", () => {
  let customDoc = {
    email: undefined
  };

  let contract = new ValidationContract();

  contract.IsNullOrUndefined(
    customDoc.email,
    "document",
    "The email must been a true email"
  );

  expect(contract.IsValid()).toBe(false);
});

test("Check if field 'birthdate' is Date (field as date)", () => {
  let customDoc = {
    birthdate: new Date("2019-06-25")
  };

  let contract = new ValidationContract();

  contract.IsDate(
    customDoc.birthdate,
    "birthdate",
    "The birthdate must been a true date"
  );
  expect(contract.IsValid()).toBe(true);
});

test("Check if field 'birthdate' is Date (field as string)", () => {
  let customDoc = {
    birthdate: "2019-06-25"
  };

  let contract = new ValidationContract();

  contract.IsDate(
    customDoc.birthdate,
    "birthdate",
    "The birthdate must been a true date"
  );
  expect(contract.IsValid()).toBe(false);
});

test("Check if field 'tomorrow' is greater than today (must be true)", () => {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  let customDoc = {
    tomorrow: new Date(tomorrow)
  };

  let contract = new ValidationContract();

  contract.DateIsGreaterThan(
    customDoc.tomorrow,
    new Date(),
    "tomorrow",
    "The tomorrow must been a greater than date"
  );
  expect(contract.IsValid()).toBe(true);
});

test("Check if field 'tomorrow' is greater than today (must be false)", () => {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() - 1);

  let customDoc = {
    tomorrow: new Date(tomorrow)
  };

  let contract = new ValidationContract();

  contract.DateIsGreaterThan(
    customDoc.tomorrow,
    new Date(),
    "tomorrow",
    "The tomorrow must been a greater than date"
  );
  expect(contract.IsValid()).toBe(false);
});

test("Check if field 'yesterday' is lower than today (must be true)", () => {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  let customDoc = {
    yesterday: new Date(yesterday)
  };

  let contract = new ValidationContract();

  contract.DateIsLessThan(
    customDoc.yesterday,
    new Date(),
    "yesterday",
    "The yesterday must been a less than date"
  );
  expect(contract.IsValid()).toBe(true);
});

test("Check if field 'yesterday' is lower than today (must be false)", () => {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() + 1);

  let customDoc = {
    yesterday: new Date(yesterday)
  };

  let contract = new ValidationContract();

  contract.DateIsLessThan(
    customDoc.yesterday,
    new Date(),
    "yesterday",
    "The yesterday must been a less than date"
  );
  expect(contract.IsValid()).toBe(false);
});
