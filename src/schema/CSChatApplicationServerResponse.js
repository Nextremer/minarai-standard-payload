export default {
  head: {
    engineType: String,
    engineName: String,
    requestId: String,
  },
  body: {
    messages: Array.of({
      value: {
        entries: Array.of([
          // balloon
          {
            type: String,
            md: String,
            '?text': String,
            '?face': String,
          },
          // figure
          {
            type: String,
            '?alt': String,
            url: String,
          },
          // buttons
          {
            type: String,
            captions: Array.of(String),
            commands: Array.of([null, String]),
          },
          // command
          {
            type: String,
            command: String,
          },
        ]),
      },
      '?extra': {
      },
    }),
    '?extra': {
    },
  },
};
