import { defineConfig,type DefaultTheme  } from 'vitepress';
import markdownItLatexHover from './markdown-it-latex-hover'; // 导入自定义插件
import markdownItAutoEq from './markdownItAutoEq';
export default defineConfig({
  title: "Homepage",
  description: "A VitePress Site",
  markdown: {
    math: true,           // 启用内置数学渲染
    config: md => {
      md.use(markdownItAutoEq),
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
      { text: 'Publications', link: '/pulications' }
    ],
    sidebar: {
      '/blog/': { base: '/blog/', items: sidebarGuide() },
      '/blog/geometry/': { base: '/blog/geometry/', items: sidebar_geometry_Reference() },
      '/blog/jiexi_geometry/': { base: '/blog/jiexi_geometry/', items: sidebar_jiexi_geometry_Reference() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zsc15' }
    ]
  },
  head: [
    ['style', {}, `
      .latex-hover {
        position: relative;
        cursor: help;
      }
      .math.equation{
        display:flex;            /* block, not inline */
        justify-content:center;  /* horizontal centring */
        align-items:center;      /* vertical alignment */
        gap:.5em;
        width:100%;
        margin:.5em 0;
      }

      /* svg area & number */
      .eq-svg{display:inline-block}
      // .eq-number{margin-left:.25em}
      /* 公式编号右对齐 */
      .eq-number{
      position:absolute;
      right:0;
      top:50%;
      transform:translateY(-50%);
      margin-left:.25em;
    }

      /* kill left indent of KaTeX / MathJax display mode inside wrapper */
      .math.equation .katex-display,
      .math.equation .MathJax_Display{
        margin:0 !important;
  }
      // .eq-number{margin-left:.25em}
      // /* 针对块级公式，保持原有居中 */
      // .latex-hover > .katex-display,
      // .latex-hover > .MathJax_Display {
      //   display: block;
      //   margin: .5em auto;
      // }
      // /* hover 时隐藏公式内容 */
      // .latex-hover:hover > * {
      //   visibility: hidden;
      // }
      // /* hover 时用 ::after 显示源码，覆盖在原位置 */
      // .latex-hover:hover::after {
      //   content: attr(data-latex);
      //   position: absolute;
      //   top: 0; left: 0;
      //   width: 100%;
      //   background: #fff;
      //   border: 1px solid #ccc;
      //   padding: 4px;
      //   box-sizing: border-box;
      //   font-family: monospace;
      //   font-size: 0.9em;
      //   line-height: 1.2;
      //   white-space: pre-wrap;
      //   word-break: break-word;
      //   text-align: center;   /* 悬停显示源码在框内水平居中 */
      //   overflow: visible;
      //   z-index: 10;
      //   cursor: pointer;
      // }
      /* 点击之后显示Copied 然后消失*/
      .latex-hover::after {
        content: '';
        position: absolute;
        top: -1.5em;    /* 往上移，脱离内容区域 */
        right: 0;       /* 靠右对齐 */
        padding: 2px 6px;
        background: #1e90ff;
        color: #fff;
        font-size: 0.75em;
        border-radius: 3px;
        white-space: nowrap;
        opacity: 0;
        transition: opacity .2s, transform .2s;
        pointer-events: none; /* 不阻塞点击或选中 */
        z-index: 10;
      }

      .latex-hover[data-copied]::after {
        content: 'Copied';
        opacity: 1;
        transform: translateY(-4px); /* 轻微上移，防止和边框重叠 */
      }
    `],
  ],
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Academic Research',
      collapsed: false,
      items: [
        { text: 'Pulications', link: '../pulications' },
      ]
    },
    {
      text: '数思智算',
      collapsed: false,
      items: [
        { text: '平面几何',  link: '/geometry/chuixin' },
        { text: '解析几何', link: '/jiexi_geometry/tuoyuan_dingzhi' }
      ]
    }
  ]
}

function sidebar_geometry_Reference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '平面几何',
      items: [
        { text: '梦开始的地方', link: 'chuixin'  }
        // { text: 'frontmatter 配置', link: 'frontmatter-config' },
        // { text: '运行时 API', link: 'runtime-api' },
        // { text: 'CLI', link: 'cli' },
        // {
        //   text: '默认主题',
        //   base: '/zh/reference/default-theme-',
        //   items: [
        //     { text: '概览', link: 'config' },
        //     { text: '导航栏', link: 'nav' },
        //     { text: '侧边栏', link: 'sidebar' },
        //     { text: '主页', link: 'home-page' },
        //     { text: '页脚', link: 'footer' },
        //     { text: '布局', link: 'layout' },
        //     { text: '徽章', link: 'badge' },
        //     { text: '团队页', link: 'team-page' },
        //     { text: '上下页链接', link: 'prev-next-links' },
        //     { text: '编辑链接', link: 'edit-link' },
        //     { text: '最后更新时间戳', link: 'last-updated' },
        //     { text: '搜索', link: 'search' },
        //     { text: 'Carbon Ads', link: 'carbon-ads' }
        //   ]
        // }
      ]
    }
  ]
}
function sidebar_jiexi_geometry_Reference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '解析几何-遇见智算',
      items: [
        { text: '椭圆乘积定值', link: 'tuoyuan_dingzhi'  }
        // { text: 'frontmatter 配置', link: 'frontmatter-config' },
        // { text: '运行时 API', link: 'runtime-api' },
        // { text: 'CLI', link: 'cli' },
        // {
        //   text: '默认主题',
        //   base: '/zh/reference/default-theme-',
        //   items: [
        //     { text: '概览', link: 'config' },
        //     { text: '导航栏', link: 'nav' },
        //     { text: '侧边栏', link: 'sidebar' },
        //     { text: '主页', link: 'home-page' },
        //     { text: '页脚', link: 'footer' },
        //     { text: '布局', link: 'layout' },
        //     { text: '徽章', link: 'badge' },
        //     { text: '团队页', link: 'team-page' },
        //     { text: '上下页链接', link: 'prev-next-links' },
        //     { text: '编辑链接', link: 'edit-link' },
        //     { text: '最后更新时间戳', link: 'last-updated' },
        //     { text: '搜索', link: 'search' },
        //     { text: 'Carbon Ads', link: 'carbon-ads' }
        //   ]
        // }
      ]
    }
  ]
}
