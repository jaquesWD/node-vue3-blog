<script setup>
</script>

<template>
  <div class="home-box">
    <div class="box-left">
      <div class="left-info-head">
        <div class="img-head">
          <img src="@/assets/image/head.gif" alt="" />
        </div>
        <div class="name">winklow</div>
        <div class="title">好好学习都会有温暖</div>
      </div>
      <div class="left-title-info">
        <div>
          <span>标题</span>
          <span>11</span>
        </div>
        <div>
          <span>文章</span>
          <span>11</span>
        </div>
        <div>
          <span>模块</span>
          <span>11</span>
        </div>
      </div>
      <div class="left-git-info">
        <a>
          <span
            style="margin-right: 0.6em"
            class="iconfont icon-github-fill"
          ></span
          >Follow Me
        </a>
      </div>
      <div class="left-icon-info">
        <span class="iconfont icon-github-fill"></span>
        <span class="iconfont icon-gitee-fill-round"></span>
        <span class="iconfont icon-youxiang"></span>
        <span class="iconfont icon-shu"></span>
      </div>
    </div>
    <div class="box-right">
      <div class="box-content">
        <div class="content-img">
          <img src="@/assets/image/content.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-box {
  padding: 3% 10%;
  display: flex;
  justify-content: space-between;
  .box-left {
    width: 27em;
    box-sizing: border-box;
    padding: 2em 2em;
    border-radius: 1em;
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);

    .left-info-head {
      text-align: center;
      width: 100%;
      .img-head {
        width: 100%;

        img {
          width: 10.1em;
          height: 10.1em;
          border-radius: 50%;
          transition: all 0.6s;

          &:hover {
            transform: rotate(-360deg);
            transition: all 0.6s;
          }
        }
      }

      .name {
        margin-top: 0.5em;
        color: var(--fontColor);
        font-size: 2.5em;
        font-weight: 500;
      }

      .title {
        color: var(--fontColor);
        font-size: 1.6em;
        margin-top: 1em;
      }
    }

    .left-title-info {
      display: flex;
      justify-content: space-between;
      padding: 0 2em;

      div {
        font-size: 1.6em;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          margin-top: 1.5em;
          color: var(--fontColor);

          &:last-child {
            margin-top: 1em;
          }
        }
      }
    }

    .left-git-info {
      text-align: center;
      margin-top: 1em;
      a {
        cursor: pointer;
        position: relative;
        display: flex;
        z-index: 1;
        justify-content: center;
        align-items: center;
        padding: 0.7em 0;
        width: 100%;
        font-size: 1.4em;
        border-radius: 0.2em;
        color: #fff;
        background-color: #49b1f5;
        white-space: nowrap;
        &::after {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          width: 0;
          height: 100%;
          transition: all 0.6s;
        }

        &:hover {
          &::after {
            width: 100%;
            background-color: #ff6400;
            transition: all 0.3s;
          }
        }
      }
    }

    .left-icon-info {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5em;
      padding: 0 2em;
      span {
        cursor: pointer;
        font-size: 2.2em;
        transition: all 0.3s;

        &:hover {
          transform: rotate(-360deg);
          transition: all 0.3s;
        }
      }
      .iconfont {
        color: var(--fontColor);
      }
    }
  }

  .box-right {
    width: calc(100% - 27em);
    box-sizing: border-box;
    padding: 0 2em;
    border-radius: 1em;

    .box-content {
      cursor: pointer;
      border-radius: 0.8em;
      box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);

      &:hover {
        .content-img {
          img {
            transform: scale(1);
            transition: all 0.6s;
          }
        }
      }

      .content-img {
        width: 38em;
        height: 24em;
        border-radius: 1em;
        background-color: #000;

        img {
          width: 100%;
          height: 100%;
          transform: scale(0.95);
          transition: all 0.6s;
          border-radius: 1em;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .home-box {
    padding: 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box-left {
      width: 100%;
    }
    .box-right {
      width: 100%;
    }
  }
}
</style>
