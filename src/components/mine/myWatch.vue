<template>
    <div class="page">
        <m-header>
            <span slot="left" class="backBtn"></span>
            <span slot="title">观看历史</span>
        </m-header>
        <div class="tabs font30 clearfloat">
            <div class="tab" @click="toggleTab('mywatch')"><span :class="{active: currentTab == 'mywatch'}">我的观看</span></div>
            <div class="tab" @click="toggleTab('myoffline')"><span :class="{active: currentTab == 'myoffline'}">我的离线</span></div>
        </div>
        <div :is="currentTab" keep-alive class="tab-page"></div>
    </div>
</template>
<script>
import mywatch from './historytabs/mywatch'
import myoffline from './historytabs/myoffline'
export default {
    data () {
        return {
            currentTab: 'mywatch'
        }
    },
    components: {
        mywatch,
        myoffline
    },
    methods: {
        toggleTab (tab) {
            this.currentTab = tab
        }
    }
}
</script>
<style scoped lang="less">
.page {
  background: #f5f5f5
}
.page-content {
  margin-top: 1.07rem
}
.tabs {
   width: 100%;
   line-height: 40px;
   background: #fff;
   position: fixed;
   top: 45px;
   z-index: 1000;
   .tab {
     width: 50%;
     float: left;
     text-align: center;
     span {
       display: inline-block;
       width: 100%;
       height: 100%;
       &.active {
         color: #227877;
         border-bottom: 2px solid #227877
       }
     }
   }
 }
 .mobile-android .tabs{
  top: 69px;
 }
 .mobile-ios .tabs{
  top: 65px;
 }
 .mobile-iPhone10 .tabs{
   top:89px;
   bottom: initial!important;
 }
</style>


