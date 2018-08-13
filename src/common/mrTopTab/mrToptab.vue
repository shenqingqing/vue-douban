<template>
    <ul class="top_tab" ref="top_tab" flex="main:center">
        <li v-for="(tabItem, index) in tab.list" :key="index" @click="clickedTab(tabItem, index)" :class="{'active': tab.activeIndex == index}">{{tabItem.text}}</li>
    </ul>
</template>
<script>
export default {
    name: 'tab',
    props: {
        tab: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data () {
        return {

        }
    },
    methods: {
       clickedTab (tabItem, index) {
           this.tab.activeIndex =index
           this.$emit('childTab', tabItem, index)
       } 
    }
}
</script>
<style lang="less" scoped>
.mobile-android .page-content .top_tab{
  top: 45px;
}
.mobile-ios .page-content .top_tab{
  top: 65px;
}
.top_tab{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    overflow: hidden;
    border-bottom: 1px solid #f1f1fa;
  li{
        font-size: .32rem;
        position: relative;
        height: .74rem;
        line-height: .74rem;
        color: #6f7587;
        width: 33%;
        text-align: center;
        float: left;
    &.active{
        color: #227877;
      &:before{
            content: '';
            position: absolute;
            margin: auto;
            bottom: 0;
            left: 0;right: 0;
            width: .6rem;
            height: 2px;
            background-color: #227877;}
    }
  }
}
</style>