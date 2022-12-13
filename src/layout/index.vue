<template>
  <div class="content content-main">
    <div id="card">
      <div class="card-inner fade">
        <header>
          <img src="src/assets/images/headPhoto.jpeg" style="width: 100px; height: 100px" alt="avatar">
          <h1 data-translate="name">Simon Ma</h1>
          <h2 id="signature" data-translate="signature">Code &amp; Input &amp; Output</h2>
        </header>
        <ul>
          <li>
            <a @click="toBlog" aria-label="Blog" target="_blank">
              <span data-translate="Blog">Blog</span>
            </a>
          </li>
          <li>
            <a @click="toAbout" aria-label="About" target="_blank">
              <span data-translate="About">About</span>
            </a>
          </li>
          <li>
            <a href="index.html" aria-label="Email" target="_blank">
              <span data-translate="Email">Back</span>
            </a>
          </li>
          <li>
            <a aria-label="Github" target="_blank">
              <span data-translate="Github">Github</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const toBlog = () => {
  router.push('/blog')
}

// 跳转到个人介绍
const toAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
main {
  overflow: hidden
}

.content, main {
  height: 100vh;
  width: 100%;
  position: relative
}

.content {
  background: radial-gradient(#313131, #0a0a0a)
}

.content-main {
  position: fixed;
  top: 0;
  left: 0
}

#card {
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #93979e;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  transition: width .5s ease, height .5s ease
}

#card .card-inner {
  padding: 0;
  border: 0;
  width: 35%
}

@media screen and (max-width: 1024px) {
  #card .card-inner {
    width: 45%
  }
}

@media screen and (max-width: 768px) {
  #card .card-inner {
    width: 50%
  }
}

@media screen and (max-width: 540px) {
  #card .card-inner {
    width: 60% !important
  }

  #card .card-inner header h1 {
    font-size: 1rem !important
  }

  #card .card-inner header h2, #card .card-inner ul li {
    font-size: .8rem !important
  }
}

@media screen and (max-width: 480px) {
  #card .card-inner {
    width: 90% !important
  }
}

@media screen and (max-width: 360px) {
  #card .card-inner {
    width: 100% !important
  }
}

#card .card-inner header {
  border-bottom: 1px solid hsla(0, 0%, 100%, .1);
  margin-bottom: 40px
}

#card .card-inner header img {
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, .3);
  transition: .4s ease-in-out
}

#card .card-inner header h1 {
  margin: 15px 15px 0;
  color: #fff;
  font-size: 2rem;
  line-height: 1.2em;
  font-weight: 300
}

#card .card-inner header h2 {
  color: #ccc;
  letter-spacing: 3px;
  font-size: .8rem;
  font-weight: lighter
}

#card .card-inner ul {
  position: relative;
  margin: 0;
  list-style-type: none;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 100%;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  border-bottom: 1px solid hsla(0, 0%, 100%, .1);
  padding-bottom: 40px
}

#card .card-inner ul li {
  display: inline-block;
  transition: all .2s;
  width: 100%;
  height: 100%;
  border-left: .1px solid hsla(0, 0%, 100%, .1);
  border-right: .1px solid hsla(0, 0%, 100%, .1)
}

#card .card-inner ul li a {
  color: #b6b6b6;
  transition: all .2s
}

#card .card-inner ul li a:hover {
  color: #f6f6f6;
  text-shadow: 0 0 2px #f6f6f6
}

#card .card-inner ul li:hover {
  transform: translateY(-2px)
}

</style>
