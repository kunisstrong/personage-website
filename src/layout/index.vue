<template>
  <div class="card-inner fade">
    <header>
      <img src="src/assets/images/avatar.jpg" style="width: 100px; height: 100px" alt="avatar">
      <h1 data-translate="name">Simon Ma</h1>
      <h2 id="signature" data-translate="signature">Code &amp; Input &amp; Output</h2>
    </header>
    <ul>
      <li>
        <a @click="toBlog" aria-label="Blog" target="_blank">
          <i class="icon icon-bokeyuan"></i>
          <span data-translate="Blog">Blog</span>
        </a>
      </li>
      <li>
        <a aria-label="About" target="_blank">
          <i class="icon icon-xiaolian"></i>
          <span data-translate="About">About</span>
        </a>
      </li>
      <li>
        <a aria-label="Email" target="_blank">
          <i class="icon icon-email"></i>
          <span data-translate="Email">Email</span>
        </a>
      </li>
      <li>
        <a aria-label="Github" target="_blank">
          <i class="icon icon-github"></i>
          <span data-translate="Github">Github</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import '@/js/home.js'
// import '@/js/background.js'
import {useRouter} from "vue-router";

const router = useRouter()
const toBlog = () => {
  // router.push('/blog')
  const {href} = router.resolve({
    path: '/blog',
  });
  window.open(href, '_blank');
}
</script>
