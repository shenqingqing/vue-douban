<template>
  <div id="app" :class="gradeClass">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
      gradeClass: ''
    }
  },
  created () {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      if (window.localStorage.getItem('iPhoneX')) {
        this.gradeClass = 'mobile-iPhone10'
      } else {
        this.gradeClass = 'mobile-ios'
      }
    } else {
      this.gradeClass = 'mobile-android'
    }
  }
}
</script>

<style>
#app{
  width: 100%;
  height:100%;
}
#app>div{
  position: absolute;
  width: 100%;
  height:100%;
}

.mobile-ios .forward-enter-active,
.mobile-ios .forward-leave-active,
.mobile-ios .reverse-enter-active,
.mobile-ios .reverse-leave-active,
.forward-enter-active,
.forward-leave-active,
.reverse-enter-active,
.reverse-leave-active
{
  transition-duration:.5s;
  transition-timing-function:cubic-bezier(.36,.66,.04,1);
  transition-property:opacity,transform;
  opacity: 1;
}

.mobile-android .forward-enter-active,
.mobile-android .forward-leave-active,
.mobile-android .reverse-enter-active,
.mobile-android .reverse-leave-active{
  transition-duration:.5s;
  transition-timing-function:cubic-bezier(.4,.6,.2,1);
  opacity: 1;
}

.forward-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:1;z-index:2}
.forward-enter-active{box-shadow:0 0 10px rgba(0,0,0,.15)}
.forward-enter-to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;z-index:2}
.forward-leave{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:.8;z-index:1}
.forward-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0;z-index:1}

.reverse-enter{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.8;z-index:1}
.reverse-enter-to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;z-index:1}
.reverse-leave{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;z-index:2}
.reverse-leave-active{box-shadow:0 0 10px rgba(0,0,0,.15)}
.reverse-leave-to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:1;z-index:2}

.down-enter-active,
.down-leave-active,
.up-enter-active,
.up-leave-active
{
  transition-duration:.5s;
  /*transition-timing-function:cubic-bezier(.36,.66,.04,1);*/
  transition-property:opacity,transform;
   opacity: 1;
}

.up-enter{transform:translate3d(0,100%,0);opacity:1;z-index:2}
.up-enter-active{box-shadow:0 0 10px rgba(0,0,0,.15)}
.up-enter-to{transform:translateZ(0);opacity:1;z-index:2}
.up-leave{transform:translateZ(0);opacity:.8;z-index:1}
.up-leave-to{transform:translate3d(0,-100%,0);opacity:0;z-index:1}

.down-enter{transform:translate3d(0,-100%,0);opacity:.8;z-index:1}
.down-enter-to{transform:translateZ(0);opacity:1;z-index:1}
.down-leave{transform:translateZ(0);opacity:1;z-index:2}
.down-leave-active{box-shadow:0 0 10px rgba(0,0,0,.15)}
.down-leave-to{transform:translate3d(0,100%,0);opacity:1;z-index:2}
</style>
<style lang="less">
  /*APP环境 打开导航栏适配 FHX环境 关闭导航栏适配*/
  .mobile-android {
    .bar-header{
      height: 68px!important;
      .buttons,.title{
        top: 24px!important;
      }
    }
    .topTabs{
      top: 68px!important;
    }
    .page .page-content{
      top: 68px!important;
    }
    .page .page-content.noNavigation{
      top: 0!important;
    }
    .header-hidden .page-content{
      top: 0!important;
    }
    .mint-popup-3{
      .closeTit{
        padding-top:.4rem!important;
      }
    }
    .allShopData{
      margin-top: .2rem;
    }
  }
  .mobile-ios{
    .bar-header{
      height: 64px!important;
      .buttons,.title{
        top: 20px!important;
      }
    }
    .topTabs{
      top: 64px!important;
    }
    .page .page-content{
      top: 64px!important;
    }
    .page .page-content.noNavigation{
      top: 0!important;
    }
    .header-hidden .page-content{
      top: 0!important;
    }
    .mint-popup-3{
      .closeTit{
        padding-top:.4rem!important;
      }
    }
    .allShopData{
      margin-top: .2rem;
    }
  }
  /*iphone 10 */
   .mobile-iPhone10{
    .bar-header{
      height: 88px!important;
      .buttons,.title{
        /*top: 20px!important;*/
        top: 44px!important;
      }
    }
    .topTabs{
      top: 88px!important;
    }
    .page .page-content{
      top: 88px!important;
      /*bottom:30px!important;*/
    }
    .page .page-content.noNavigation{
      top: 0!important;
    }
    .header-hidden .page-content{
      top: 0!important;
    }
    .mint-popup-3{
      .closeTit{
        padding-top:.5rem!important;
      }
    }
    .allShopData{
      margin-top: .2rem;
    }
  }
  .mobile-iPhone10 .tabs{
    bottom: 30px!important;
  }
  .noNavigation{
    top: 0!important;
  }
</style>
