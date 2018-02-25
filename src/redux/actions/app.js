import ACTIONS from '../actionTypes';
import LS from '../../utils/localstorage';
import { normalizeLanguageString } from '../../translations/helpers';
import {
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
  SUPPORTED_LOCALES,
} from '../../translations/constants';

const defaults = [DEFAULT_LANGUAGE, DEFAULT_COUNTRY];


export const changeLocale = (language, country) => {
  const [normalizedLanguage, normalizedCountry] = normalizeLanguageString(`${language}-${country}`, SUPPORTED_LOCALES, defaults);

  LS.set('language', normalizedLanguage);
  LS.set('country', normalizedCountry);

  return {
    type: ACTIONS.APP.CHANGE_LOCALE,
    language: normalizedLanguage,
    country: normalizedCountry,
  };
};
