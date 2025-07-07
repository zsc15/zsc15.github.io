import DefaultTheme from 'vitepress/theme';
import LatexHover from './LatexHover.vue';
// import DefaultTheme from 'vitepress/theme'
// import './styles/index.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('LatexHover', LatexHover);
  }
};