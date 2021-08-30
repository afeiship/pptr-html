import fn from '../src';

describe('api.basic', () => {
  test('visit baidu will get title', async () => {
    const { $, html } = await fn('https://www.baidu.com');
    expect($('title').text()).toBe('百度一下，你就知道');
  });

  test.only('visit protected cookie site will get the right cookie', async () => {
    const protected_url =
      'http://www.pbc.gov.cn/zhengcehuobisi/125207/125213/125431/125475/index.html';
    const { $, response } = await fn(protected_url);
    expect($('title').text().includes('中国人民银行')).toBe(true);
    console.log(response.headers());
  });
});
