<template>
    <div class="page has-footer">
        <m-header>
            <span slot="title">榜单</span>
        </m-header>
        <div class="page-content">
            <swiper-scroller ref="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" @pullingUp="pullingUp">
               <div>
                   <swiper :options="swiperOptionBanner" class="headerBanner" v-if="bannerArray.length > 1">
                        <swiper-slide v-for="(item,index) in bannerArray" :key="index">
                            <div class="innerdiv">
                            <!-- <mr-img :url="item.bannerImgUrl | resizeImageWH(750, 600)" class="img"></mr-img> -->
                            <img v-lazy="item.bannerImgUrl" :url="item.bannerImgUrl | resizeImageWH(750, 600)" class="img">
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
               </div>
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
import { getSlide } from 'api/getMovieData'
export default {
    data () {
        return {
            bannerArray: [], //banner资源
            swiperOptionBanner: {
                slidesPerView:1,
                autoplay: true,
                speed: 400,
                autoplay: {
                disableOnInteraction: false
                }
            }
        }
    },
    computed: {
        scroll () {
            return this.$refs.scroll
        }
    },
    created() {
        this.getSlideList();
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

        },
        getSlideList() {
            getSlide(this).then((res) => {
                if(res) {
                    this.bannerArray = res.data.slideList;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.innerdiv{
    height: 4.8rem;
}
</style>