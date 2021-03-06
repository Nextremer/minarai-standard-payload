import { convert, PAYLOAD_TYPES } from '~/index';

describe('Converter/Std2CSChat', () => {
  it('with chat', () => {
    expect(convert({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          layout: 'chat',
          titleText: '',
          utterances: [
            {
              actor: '',
              text: 'ご迷惑をお掛けしており大変申し訳ございません。ご質問内容を理解することができませんでした。お客様のご質問は、オペレーターによる助けが必要な可能性が高いです。',
              expression: 'normal',
              extra: {
              },
            },
            {
              actor: '',
              text: 'はいをご選択いただくことでオペレータでの対応が可能です。\nオペレーターにお繋ぎしてもよろしいですか？',
              expression: 'normal',
              extra: {
              },
            },
          ],
          extra: {},
        }],
      },
    }, {
      from: PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,
      to: PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE,
    })).toEqual({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          value: {
            entries: [
              {
                type: 'balloon',
                md: 'ご迷惑をお掛けしており大変申し訳ございません。ご質問内容を理解することができませんでした。お客様のご質問は、オペレーターによる助けが必要な可能性が高いです。',
                face: 'normal',
              },
              {
                type: 'balloon',
                md: 'はいをご選択いただくことでオペレータでの対応が可能です。\nオペレーターにお繋ぎしてもよろしいですか？',
                face: 'normal',
              },
            ],
          },
          extra: {},
        }],
        extra: {},
      },
    });
  });
  it('with button', () => {
    expect(convert({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          layout: 'horizontalButtons',
          titleText: '',
          utterances: [
            {
              actor: '',
              text: 'ご迷惑をお掛けしており大変申し訳ございません。ご質問内容を理解することができませんでした。お客様のご質問は、オペレーターによる助けが必要な可能性が高いです。',
              expression: 'normal',
            },
            {
              actor: '',
              text: 'はいをご選択いただくことでオペレータでの対応が可能です。\nオペレーターにお繋ぎしてもよろしいですか？',
              expression: 'normal',
            },
          ],
          buttons: [
            {
              presentation: { type: 'text', detail: { viewText: 'はい' } },
              action: { type: 'command', detail: { value: 'operator_yes' } },
            },
            {
              presentation: { type: 'text', detail: { viewText: 'いいえ' } },
              action: { type: 'command', detail: { value: 'operator_no' } },
            },
          ],
          extra: {},
        }],
      },
    }, {
      from: PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,
      to: PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE,
    })).toEqual({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          value: {
            entries: [
              {
                type: 'balloon',
                md: 'ご迷惑をお掛けしており大変申し訳ございません。ご質問内容を理解することができませんでした。お客様のご質問は、オペレーターによる助けが必要な可能性が高いです。',
                face: 'normal',
              },
              {
                type: 'balloon',
                md: 'はいをご選択いただくことでオペレータでの対応が可能です。\nオペレーターにお繋ぎしてもよろしいですか？',
                face: 'normal',
              },
              {
                type: 'horizontalButtons',
                captions: [
                  'はい',
                  'いいえ',
                ],
                commands: [
                  'operator_yes',
                  'operator_no',
                ],
              },
            ],
          },
          extra: {},
        }],
        extra: {},
      },
    });
  });
  it('with image', () => {
    expect(convert({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          layout: 'image-buttons-1',
          titleText: '',
          utterances: [
          ],
          buttons: [
            {
              presentation: { type: 'image', detail: { url: 'http://google.com/' } },
              action: { type: 'none', detail: {} },
            },
          ],
          extra: {},
        }],
      },
    }, {
      from: PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,
      to: PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE,
    })).toEqual({
      head: {
        engineType: 'hoge',
        engineName: 'fuga',
        requestId: 'piyo',
      },
      body: {
        messages: [{
          value: {
            entries: [
              {
                type: 'figure',
                url: 'http://google.com/',
              },
            ],
          },
          extra: {},
        }],
        extra: {},
      },
    });
  });
  it('with invalid payload', () => {
    expect(convert({ hoge: 'hoge' }, {
      from: PAYLOAD_TYPES.CSCHAT_APPLICATION_SERVER_RESPONSE,
      to: PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,
    })).toEqual({});
  });
  it('with invalid payload', () => {
    expect(convert({ hoge: 'hoge' }, {
      to: PAYLOAD_TYPES.MINARAI_STANDARD_RESPONSE_FROM_MINARAI,
    })).toEqual({});
  });
});

