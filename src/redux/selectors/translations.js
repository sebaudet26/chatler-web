import { pathOr } from 'ramda';


export const getTranslations = state => state.translations;

export const getTranslation = (state, path) => (
  pathOr('', path.split('.'), state.translations)
);
