import schema from 'js-schema';
import {
  CSChatApplicationServerResponse,
} from '~/schema/*.js';

export default {
  isValidCSChatApplicationServerResponse: schema(CSChatApplicationServerResponse),
};

