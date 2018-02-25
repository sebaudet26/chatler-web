import ACTIONS from '../actionTypes';
import LS from '../../utils/localstorage';
import {
  BROWSER_LANGUAGE,
  BROWSER_COUNTRY,
} from '../../translations/constants';

const initialState = {
  working: false,
  language: LS.get('language') || BROWSER_LANGUAGE,
  country: LS.get('country') || BROWSER_COUNTRY,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.APP.CHANGE_LOCALE:
      return {
        ...state,
        language: action.language,
        country: action.country,
      };

    case ACTIONS.APP.TOGGLE_WORKING:
      return {
        ...state,
        working: action.force !== null ? action.force : !state.working,
      };

    default: return state;
  }
};
