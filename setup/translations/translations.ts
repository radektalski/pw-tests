import { en } from "../../translation-data";

export const locale = process.env.LOCALE?.toLocaleLowerCase() || "en";
function getLanguage(): string {
  return locale;
}

function getTranslationsData(): Record<string, string> {
  const language = getLanguage();
  let translations;

  if (language === "en") {
    translations = en;
  } else {
    translations = en;
  }

  return translations;
}

export const translationsData = getTranslationsData();
