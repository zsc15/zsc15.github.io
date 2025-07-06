import DefaultTheme from 'vitepress/theme';
import LatexHover from './LatexHover.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LatexHover', LatexHover);
  }
};