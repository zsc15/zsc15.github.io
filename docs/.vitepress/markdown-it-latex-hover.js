export default function markdownItLatexHover(md) {
    const dInline = md.renderer.rules.math_inline
      || ((t,i)=>`$$${t[i].content}$$`)
    const dBlock = md.renderer.rules.math_block
      || ((t,i)=>`$$${t[i].content}$$`)
  
    const wrap = (html, content) => `
      <span class="latex-hover" data-latex="${content}"
        onclick="
          (e=>{
            const el=e.currentTarget;
            navigator.clipboard.writeText(el.dataset.latex);
            el.dataset.copied='';
            el.addEventListener('mouseleave',()=>delete el.dataset.copied,{once:true});
          })(event)">
        ${html}
      </span>
    `
  
    md.renderer.rules.math_inline = (t,i,o,e,s) => {
      const c = t[i].content.replace(/"/g,'&quot;')
      return wrap(dInline(t,i,o,e,s), c)
    }
    md.renderer.rules.math_block = (t,i,o,e,s) => {
      const c = t[i].content.replace(/"/g,'&quot;')
      return wrap(dBlock(t,i,o,e,s), c)
    }
  }