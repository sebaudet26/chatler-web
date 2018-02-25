import { merge } from 'ramda';

import en from './en.js';
import fr from './fr.js';
import enCA from './en-ca.js';
import frCA from './fr-ca.js';


const translations = {
  'en-ca': merge(en, enCA),
  'fr-ca': merge(fr, frCA),
};

export default locale => translations[`${locale[0]}-${locale[1]}`];
