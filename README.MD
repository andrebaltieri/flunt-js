![Flunt](https://raw.githubusercontent.com/andrebaltieri/flunt/master/media/flunt-horizontal.png)

# Flunt for Java

You can find a port of this library to Java here: https://github.com/carlosbritojun/jflunt

# Flunt for DotNet

You can find a port of this library to Dotnet here: https://github.com/andrebaltieri/flunt

# FluntJS

FluntJS is a package to help you to validate your business rules

## Instalation

This package is available through Node Package Manager (NPM) Packages: https://www.npmjs.com/package/flunt

**NPM**

```
npm install flunt
```

**Yarn**

```
yarn add flunt
```

## Validations Available

| Validation                | Description                                        |
| ------------------------- | -------------------------------------------------- |
| isRequired                | Check if field has been send                       |
| hasMinLen                 | Check if the field has the minimum length informed |
| hasMaxLen                 |                                                    |
| isFixedLen                |                                                    |
| isEmail                   |                                                    |
| isNullOrUndefined         |                                                    |
| isDate                    |                                                    |
| dateIsGreaterThan         |                                                    |
| dateIsGreaterOrEqualsThan |                                                    |
| dateIsLessThan            |                                                    |
| dateIsLessOrEqualsThan    |                                                    |

## Usage

```
const ValidationContract = require('flunt');

let contract = new ValidationContract();
contract.hasMinLen(req.body.name, 3, 'name', 'The name has been minimum 3 characters lenght');

// If data is invalid
if (!contract.isValid()) {
    return response.status(400).send(contract.errors());
}
```

# About the Art

All logo, icons, colors and fonts were provided with love by Gregory Buso
