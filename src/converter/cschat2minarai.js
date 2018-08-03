import { InvalidPayloadError } from '~/error';
import validator from '~/validator';

/**
 * Convert for CSChat Application Server Response to Minarai Standard Payload
 *
 * @param {object} src CSChat Application Server Response
 * @return {object} Converted Minarai Standard Payload Object
 */
export default function (src) {
  try {
    const { isValidCSChatApplicationServerResponse } = validator;
    if (!isValidCSChatApplicationServerResponse(src)) {
      throw new InvalidPayloadError();
    }

    const { head, body } = src;

    // とりあえずheadはそのまま、bodyのみ加工する

    // まずはballoonのみを抽出してutterancesに突っ込む
    // ※ 現状、body.messagesはarrayだが要素は1つ固定なので
    //    先頭要素のみを抜き出して扱う
    const message = body.messages[0];
    const utterances = message.value.entries
      .filter(e => e.type === 'balloon')
      .map(e => ({
        actor: '', // TODO 現状のCSChatレスポンスには含まれていないため空文字列
        text: e.md,
        expression: e.face || null,
        extra: {},
      }));

    // その他、typeに応じた処理
    const buttonTypes = ['horizontalButtons', 'verticalButtons'];
    let buttons = message.value.entries.find(e => buttonTypes.includes(e.type));
    const imageTypes = ['figure', 'file'];
    const images = message.value.entries.find(e => imageTypes.includes(e.type));

    let layout = 'chat';
    if (buttons) {
      layout = buttons.type;
      buttons = buttons.captions.map((b, i) => ({
        presentation: {
          type: 'text',
          detail: { viewText: b },
        },
        action: {
          type: 'command',
          detail: { value: buttons.commands[i] },
        },
      }));
    } else if (images) {
      layout = 'image-buttons-1';
      buttons = [{
        presentation: {
          type: 'image',
          detail: { url: images.url },
        },
        action: {
          type: 'none',
          detail: {},
        },
      }];
    }

    return {
      head,
      body: {
        messages: [{
          layout,
          titleText: '', // TODO 現状固定
          utterances,
          buttons,
          extra: message.extra || {},
        }],
        extra: body.extra || {},
      },
    };
  } catch (e) {
    console.log(JSON.stringify(e));
    return {};
  }
}

