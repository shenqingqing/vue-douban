<template>
    <div class="page has-footer">
        <m-header>
            <span slot="title">榜单</span>
        </m-header>
        <div class="page-content">
            <swiper-scroller ref="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" @pullingUp="pullingUp">
               <div class="creatSpace">
                   <swiper :options="swiperOptionBanner" class="bannerList" v-if="bannerArray.length > 1">
                        <swiper-slide v-for="(item,index) in bannerArray" :key="index">
                            <div class="innerdiv">
                            <img v-lazy="item.bannerImgUrl" :url="item.bannerImgUrl | resizeImageWH(750, 600)" class="img">
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
               </div>
               <div class="board">
                    <div class="board-item" @click="movieMore()">
                        <div class="title">
                            <div>{{boards.title}}</div>
                            <img src="../../assets/image/arrowright.png"/>
                        </div>
                    </div>
                   <div class="content">
                        <swiper :options="swiperOption" class="topTabList" ref="mySwiper" >
                        <swiper-slide v-for="(movie, index) in boards.subjects" :key="index">
                            <div class="inner">
                                    <!-- <router-link v-for="(movie, i) in boards.subjects" tag="li" :key="i" :to="{path: '/main'}" > -->
                                        <div  class="movie-item">
                                            <img v-lazy="movie.images.large" :url="movie.images.large">
                                            <div>{{ movie.title }}</div>
                                        </div>
                                    <!-- </router-link> -->
                                </div>
                        </swiper-slide>
                        </swiper>
                    </div>
               </div>
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
import { getSlide, getTopaoMoviedata } from 'api/getMovieData'
export default {
    data () {
        return {
            bannerArray: [], //banner资源
            boards: [], //列表
            swiperOptionBanner: {
                slidesPerView:1,
                autoplay: true,
                speed: 400,
                autoplay: {
                disableOnInteraction: false
                }
            },
            swiperOption: {
                slidesPerView: 3.8
            },
        }
    },
    computed: {
        scroll () {
            return this.$refs.scroll
        }
    },
    created() {
        this.getSlideList();
        this.getMovieList();
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
        },
        getMovieList() {
            getTopaoMoviedata(this,'',1).then((res) => {
                if(res) {
                    this.boards = res.data;
                }
            })
        },
        movieMore(){
            this.$router.push('/broadList')
        },
    }
}
</script>
<style scoped lang="less">
@import '../../assets/css/index.less';
</style>
