import puppeteer from 'puppeteer';
import '@feizheng/next-js-core2';
import '@feizheng/next-random-ua';

const DEFAULT_OPTIONS = {
  headless: true,
  userAgent: nx.randomUa(),
  selector: null
};

export default async (inUrl, inOptions) => {
  const options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
  const { userAgent, selector } = options;
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  userAgent && await page.setUserAgent(userAgent);
  selector && await page.waitForSelector(selector);
  await page.goto(inUrl);
  const html = await page.content();
  await browser.close();
  return html;
};
