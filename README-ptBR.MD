![Flunt](https://raw.githubusercontent.com/andrebaltieri/flunt/master/media/flunt-horizontal.png)

# Flunt para Java

Você pode encontrar uma versão desta biblioteca para java em: https://github.com/carlosbritojun/jflunt

# Flunt para DotNet

Você pode encontrar uma versão desta biblioteca para .Net em: https://github.com/andrebaltieri/flunt

# FluntJS

FluntJS é um pacote que ajuda você a validar suas regras de negócios.

## Instalação

Este pacote esta disponível para instalação através do "Node Package Manager" (NPM) https://www.npmjs.com/package/flunt

**NPM**

```
npm install flunt
```

**Yarn**

```
yarn add flunt
```

## Validações disponíveis

| Validação                 | Descrição                                          |
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

## Exemplo

```
const ValidationContract = require('flunt');

let contract = new ValidationContract();
contract.hasMinLen(req.body.name, 3, 'name', 'The name has been minimum 3 characters lenght');

// If data is invalid
if (!contract.isValid()) {
    return response.status(400).send(contract.errors());
}
```

# Sobre a arte

Todos os logos, ícones, cores e fontes foram fornecidas com amor por Gregory Buso
