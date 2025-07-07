import { defineConfig } from 'vitepress';
import markdownItKatex     from 'markdown-it-katex';
import markdownItLatexHover from './markdown-it-latex-hover'; // 导入自定义插件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    math: true,           // 启用内置数学渲染
    config: md => {
      md.use(markdownItLatexHover, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$',  right: '$',  display: false }
        ],
      })
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
  // latex源码加入到html中
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }],
    // ['script', { src: '/path/to/markdown-it-latex-hover/init.js', defer: true }],
    ['style', {}, `
      .latex-hover { position: relative; cursor: help; }
      .latex-hover:hover::after {
        content: attr(data-latex);
        position: absolute; top: 100%; left: 0;
        background: #fff; border: 1px solid #ccc;
        padding: 2px 6px; white-space: nowrap;
      }
    `]
  ],
});
