import { PAYLOAD_TYPES } from '~/constants';
import {
  cschat2minarai,
  minarai2cschat,
} from './*.js';

const map = {
  [PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE]: {
    [PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI]: cschat2minarai,
  },
  [PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI]: {
    [PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE]: minarai2cschat,
  },
};

export default function (src, opts) {
  const { from, to } = opts;
  if (!from || !to) {
    // TODO error handling
    // TODO toはfromから推測するようにしたい
    return {};
  }

  if (!Object.keys(PAYLOAD_TYPES).includes(from) || !Object.keys(PAYLOAD_TYPES).includes(to)) {
    // TODO error handling
    // TODO toはfromから推測するようにしたい
    return {};
  }

  try {
    const fn = map[from][to];
    return fn ? fn(src) : {};
  } catch (e) {
    return {};
  }
}

