<template>
  <div class="categories-container">
    <div class="categories-box" v-for="(item, index) in Categories" :key="index">
      <h3 @click="showSubAndChangeIcon(item)" class="cursor">
        {{ item.title }}
        <svg-icon class="icon-change" v-if="item.iconName" :name="item.iconName" style="width: 19px; height: 19px;"/>
      </h3>
      <div v-if="item.isShow" class="sub-box">
        <template v-for="(subItem, subIndex) in item.subCategories" :key='subIndex'>
          <p><a class="cursor" :href="subItem.url" target="_blank">{{ subItem.subTitle }}</a></p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue"

/**
 * 显示subBox和改变图标
 */
const showSubAndChangeIcon = (item: CategoriesType) => {
  item.isShow = !item.isShow
  item.iconName = item.iconName === 'down' ? 'right' : 'down'
}

/**
 * categories
 */
type CategoriesType = {
  title: string
  subCategories?: Array<object>
  isShow: boolean
  iconName: string
}

const Categories: CategoriesType[] = reactive([
  {
    title: 'JavaScript',
    subCategories: [
      {
        subTitle: '原型链',
        url: 'https://juejin.cn/post/7042181321338126373'
      },
      {
        subTitle: 'Promise',
        url: 'https://juejin.cn/post/7073067282846466062'
      },
    ],
    isShow: false,
    iconName: 'right',
  },
  {
    title: '前端开发',
    subCategories: [
      {
        subTitle: 'vue基础',
        url: 'https://juejin.cn/column/7062550790266683405'
      },
      {
        subTitle: 'css预处理器sass',
        url: 'https://juejin.cn/post/7176088935548846140'
      }
    ],
    isShow: false,
    iconName: 'right'
  },
  {
    title: '数据库',
    subCategories: [
      {
        subTitle: '初识mysql',
        url: 'https://juejin.cn/post/7176076262719356988'
      }
    ],
    isShow: false,
    iconName: 'right'
  },
  {
    title: 'web3D',
    isShow: false,
    iconName: 'right'
  },
  {
    title: 'Java后端',
    subCategories: [
      {
        subTitle: 'SpringBoot',
        url: 'https://juejin.cn/post/7171419604147765278'
      },
      {
        subTitle: 'Maven',
        url: 'https://juejin.cn/post/7176080053724250172'
      },
    ],
    isShow: false,
    iconName: 'right'
  },
  {
    title: '计算机基础',
    subCategories: [{
      subTitle: '前端要懂的网络基本原理',
      url: 'https://juejin.cn/post/7135382416780656647'
    }],
    isShow: false,
    iconName: 'right'
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

  .categories-box {
    .cursor {
      display: flex;
      align-items: center;
      color: #fff;
      transition: all 0.5s;

      .icon-change {
        fill: white;
        transition: all 0.5s;
        margin-left: 4px;
        margin-top: 5px;
      }

      &:hover {
        color: #6f64e7;

        .icon-change {
          fill: #6f64e7;
        }
      }
    }


  }


  p {
    margin-left: 19px;
  }
}
</style>
