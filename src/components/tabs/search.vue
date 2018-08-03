<template>
    <div class="page has-footer">
        <m-header>
            <span slot="title">搜索</span>
        </m-header>
        <div class="page-content">
            <swiper-scroller ref="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" @pullingUp="pullingUp">
                <input type="text" class="search" placeholder="请输入搜索内容..." v-model="searchKeyWord" @keyup.enter="startSearch()">
                <div>123456</div>
                <div>123456</div>
                <div>123456</div>
                <div>123456</div>
                <div>123456</div>
                <div>123456</div>
                <div>123456</div>
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    computed: {
        scroll () {
            return this.$refs.scroll
        }
    },
    methods: {
        pullingDown () {
            setTimeout(() => {
                this.scroll.pulldownLoadEnd()
            }, 20)
        },
        pullingUp () {
            setTimeout(() => {
                this.scroll.pullUpLoadEnd()
            }, 20) 
        },
        startSearch () {

        }
    }
}
</script>

<style lang="less" scoped>
.search{
    width: 100%;
    line-height: 40px;
    background: #f1f1f1;
    border-bottom: 1px solid #f0f0f0;
    border-bottom: 2px solid #f1f1f1;
    height: 40px;
    font-size: .28rem;
    padding-left: .3rem;
}
</style>
