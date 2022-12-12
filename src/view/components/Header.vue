<template>
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
          <div class="nav_item"><a class="nav-font" href="#ABOUT">ABOUT</a></div>
          <div class="nav_item"><a class="nav-font" href="#SKILL">SKILL</a></div>
          <div class="nav_item"><a class="nav-font" href="#LIFE">LIFE</a></div>
          <div class="nav_item">
            <a class="nav-font" href="#FAVORITE">FAVORITE</a>
          </div>
          <div class="nav_item">
            <a class="nav-font" href="#CONTACT">CONTACT</a>
          </div>
          <div class="nav_item"><a class="nav-font" href="./nav.html">HOME</a></div>
        </div>
      </div>
      <div class="header_main">
        <p class="one" ref="showNav" id="showNav">LIGHY CAM NE PHOTOGTAPHED</p>
        <p class="two"><span>I Believe </span>You Can Do It</p>
        <img class="dong" src="@/assets/images/shuxian_dong.webp" alt=""/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1000000000000;

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

        a {
          color: #fff;
        }

        .nav_item {
          margin-left: 40px;
          height: 50px;
          line-height: 50px;
          box-sizing: border-box;
          cursor: pointer;
        }

        .nav_item:hover {
          border-bottom: 2px solid #fff;
        }
      }
    }

    .header_main {
      margin-top: 300px;
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
</style>
