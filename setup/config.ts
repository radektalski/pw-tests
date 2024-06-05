import { urls } from "../common";
import { logger } from "../libs/logger";
import { translationsData } from "./translations/translations";
import { Translation } from "./translations/types";

export const environment: "prod" =
  (process.env.ENV?.toLowerCase() as "prod") || "prod";

export const locale = process.env.LOCALE?.toLocaleLowerCase() || "en";

export const shop = process.env.SHOP?.toLocaleLowerCase() || "saucedemo";

/**
 * This class represents the configuration for the saucedemo tests. It contains
 * properties for various settings, such as the URL to use, the language to use, and
 * whether or not to log data. The configuration is implemented as a singleton using
 * the static getInstance() method.
 */
export class Config {
  private static instance: Config;
  shouldLogData: boolean = process.env.LOG_DATA
    ? getEnvironmentVariableAsBoolean(process.env.LOG_DATA)
    : true;
  env = environment;
  shop = shop;
  url = urls[this.shop][this.env];
  language = locale;
  translationsData: Translation = translationsData;

  /**
   * Gets the instance of the Config singleton. If the instance does not exist, it is created and logged.
   * @returns The instance of the Config singleton.
   */
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
      this.logData();
    }
    return Config.instance;
  }

  public static logData(): void {
    if (Config.instance.shouldLogData) {
      logger.info("Initiated shop tests:");
      logger.info(`1. Using Locale: ${Config.instance.language.toUpperCase()}`);
      logger.info(`2. Using Shop: ${Config.instance.shop.toUpperCase()}`);
      logger.info(`3. Using Environment: ${Config.instance.env.toUpperCase()}`);
      logger.info(`4. With url: ${Config.instance.url}`);
    }
  }
}

/**
 * Gets the Config singleton instance using the getInstance() method.
 * @returns The Config singleton instance.
 */
const getConfig = (): Config => {
  return Config.getInstance();
};

/**
 * Gets the Config singleton instance using the getInstance() method.
 * @returns The Config singleton instance.
 */
const getEnvironmentVariableAsBoolean = (
  variable: string | undefined
): boolean => {
  return variable === "true";
};

const translations: Translation = getConfig().translationsData;
const url = getConfig().url;

export { translations, url };
