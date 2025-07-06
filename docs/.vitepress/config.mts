import { defineConfig } from 'vitepress';
import markdownItLatexHover from './markdown-it-latex-hover'; // 导入自定义插件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    math: true, // 启用数学公式支持
    config: (md) => {
      // 使用自定义的 LaTeX 悬停插件
      md.use(markdownItLatexHover); // 添加自定义插件
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [
    // 引入 CSS 文件
    ['link', { rel: 'stylesheet', href: '/theme/styles.css' }]
  ]
});
