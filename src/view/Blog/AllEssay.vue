<template>
  <div class="all-essay-container blog-page-width">
    <div class="item" @click="toDetail" v-for="(item, index) in Essay" :key="index">
      <img class="img" :src="item.imgPath" alt="js">
      <div class="detail">
        <div class="detail-title cursor">
          {{ item.title }}
        </div>
        <div class="detail-describe cursor">
          {{ item.describe }}
        </div>
        <div class="detail-date">
          {{ item.date }}
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const router = useRouter()
/**
 * 跳转到文章详情
 */
const toDetail = () => {
  router.push('/detailEssay')
}
/**
 * assay数据
 */

type EssayType = {
  imgPath: string
  title: string
  describe: string
  date: string
}
const Essay: EssayType[] = [
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    describe: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。',
    date: '2021-04-25 JavaScript'
  },
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    describe: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。',
    date: '2021-04-25 JavaScript'
  },
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    describe: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。',
    date: '2021-04-25 JavaScript'
  },
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    describe: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。',
    date: '2021-04-25 JavaScript'
  },
  {
    imgPath: '/src/assets/images/js.png',
    title: 'JavaScript',
    describe: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。',
    date: '2021-04-25 JavaScript'
  },
]

</script>

<style lang="scss" scoped>

.all-essay-container {
  color: #ffffff;
  border-radius: 10px;
  background-color: #1d293e;
  box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
  position: relative;
  top: -80px;
  padding: 30px 60px;

  .item {
    height: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .img {
      box-sizing: border-box;
      flex: 0.2;
      height: 200px;
      box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
      border-radius: 10px;
      padding: 20px;
    }

    .detail {
      flex: 0.8;
      height: 200px;
      margin-left: 30px;

      .detail-title {
        font-size: 30px;
        transition: all 0.5s;

        &:hover {
          color: #6f64e7;
        }
      }

      .detail-describe {
        height: 120px;
        color: #cac6c6;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; //2行
        -webkit-box-orient: vertical;
        transition: all 0.5s;

        &:hover {
          color: #6f64e7;
        }
      }

      .detail-date {
        font-size: 20px;
        margin-top: 5px;
        color: #cac6c6;
      }
    }
  }
}

</style>
