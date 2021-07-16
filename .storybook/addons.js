// import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
// import '@storybook/addon-storysource/register';
// import '@storybook/addon-docs/register';
// import '@storybook/addon-notes/register';

// import 'storybook-readme/register';


import { addons } from '@storybook/addons';
import Theme1 from './Theme.js';

addons.setConfig({
  title: 'fe-ui-addons',
  theme: Theme1,
});
// import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';

// addons.setConfig({
//   // theme: themes.dark,
//   theme: {
//     brandTitle: 'DTeam组件库',
//     brandUrl: 'https://github.com/dteam-top'
//   },
// });


// import { addParameters } from '@storybook/angular';
// import logo from '../src/assets/logo.png';

// addParameters({
//   options: {
//     theme: {
//       brandTitle: 'DTeam组件库',
//       brandUrl: 'https://github.com/dteam-top'
//     },
//   }
// });