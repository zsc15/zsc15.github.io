// markdown-it-latex-hover.js
export default function markdownItLatexHover(md) {
    const latexInlineRegex = /\$(.*?)\$/g;
    const latexBlockRegex = /\$\$(.*?)\$\$/g;
  
    md.core.ruler.before('normalize', 'latex_hover', (state) => {
      state.tokens.forEach((token) => {
        if (token.type === 'inline') {
          // 处理行内公式
          token.content = token.content.replace(latexInlineRegex, (match, p1) => {
            return `<span class="latex-hover" data-latex="${p1.trim()}">$${p1.trim()}$</span>`;
          });
  
          // 处理行间公式
          token.content = token.content.replace(latexBlockRegex, (match, p1) => {
            return `<span class="latex-hover" data-latex="${p1.trim()}">$$${p1.trim()}$$</span>`;
          });
        }
      });
    });
  }