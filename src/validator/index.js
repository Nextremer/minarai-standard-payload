import schema from 'js-schema';
/* eslint "import/extensions": 0 */
import {
  CSChatApplicationServerResponse,
  MinaraiStandardResponseFromMinarai,
} from '~/schema/*.js';

export default {
  isValidCSChatApplicationServerResponse: schema(CSChatApplicationServerResponse),
  isValidMinaraiStandardResponseFromMinarai: schema(MinaraiStandardResponseFromMinarai),
};

