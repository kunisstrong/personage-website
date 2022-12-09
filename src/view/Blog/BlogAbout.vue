<template>
  <div class="about-container">
    <div class="headPhoto">
      <img class="headPhoto-img" src="@/assets/images/headPhoto.jpeg" alt="头像">
    </div>
    <div class="title">
      <div class="title-sup">
        Kun Wang
      </div>
      <div class="title-sub" style="margin-top: 10px">
        这里是副标语
      </div>
      <div class="relation" style="margin-top: 10px">
        联系图标
      </div>
    </div>
    <div class="content">
      <span>感谢关注我的网站，本站是使用 Hexo 框架 + Fluid 主题搭建。</span>
      <span>我是一名本科学生，正在学习后端开发。</span>
      <span>本网站用于记录学习过程的笔记，以及技术方面的分享。</span>
      <span>可以通过扫描微信二维码与我交流。</span>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.about-container {
  border-radius: 10px;
  background-color: #1d293e;
  box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
  position: relative;
  top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .headPhoto {
    width: 200px;
    height: 200px;
    background-color: #1d293e;
    box-shadow: 0 5px 15px 0 #999, 0 5px 50px 0 #999;
    border-radius: 100px;
    position: relative;
    top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .headPhoto-img {
      width: 180px;
      height: 180px;
      border-radius: 90px;
    }
  }

  .title {
    position: relative;
    top: -100px;
    width: 30%;
    height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-sup {
      font-size: 40px;
    }
  }

  .content {
    position: relative;
    top: -80px;
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
