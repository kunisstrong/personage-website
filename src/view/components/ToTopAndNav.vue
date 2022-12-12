<template>
  <div class="-container">
    <!-- 悬浮的导航栏 -->
    <div class="nav_main">
      <div class="box pageWidth">
        <div class="left">
          <img src="@/assets/images/UX.png" alt=""/>
        </div>
        <div class="right">
          <div class="nav"><a class="nav-font" href="#ABOUT">ABOUT</a></div>
          <div class="nav"><a class="nav-font" href="#SKILL">SKILL</a></div>
          <div class="nav"><a class="nav-font" href="#LIFE">LIFE</a></div>
          <div class="nav"><a class="nav-font" href="#FAVORITE">FAVORITE</a></div>
          <div class="nav"><a class="nav-font" href="#CONTACT">CONTACT</a></div>
          <div class="nav"><a class="nav-font" href="./nav.html">HOME</a></div>
        </div>
      </div>
    </div>
    <!-- 悬浮返回顶部按钮 -->
    <div class="toTop">
      <img ref="toTop_img" id="toTop_img" src="@/assets/images/top.png" alt=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const documentScroll = () => {
  document.addEventListener('scroll', () => {
    // 调用悬浮导航栏与返回顶部按钮
    navAndToTop()
  })
}

// nav与toTop相关功能
const navAndToTop = () => {
  // 调用toTop功能整合
  toTopEvent()
  // 调用显示隐藏悬浮导航栏与返回顶部按钮功能整合
  showAndHideNavToTop()

  // toTop事件整合
  function toTopEvent() {
    // 获取悬浮返回头部按钮相关元素
    const toTop = <HTMLElement>document.querySelector('.toTop')
    const toTop_img = <HTMLImageElement>document.querySelector('#toTop_img')
    // 鼠标悬浮toTop按钮变化
    toTop.addEventListener('mouseover', () => {
      toTop.style.backgroundColor = '#ffffff'
      toTop_img.src = '/src/assets/images/top2.png'
    })

    // 鼠标离开toTop按钮变化
    toTop.addEventListener('mouseout', () => {
      toTop.style.backgroundColor = '#6f64e7'
      // toTop_img.setAttribute('src', '@/assets/images/top.png')
      toTop_img.src = '/src/assets/images/top.png'
    })

    // 鼠标点击toTop返回顶部
    toTop.addEventListener('click', () => {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    })
  }

  // 显示隐藏导航栏与返回顶部按钮功能整合
  function showAndHideNavToTop() {
    const showNav = <HTMLElement>document.querySelector('#showNav')
    // 悬浮导航栏与返回顶部按钮功能
    const toTop = <HTMLElement>document.querySelector('.toTop')
    // 获取悬浮导航栏相关元素
    const nav_main = <HTMLElement>document.querySelector('.nav_main')
    const navTop = showNav.offsetTop
    if (window.scrollY >= navTop) {
      navShow(nav_main)
      // 显示返回顶部按钮
      toTop.style.opacity = '1'
    } else {
      navHidden(nav_main)
      // 隐藏返回顶部按钮
      toTop.style.opacity = '0'
    }
  }

  // 悬浮导航栏显示
  function navShow(nav_main: HTMLElement) {
    nav_main.style.top = '0'
    nav_main.style.opacity = '1'
    nav_main.style.visibility = 'visible'
  }

  // 悬浮导航栏隐藏
  function navHidden(nav_main: HTMLElement) {
    nav_main.style.top = 10 + 'px'
    nav_main.style.opacity = '0'
    nav_main.style.visibility = 'hidden'
  }
}

onMounted(() => {
  // 调用整合document页面滑动功能（「nav与toTop」相关功能）
  documentScroll()
})
</script>

<style lang="scss" scoped>
// 悬浮的导航栏
.nav_main {
  width: 100%;
  position: fixed;
  top: 10px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  background-color: #1d293e;
  z-index: 1000000;

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    word-spacing: normal;
    color: rgb(141, 144, 149);
    font-family: Helvetica, Arial, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    .left {
      img {
        width: 60px;
        height: 60px;
      }
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        color: #fff;
      }

      .nav {
        margin-left: 40px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        box-sizing: border-box;
        cursor: pointer;
      }

      .nav:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }
}

// 返回顶部按钮
.toTop {
  position: fixed;
  bottom: 100px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: #6f64e7;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s;

  #toTop_img {
    width: 20px;
    height: 20px;
    transition: all 0.5s;
  }
}

</style>
