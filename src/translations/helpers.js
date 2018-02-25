import { uniq, isNil } from 'ramda';


/**
 * Finds locale object in list from provided country.
 * @param {string}
 * @param {array}
 * @return {mixed} object|undefined
 */
export const findLocaleByCountry = (country, locales) => (
  locales.find(l => l.country === country)
);

/**
 * Get a list of countries from a list of locale objects.
 * @param {array}
 * @return {array}
 */
export const getSupportedCountries = locales => (
  locales.map(locale => locale.country)
);

/**
 * Get a list of languages from a list of locale objects.
 * @param {array}
 * @return {array}
 */
export const getSupportedLanguages = locales => (
  uniq(locales.reduce((languages, locale) => languages.concat(locale.languages), []))
);

/**
 * Check if the provided country supports the provided language.
 * @param {string}
 * @param {string}
 * @param {array}
 * @return {boolean}
 */
export const countrySupportsLanguage = (
  country,
  language,
  locales
) => {
  const locale = findLocaleByCountry(country, locales);
  if (locale) {
    return locale.languages.includes(language);
  }
  return false;
};

/**
 * Get a standard language string ("fr", "en-CA", ...) and returns a supported locale set.
 * If the string components are not supported, returns defaults.
 * @param {string}
 * @param {array}
 * @param {array} defaults Defaults in the format [ language, country ]
 * @return {array} [ language, country ]
 */
export const normalizeLanguageString = (
  string,
  locales,
  defaults
) => {
  const [language, country] = string.toLowerCase().split('-');
  const supportsLanguage = countrySupportsLanguage(country, language, locales);

  if (getSupportedCountries(locales).includes(country) && supportsLanguage) {
    return [language, country];
  }

  return defaults;
};

/**
 * Get the supported languages for a provided country.
 * @param {string}
 * @param {array}
 * @return {array}
 */
export const getCountryLanguages = (country, locales) => {
  const locale = locales.find(l => l.country === country);
  if (!locale) {
    return [];
  }
  return locale.languages;
};

/**
 * Get the first language supported by provided country.
 * @param {string}
 * @param {array}
 * @return {string}
 */
export const getCountryDefaultLanguage = (country, locales) => (
  getCountryLanguages(country, locales)[0]
);


/**
 * Replace dynamic string variables by the provided content.
 * @param {string} string The string in which we will replace the variables.
 * @param {object} replace The object containing the variables
 * @return {string} The updated string
 */
export const replaceStringVars = (string, replace) => (
  Object.keys(replace).reduce((acc, key) => (
    acc.replace(new RegExp(`{${key}}`, 'g'), replace[key])
  ), string)
);

export const formatPrice = (price = 0) => `$${isNil(price) ? (0).toFixed(2) : price.toFixed(2)}`;
