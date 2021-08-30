import puppeteer, { HTTPResponse } from 'puppeteer';
import cheerio, { CheerioAPI } from 'cheerio';

interface InputOptions extends puppeteer.LaunchOptions {
  selector?: string;
  headless?: boolean;
  closeable?: boolean;
  userAgent?: string;
}

interface OutputOptions {
  $: CheerioAPI;
  response: HTTPResponse;
  html: string;
}

const defaults: InputOptions = {
  headless: true,
  closeable: true,
  executablePath: process.env.PUPPETEER_EXEC_PATH,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv,2.0.1) Gecko/20100101 Firefox/4.0.1',
  selector: ''
};

export default async (inUrl: string, inOptions?: InputOptions): Promise<OutputOptions> => {
  const options = Object.assign({}, defaults, inOptions);
  const { userAgent, selector, closeable } = options;
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setUserAgent(userAgent!);
  const response = await page.goto(inUrl);
  selector && (await page.waitForSelector(selector));
  const html = await page.content();
  const $ = cheerio.load(html);
  closeable && (await browser.close());
  return { $, response, html };
};
