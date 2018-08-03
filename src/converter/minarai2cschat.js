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
    const { isValidMinaraiStandardResponseFromMinarai } = validator;
    if (!isValidMinaraiStandardResponseFromMinarai(src)) {
      throw new InvalidPayloadError();
    }

    const { head, body } = src;
    const entries = [];

    // とりあえずheadはそのまま、bodyのみ加工する
    // ※ 現状、body.messagesはarrayだが要素は1つ固定なので
    //    先頭要素のみを抜き出して扱う
    const {
      layout,
      utterances,
      buttons,
      extra,
    } = body.messages[0];


    /* eslint "no-restricted-syntax": 0 */
    for (const utterance of utterances) {
      const { text, expression } = utterance;
      entries.push({
        type: 'balloon',
        md: text,
        face: expression,
      });
    }

    if (layout === 'image-buttons-1') {
      entries.push({
        type: 'figure',
        url: buttons[0].presentation.detail.url,
      });
    } else if (['horizontalButtons', 'verticalButtons'].includes(layout)) {
      const captions = buttons.map(b => b.presentation.detail.viewText);
      const commands = buttons.map(b => b.action.detail.value).filter(Boolean);
      entries.push({
        type: layout,
        captions,
        commands,
      });
    }

    return {
      head,
      body: {
        messages: [{
          value: { entries },
          extra: extra || {},
        }],
        extra: body.extra || {},
      },
    };
  } catch (e) {
    console.log(JSON.stringify(e));
    return {};
  }
}

