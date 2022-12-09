<template>
  <div class="tags-container">
    <span class="cursor" v-for="(item,index) in tagsArr" :key="index">
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
/**
 * 标签数组
 */
const tagsArr: string[] = ['JavaScript', '前端', 'web3D', 'Java后端', '数据库', '计算机基础']
</script>

<style lang="scss" scoped>

.tags-container {
  border-radius: 10px;
  background-color: #1d293e;
  padding: 100px;
  box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
  position: relative;
  top: -80px;
  display: flex;
  justify-content: space-evenly;

  span {
    transition: all 0.7s;
    color: #6f64e7;
  }

  span:hover {
    color: #23b798;
  }
}
</style>
