import { defineConfig } from 'vitepress';
// import markdownItKatex     from 'markdown-it-katex';
import markdownItLatexHover from './markdown-it-latex-hover'; // 导入自定义插件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Homepage",
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
      { text: 'Publications', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Publications', link: '/markdown-examples' },
          { text: '数思智算', link: '/blog/chuixin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  // latex源码加入到html中
  // head: [
  //   ['link', { rel: 'stylesheet', href: '/theme/style.css' }],
  //   // ['script', { src: '/path/to/markdown-it-latex-hover/init.js', defer: true }],
  //   ['style', {}, `
  //     .latex-hover { position: relative; cursor: help; }
  //     .latex-hover:hover::after {
  //       content: attr(data-latex);
  //       position: absolute; top: 100%; left: 0;
  //       background: #fff; border: 1px solid #ccc;
  //       padding: 2px 6px; white-space: nowrap;
  //     }
  //   `]
  head: [
    ['style', {}, `
      .latex-hover {
        position: relative;
        cursor: help;
      }
      /* 针对块级公式，保持原有居中 */
      .latex-hover > .katex-display,
      .latex-hover > .MathJax_Display {
        display: block;
        margin: .5em auto;
      }
      /* hover 时隐藏公式内容 */
      .latex-hover:hover > * {
        visibility: hidden;
      }
      /* hover 时用 ::after 显示源码，覆盖在原位置 */
      .latex-hover:hover::after {
        content: attr(data-latex);
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        background: #fff;
        border: 1px solid #ccc;
        padding: 4px;
        box-sizing: border-box;
        font-family: monospace;
        font-size: 0.9em;
        line-height: 1.2;
        white-space: pre-wrap;
        word-break: break-word;
        text-align: center;   /* 悬停显示源码在框内水平居中 */
        overflow: visible;
        z-index: 10;
        cursor: pointer;
      }
      /* 点击之后显示Copied 然后消失*/
      .latex-hover[data-copied]::after {
      content: 'Copied';
      opacity: 1;
      }
    `],
  ],
});
