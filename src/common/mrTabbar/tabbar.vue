<template>
    <div class="tabs" ref="tabs">
        <div v-for="(tabItem, index) in tabItems" :key="index" @click="tabClicked(tabItem, index)" class="tab-item" :class="{'active':activeIndex==index}">
            <i :class=tabItem.iconOff ></i>
            <span>{{tabItem.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabItems: [
                {
                    iconOn: 'icon-board-on',
                    iconOff: 'icon-board',
                    text: '榜单',
                    name: 'board',
                    path: '/board'
                },
                {
                    iconOn: 'icon-search-on',
                    iconOff: 'icon-search',
                    text: '搜索',
                    name: 'search',
                    path: '/search'
                },
                {
                    iconOn: 'icon-profile-on',
                    iconOff: 'icon-profile',
                    text: '我的',
                    name: 'main',
                    path: '/main'
                },
            ],
            activeIndex: 0
        }
    },
    computed: {
        pageNameList () {
            return this.$route.matched.map(route => route.meta)
        }
    },
    mounted () {
        var that =this
        this.tabItems.forEach(function(info, index) {
            if(info.name === that.pageNameList[1].pageName) {
                that.activeIndex = index
            }
        })
    },
    methods: {
       tabClicked (info, index) {
           this.activeIndex = index
           setTimeout(() => {
               this.$router.replace(info.path)
           })
       } 
    }
}
</script>
<style scoped lang="less">
.tabs{
  border-top:1px solid #eee;
  height: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  font-size: .2rem;
  color: #a0a0a0;
  .tab-item{
    width: 33.3%;
    float: left;
    text-align: center;
  }
}

</style>
