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
      <span>
        本站使用
        <span style="color: #6f64e7">vue3</span>
         +
        <span style="color:#6f64e7">typescript</span>
        构建
      </span>
      <span>我是一名本科学生，目前以前端为主，后端为辅</span>
      <span>本站用于记录学习过程的笔记，以及技术方面的分享</span>
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
