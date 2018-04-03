# minarai standard payload
This contains following modules for Minarai Standard Payload.

- Converter that between Minarai Standard Payload and Minarai's dialogue engines (ex. aNOi, Godspeed, ...) payload.
- Validator for Minarai Standard Payload.

## Table of Contents
- [Install](#install)
- [Usage](#usage)

## Install

```shell
npm install -s git+ssh://git@github.com/Nextremer/minarai-standard-payload.git
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

#### Validator

```js
const { validator } from 'minarai-standard

validator.isValidCSChatApplicationServerResponse(payload); // true or false
```
