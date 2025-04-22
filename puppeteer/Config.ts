// Config.ts
import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
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

const baseUrl = process.env.BASE_URL || "https://iniciativas.netcomplusve.com";
const headless = process.env.BROWSER_HEADLESS === "0";
const slowMo = Number(process.env.BROWSER_SLOWMO) || 0;

const config: Config = {
  baseUrl,
  username: process.env.TESTUSER || "",
  password: process.env.TESTPASS || "",
  browserConfig: {
    headless,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    slowMo,
    defaultViewport: null,
  },
};

export default config;
