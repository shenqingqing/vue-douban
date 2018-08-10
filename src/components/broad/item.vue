<template>
    <div class="page">
        <m-header>
            <span slot="left" class="backBtn"></span>
            <span slot="title">{{movieTitle}}</span>
        </m-header>
        <div class="page-content">
            <swiper-scroller ref="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" @pullingUp="pullingUp">
                <img v-if="movie.images" v-lazy="movie.images.large" :url="movie.images.large" class="background">
                <div class="meta" v-if="movie.title">
                    <img v-lazy="movie.images.large" :url="movie.images.large" class="poster">
                    <div class="title">{{movie.title}} ({{movie.year}})</div>
                    <div class="info">评分： {{movie.rating.average}}</div>
                    <div class="info">导演：<span v-for="director in movie.directors" :key="director.id">{{director.name}} </span></div>
                    <div class="info">主演： <span v-for="cast in movie.casts" :key="cast.id">{{cast.name}} </span></div>
                </div>
                <div class="summary">
                    <div class="label">摘要：</div>
                    <div class="content" v-if="movie.summary">{{movie.summary}}</div>
                    <div v-else>只有这个杀手不太冷有内容...</div>
                </div>
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
import { getSubjectById } from  'api/getMovieData'
export default {
    data () {
        return {
            movidId: '',
            movieTitle: '',
            movie:{}
        }
    },
    created () {
        this.movidId = this.$route.params.movidId
        this.movieTitle = this.$route.params.movieTitle
        this.getMovieById(this.movidId)
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
        getMovieById (movidId) {
            getSubjectById(this, movidId).then((res) => {
                if(res) {
                    this.movie = res.data;
                    console.log(this.movie);
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem .4rem;
}

.poster {
  width: 100%;
  height: 5.3rem;
  margin: .2rem;
}

.title {
  font-style: 42rpx;
  color: #444;
}

.info {
  font-size: .24rem;
  color: #888;
  margin-top: .2rem;
  width: 80%;
}

.summary {
  width: 80%;
  margin: .3rem auto;
}

.label {
  display: block;
  font-size: .3rem;
  margin-bottom: .3rem;
}

.content {
  color: #666;
  font-size: .22rem;
  padding: 2em;
}

.background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
  opacity: .1;
}
</style>
