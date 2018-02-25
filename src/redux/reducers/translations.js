import ACTIONS from '../actionTypes';
import LS from '../../utils/localstorage';
import strings from '../../translations/strings';
import { normalizeLanguageString } from '../../translations/helpers';
import {
  BROWSER_LANGUAGE,
  BROWSER_COUNTRY,
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
  SUPPORTED_LOCALES,
} from '../../translations/constants';

const defaults = [DEFAULT_LANGUAGE, DEFAULT_COUNTRY];
const initialState = strings([
  LS.get('language') || BROWSER_LANGUAGE,
  LS.get('country') || BROWSER_COUNTRY,
]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.APP.CHANGE_LOCALE:
      return strings(normalizeLanguageString(`${action.language}-${action.country}`, SUPPORTED_LOCALES, defaults));

    default: return state;
  }
};
