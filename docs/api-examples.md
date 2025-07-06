---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

## Math
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

<div class="formula" onclick="toggleLatex('latex1')">
  $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
  <div class="latex-code" id="latex1" style="display: none;">
    $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
  </div>
</div>

<script>
  function toggleLatex(latexId) {
      const latexCode = document.getElementById(latexId);
      if (latexCode.style.display === "none" || latexCode.style.display === "") {
          latexCode.style.display = "block"; // 显示 LaTeX 代码
      } else {
          latexCode.style.display = "none"; // 隐藏 LaTeX 代码
      }
  }
</script>

<style>
.formula {
    cursor: pointer;
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.latex-code {
    margin-top: 10px;
    font-family: monospace;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}
</style>
