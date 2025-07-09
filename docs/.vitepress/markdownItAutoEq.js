// 实现latex的\label自动编号和\eqref引用功能
export default function markdownItAutoEq(md) {
    /* 1. keep original KaTeX renderer */
    const defaultBlock = md.renderer.rules.math_block || (() => '')
  
    /* 2. collect labels & numbers */
    md.core.ruler.push('auto_eq_number', state => {
      const env = state.env
      env.eqCounter  = 0
      env.eqLabelMap = Object.create(null)
  
      for (const token of state.tokens) {
        if (token.type !== 'math_block') continue
        const m = token.content.match(/\\label\{([^}]+)\}/)
        if (!m) continue
  
        const label = m[1]
        env.eqCounter += 1
        env.eqLabelMap[label] = env.eqCounter
        token.content = token.content.replace(/\\label\{[^}]+\}/, '')
        token.meta = { eqNumber: env.eqCounter, eqLabel: label }
      }
    })
  
    /* 3. render numbered equations */
    md.renderer.rules.math_block = (tokens, idx, opts, env, slf) => {
      const token = tokens[idx]
      const { eqNumber: num, eqLabel: label } = token.meta || {}
  
      // result after KaTeX
      let mathHtml = defaultBlock(tokens, idx, opts, env, slf)
  
      // strip outer <p>…</p>
      if (mathHtml.startsWith('<p>') && mathHtml.trimEnd().endsWith('</p>')) {
        mathHtml = mathHtml.replace(/^<p>/, '').replace(/<\/p>\s*$/, '')
      }
  
      if (num && label) {
        return `<div class="math equation" id="eq:${label}">${mathHtml}<span class="eq-number">(${num})</span></div>\n`
      }
      return mathHtml
    }
  //解决内联公式引用显示(?)的问题
      /* 4. inline eq_ref rule */
    md.inline.ruler.after('escape', 'eq_ref', (st, silent) => {
        const m = st.src.slice(st.pos).match(/^~?\\eqref\{([^}]+)\}/)
        if (!m) return false
        if (!silent) {
          const token = st.push('eq_ref', '', 0)
          token.meta  = { label: m[1] }
        }
        st.pos += m[0].length
        return true
      })
    
      /* 4. renderer for eq_ref token ------------------------------------------ */
      md.renderer.rules.eq_ref = (tokens, idx, _opts, env) => {
        const { label } = tokens[idx].meta
        const num = env.eqLabelMap?.[label] ?? '?'
        return `<a href="#eq:${label}">(${num})</a>`
      }
    }
  