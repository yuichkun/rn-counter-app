import { driver, config } from './setup';

beforeAll(async () => {
  config.noReset = true;
  await driver.init(config);
  await driver.sleep(1000);
});

describe('10回タップしたら', () => {
  test('ホームの画面がレンダリングされる', async () => {
    expect(await driver.hasElementByAccessibilityId('home')).toBe(true);
  });
  test('10回タップする', async () => {
    const addButton = await driver.elementByAccessibilityId('addButton');
    for (let i = 0; i < 10; i++){
      await driver.tapElement(addButton);
    }
  });
  test('モーダルウィンドウが表示される', async () => {
    const modalWindow = await driver.elementByAccessibilityId('modal');
  });
  test('クローズボタンを押してホームに戻る', async () => {

  });
});