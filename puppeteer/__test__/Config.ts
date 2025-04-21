// Config.ts
import dotenv from "dotenv";
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

interface BrowserConfig {
  headless: boolean;
  args: string[];
  slowMo: number | undefined;
  defaultViewport: null;
}

interface Config {
  baseUrl: string;
  username: string;
  password: string;
  browserConfig: BrowserConfig;
}

if (!process.env.ENV) {
  throw new Error("ENV is not defined in the environment variables");
}

const env = process.env.ENV;
const baseUrl =
  env === "qa" ? process.env.BASE_URL_QA : process.env.BASE_URL_PRD;

if (!baseUrl) {
  throw new Error("BASE_URL is not defined in the environment variables");
}

const config: Config = {
  baseUrl,
  username: process.env.TESTUSER || "",
  password: process.env.TESTPASS || "",
  browserConfig: {
    headless: process.env.BROWSER_HEADLESS === "true" || false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    slowMo: process.env.BROWSER_SLOWMO === "true" || false ? 50 : undefined,
    defaultViewport: null,
  },
};

export default config;
