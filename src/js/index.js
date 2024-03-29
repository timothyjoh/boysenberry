/* eslint-env browser, jquery */
import $ from './ui/theme';
import './lib/activity/activity_lifecycle';
import './components/custom_elements';
import cheet from 'cheet.js';
import prefetchSections from './lib/sections/sections';
import { registerLanguages } from './lib/i18n/i18n';
import './lib/activity/progress';

// registerLanguages() takes an array of languages this course supports
// the order should be the order of importance, the first element
// being the default language of the course.
registerLanguages(['en', 'trump']);

// prefetchSections() takes in a configurable manifest of html pages
// that will load in order and then render the first page into the DOM
// at the specified mount point.
prefetchSections([
  { slug: 'introduction', title: 'Introducing Boysenberry' },
  { slug: 'purpose', title: 'The Purpose of Boysenberry' },
  { slug: 'contribute', title: 'Contribute to Boysenberry' },
  { slug: '404', title: '404' },
]);

const konami_pop = () => window.alert('Konàmi!');

cheet('↑ ↑ ↓ ↓ ← → ← → b a', konami_pop);

// cheet('↑ ↑ ↓ ↓ ', run_tranny );
$(document).trigger('activity::ready');
