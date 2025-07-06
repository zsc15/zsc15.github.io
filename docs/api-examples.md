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

<div class="formula">
  $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
  <div class="latex-code" style="display: none;">
    $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
  </div>
</div>

<style>
.formula {
    position: relative; /* 使得子元素可以绝对定位 */
    cursor: pointer;
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.latex-code {
    position: absolute; /* 绝对定位 */
    bottom: 100%; /* 在公式上方显示 */
    left: 0;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    z-index: 10; /* 确保在其他内容上方 */
    display: none; /* 初始隐藏 */
}

.formula:hover .latex-code {
    display: block; /* 悬停时显示 LaTeX 代码 */
}
</style>