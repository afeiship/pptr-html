import puppeteer from 'puppeteer';
import '@jswork/next';
import '@jswork/next-random-ua';

const DEFAULT_OPTIONS = {
  headless: true,
  closeable: true,
  userAgent: nx.randomUa(),
  selector: null
};

export default async (inUrl, inOptions) => {
  const options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
  const { userAgent, selector, closeable } = options;
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  userAgent && await page.setUserAgent(userAgent);
  await page.goto(inUrl);
  selector && await page.waitForSelector(selector);
  const html = await page.content();
  closeable && await browser.close();
  return html;
};
