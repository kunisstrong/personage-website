<!-- 测试markdown转html -->
<template>
  <div class="detail-container">
    <v-md-preview :include-level="[2, 3]" :text="text"></v-md-preview>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue"

const text = ref(``)
</script>

<style lang="scss" scoped>
.detail-container {
  color: #ffffff;
  border-radius: 10px;
  background-color: #1d293e;
  box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
  position: relative;
  top: -80px;
  padding: 30px 60px;

  :deep(.vuepress-markdown-body) {
    color: #ffffff;
    background-color: #1d293e;
  }
}
</style>
