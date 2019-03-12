import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

addParameters({
  options: {
    name: 'Exchange',
    theme: themes.dark,
  },
});

configure(loadStories, module);
