import { normalizeLanguageString } from './helpers';

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_COUNTRY = 'ca';

const COUNTRIES = {
  ca: 'ca',
  us: 'us',
};

const LANGUAGES = {
  en: 'en',
  fr: 'fr',
};

export const SUPPORTED_LOCALES = [
  {
    country: COUNTRIES.ca,
    languages: [LANGUAGES.en, LANGUAGES.fr],
  },
  {
    country: COUNTRIES.us,
    languages: [LANGUAGES.en, LANGUAGES.fr],
  },
];


export default null;

const defaults = [DEFAULT_LANGUAGE, DEFAULT_COUNTRY];
const browser = normalizeLanguageString(window.navigator.language, SUPPORTED_LOCALES, defaults);

export const BROWSER_LANGUAGE = browser[0];
export const BROWSER_COUNTRY = browser[1];
