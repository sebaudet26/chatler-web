import app from './app';
import translations from './translations';


export default (state = {}, action = {}) => ({
  app: app(state.app, action, state),
  translations: translations(state.translations, action, state),
});
