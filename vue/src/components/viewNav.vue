<script setup>
import { reactive } from "vue";

const menuArr = reactive([
  {
    path: "/home",
    name: "首页",
    icon: "icon-shouyefill",
  },
  {
    path: "/article",
    name: "文章",
    icon: "icon-wenzhang-copy",
  },
]);
</script>

<template>
  <div class="viewNav-box">
    <a href="/home" class="logo-name">winklow</a>
    <div id="menu">
      <div class="menu-item" v-for="(item, index) in menuArr" :key="index">
        <div class="item">
          <a :href="item.path"
            ><span :class="`iconfont ${item.icon}`"></span>{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.viewNav-box {
  display: flex;
  height: 4em;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  padding: 0 3.6em;
  .logo-name {
    font-size: 2em;
    color: #eeeeee;
    font-weight: bold;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  }

  #menu {
    display: flex;
    .menu-item {
      padding: 1em;
      .item {
        cursor: pointer;
        position: relative;
        width: 6em;

        &:hover {
          &::after {
            width: 100%;
            transition: all 0.3s;
          }
        }

        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: -0.4em;
          width: 0;
          border-radius: 10em;
          height: 0.2em;
          background: #409eff;
          transition: all 0.3s;
        }
        a {
          font-size: 1.4em;
          color: #eee;
          text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
          .iconfont {
            margin-right: 0.5em;
          }
        }
      }
    }
  }
}
</style>
