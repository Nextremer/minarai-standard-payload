export default {
  head: {
    engineType: String,
    engineName: String,
    requestId: String,
  },
  body: {
    messages: Array.of({
      layout: String,
      titleText: String,
      utterances: Array.of({
        actor: [null, String],
        text: String,
        '?expression': [null, String],
        '?extra': {
        },
      }),
      '?buttons': Array.of({
        presentation: {
          type: String,
          detail: undefined,
        },
        action: {
          type: String,
          detail: undefined,
        },
        '?extra': {
        },
      }),
      '?extra': {
      },
    }),
    '?extra': {
    },
  },
};

