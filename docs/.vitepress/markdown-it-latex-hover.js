export default function markdownItLatexHover(md) {
    // 保存默认的渲染规则
    const defaultRenderInline = md.renderer.rules.math_inline || function (tokens, idx, options, env) {
        return `$$${tokens[idx].content}$$`;
    };

    const defaultRenderBlock = md.renderer.rules.math_block || function (tokens, idx, options, env) {
        return `$$${tokens[idx].content}$$`;
    };

    // 为行内数学公式添加包裹
    md.renderer.rules.math_inline = function (tokens, idx, options, env) {
        const token = tokens[idx];
        const content = token.content; // 获取公式内容,打印内容
        // console.log(content); // 打印内容
        return `<span class="latex-hover" data-latex="${content}">${defaultRenderInline(tokens, idx, options, env)}</span>`;
    };

    // 为块级数学公式添加包裹
    md.renderer.rules.math_block = function (tokens, idx, options, env) {
        const token = tokens[idx];
        const content = token.content; // 获取公式内容
        return `<div class="latex-hover" data-latex="${content}">${defaultRenderBlock(tokens, idx, options, env)}</div>`;
    };
}
