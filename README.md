# minarai standard payload
This contains following modules for Minarai Standard Payload.

- Converter that between Minarai Standard Payload and Minarai's dialogue engines (ex. aNOi, Godspeed, ...) payload.
- Validator for Minarai Standard Payload.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Demo](#demo)

## Install

```shell
npm install -s git+https://git@github.com/Nextremer/minarai-standard-payload.git
```

## Usage
### Converter

```js
const { convert, PAYLOAD_TYPES } from 'minarai-standard-payload';
const dest = convert(src, {
  from: PAYLOAD_TYPES.ANOI,
  to: PAYLOAD_TYPES.MINARAI_STANDARD,
});

const { Converter, PAYLOAD_TYPES } from 'minarai-standard-payload';
const dest = new Converter({
  type: PAYLOAD_TYPES.ANOI,
  data: src,
}).convertTo({ type: PAYLOAD_TYPES.MINARAI_STANDARD });
```

#### Convert engine's response to Standard Payload

```js

```
### setup

```shell
npm install
```

### build(dev)

```shell
npm run build
```

### build(staging)

```shell
npm run build:staging
```

### build(production)

```shell
npm run build:production
```

### start(local)

```shell
npm start
```

### test(jest)

```shell
# once
npm run test

# watch
npm run tdd
```

## Demo

See https://nextremer.esa.io/posts/440

### Update

You can update demo to push `staging` branch.


