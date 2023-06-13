<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import viewNav from "./components/viewNav.vue";
import '@/style/public.scss'

const store = useStore();

onMounted(() => {});

const changeSkip = () => {
  let page = document.querySelector(".routerView");
  window.scrollTo({
    top: page.offsetTop,
    behavior: "smooth",
  });
};
</script>

<template>
  <div id="app">
    <header class="nav-header animate__animated animate__zoomIn">
      <viewNav></viewNav>
      <div class="title-name">
        <h1>winklow</h1>
      </div>
      <vuetyped
        :strings="[
          '好好学习，天天向上',
          'study well and progress every day',
          'patience is key in life',
        ]"
        :loop="true"
        :smart-backspace="true"
        :typeSpeed="50"
      >
        <div class="typing" />
      </vuetyped>
      <div class="container" @click="changeSkip">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </header>
    <router-view class="routerView"></router-view>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-size: 10px;
  .nav-header {
    position: relative;
    background-attachment: fixed;
    background: url("@/assets/image/bg-img.jpg") no-repeat center / cover;
    height: 100vh;

    .title-name {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      h1 {
        font-size: 3em;
        color: #eee;
        font-weight: bold;
      }
    }

    .typed-element {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      .typing {
        color: #ddd;
        font-size: 30px; /* 要给内容也设置font-size */
      }
    }

    .container {
      cursor: pointer;
      position: absolute;
      left: 50%;
      top: 80%;
      height: 10em;
      transform: translateX(-50%);
    }
    .arrow {
      width: 2.1rem;
      height: 0.48rem;
      opacity: 0;
      transform: scale(0.3);
      animation: move-arrow 3s ease-out infinite;
    }
    .arrow:first-child {
      animation: move-arrow 3s ease-out 1s infinite;
    }
    .arrow:nth-child(2) {
      animation: move-arrow 3s ease-out 2s infinite;
    }
    .arrow:before,
    .arrow:after {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: 50%;
      background: #ddd;
    }
    .arrow:before {
      left: 0;
      transform: skewY(30deg);
    }
    .arrow:after {
      right: 0;
      width: 50%;
      transform: skewY(-30deg);
    }
    @keyframes move-arrow {
      25% {
        opacity: 1;
      }

      33.3% {
        opacity: 1;
        transform: translateY(2.28rem);
      }

      66.6% {
        opacity: 1;
        transform: translateY(3.12rem);
      }

      100% {
        opacity: 0;
        transform: translateY(4.8rem) scale(0.5);
      }
    }
  }
}
</style>
