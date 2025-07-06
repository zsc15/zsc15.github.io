<template>
  <div class="latex-container" @mouseenter="showLatex" @mouseleave="hideLatex">
    <slot></slot>
    <div v-if="visible" class="latex-code">
      <pre>{{ latex }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    latex: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showLatex() {
      this.visible = true;
    },
    hideLatex() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.latex-container {
  position: relative;
  display: inline-block; /* 使得容器适应内容 */
}

.latex-code {
  position: absolute;
  bottom: 100%; /* 在公式上方显示 */
  left: 0;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  z-index: 10; /* 确保在其他内容上方 */
  white-space: pre-wrap; /* 保持 LaTeX 格式 */
}
</style>
