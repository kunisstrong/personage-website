<template>
  <div class="categories-container">
    <div class="categories-box" v-for="(item, index) in Categories" :key="index">
      <h3 @click="item.isShow = !item.isShow" class="cursor">{{ item.title }} ></h3>
      <div v-if="item.isShow" class="sub-box">
        <p class="cursor" v-for="(subItem, subIndex) in item.subCategories" :key='subIndex'>{{ subItem }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue"

/**
 * categories
 */
type CategoriesType = {
  title: string
  subCategories: Array<string>
  isShow: boolean
}

const Categories: CategoriesType[] = reactive([
  {
    title: 'JavaScript',
    subCategories: ['闭包', '原型链'],
    isShow: false
  },
  {
    title: '前端开发',
    subCategories: ['vue3', 'TypeScript'],
    isShow: false
  },
  {
    title: '数据库',
    subCategories: ['mysql', 'redis', 'mongodb'],
    isShow: false
  },
  {
    title: 'web3D',
    subCategories: ['WebGL', 'Three.js'],
    isShow: false
  },
  {
    title: 'Java后端',
    subCategories: ['spring', 'SpringBoot', 'MyBatis'],
    isShow: false
  },
  {
    title: '计算机基础',
    subCategories: ['编译原理', '操作系统', '计算机网络原理', '计算机图形学'],
    isShow: false
  }
])
</script>

<style lang="scss" scoped>
.categories-container {
  border-radius: 10px;
  padding: 20px 50px;
  background-color: #1d293e;
  box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
  position: relative;
  top: -80px;
  color: #fff;

  .cursor {
    color: #fff;
    transition: all 0.5s;
  }

  .cursor:hover {
    color: #6f64e7;
  }

  p {
    margin-left: 19px;
  }
}
</style>
