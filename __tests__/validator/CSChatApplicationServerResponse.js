import { validator } from '~/index';

const { isValidCSChatApplicationServerResponse } = validator;
describe('Validator/isValidCSChatApplicationServerResponse', () => {
  it('成功例', () => {
    const data = {
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
            action: null,
          },
          extra: {},
        }],
      },
    };
    expect(isValidCSChatApplicationServerResponse(data)).toBeTruthy();
  });
  it('失敗例', () => {
    // undefined
    expect(isValidCSChatApplicationServerResponse(undefined)).toBeFalsy();
    // null
    expect(isValidCSChatApplicationServerResponse(null)).toBeFalsy();
    // unmatched object
    expect(isValidCSChatApplicationServerResponse({ hoge: 'hoge' })).toBeFalsy();
  });
});

