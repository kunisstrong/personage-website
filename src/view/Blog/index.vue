<template>
  <div class="blog-container">
    <!-- 悬浮的导航栏 -->
    <div class="nav_main">
      <div class="box pageWidth">
        <div class="left">
          <img src="@/assets/images/UX.png" alt=""/>
        </div>
        <div class="right">
          <div class="right">
            <div @click="toAllEssay" class="nav_item nav-font">AllEssay</div>
            <div @click="toCategories" class="nav_item nav-font">Categories</div>
            <div @click="toTags" class="nav_item nav-font">Tags</div>
            <div @click="toAbout" class="nav_item nav-font">About</div>
            <div class="nav_item nav-font"><a style="color:#fff;" href="./index.html">Home</a></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 悬浮返回顶部按钮 -->
    <div class="toTop">
      <img ref="toTop_img" id="toTop_img" src="@/assets/images/top.png" alt=""/>
    </div>
    <!-- 头部 -->
    <header class="header" id="HOME">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/background.webp" alt=""/>
          </div>
        </div>
      </div>
      <div class="mash"></div>
      <div class="box pageWidth">
        <div class="header_top">
          <div class="left">
            <img src="@/assets/images/UX.png" alt=""/>
          </div>
          <div class="right">
            <div @click="toAllEssay" class="nav_item nav-font">AllEssay</div>
            <div @click="toCategories" class="nav_item nav-font">Categories</div>
            <div @click="toTags" class="nav_item nav-font">Tags</div>
            <div @click="toAbout" class="nav_item nav-font">About</div>
            <div class="nav_item nav-font"><a style="color:#fff;" href="./index.html">Home</a></div>
          </div>
        </div>
        <div class="header_main">
          <p class="one" ref="showNav" id="showNav">LIGHY CAM NE PHOTOGTAPHED</p>
          <p class="two"><span>I Believe </span>You Can Do It</p>
          <img class="dong" src="@/assets/images/shuxian_dong.webp" alt=""/>
        </div>
      </div>
    </header>
    <!-- 主体 -->
    <main class="main">
      <router-view class="blog-page-width"></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue"
import {useRouter} from "vue-router";

const router = useRouter()

/**
 * 点击跳转AllEssay
 */
const toAllEssay = () => {
  router.push('/allEssay')
}

/**
 * 点击跳转Categories
 */
const toCategories = () => {
  router.push('/categories')
}

/**
 * 点击跳转Tags
 */
const toTags = () => {
  router.push('/tags')
}

/**
 * 点击跳转About
 */
const toAbout = () => {
  router.push('/about')
}

/**
 * 整合document页面滑动功能（「nav与toTop」相关功能）
 */
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
.blog-container {
  // 头部
  .header {
    position: relative;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
    overflow: hidden;

    .box {
      .header_top {
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

          .nav_item {
            margin-left: 40px;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            cursor: pointer;
            color: #fff;
          }

          .nav_item:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }

      .header_main {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .one {
          color: #fff;
          font-size: 15px;
        }

        .two {
          margin-top: 80px;
          color: #fff;
          font-size: 40px;

          span {
            font-size: 70px;
            color: red;
          }
        }

        img {
          margin-top: 23px;
        }
      }
    }

    .mash {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }

    .swiper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //height: 600px;
      z-index: -2;

      .swiper-button-prev {
        z-index: 10;
      }

      img {
        width: 100%;
        //height: 100%;
      }
    }


  }

  .main {
    background-color: #1d293e;
  }

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
    z-index: 1000;

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

        .nav_item {
          margin-left: 40px;
          height: 50px;
          line-height: 50px;
          box-sizing: border-box;
          cursor: pointer;
          color: #fff;
        }

        .nav_item:hover {
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
}

</style>
