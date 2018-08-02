<template>
  <swiper :options="swiperOption" class="scroll-container" ref="swiper">
    <slot name="pulldownContainer" :pullDownRefresh="pullDownRefresh" :isPullingDown="isPullingDown" v-if="pullDownRefresh">
      <div ref="pulldown" class="pulldown-wrapper" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="!pullDownLoading">
          <bubble ref="bubble"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <loading></loading>
          </div>
          <div v-else>
            <span class="text-color font14">{{refreshTxt}}</span>
          </div>
        </div>
      </div>
    </slot>
    <swiper-slide class="scroll-slide">
      <slot></slot>
      <slot name="pullupContainer" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span class="text-color">{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </swiper-slide>
  </swiper>
</template>

<script>
import Loading from './loading.vue'
import Bubble from './bubble.vue'
export default {
  name: 'swiperScroller',
  props: {
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    }
  },
  data () {
    let vm = this
    return {
      beforePullDown: true,
      isPullUpLoad: false,
      isPullingDown: false,
      pullDownLoading: false,
      pullUpLoading: false,
      pullUpDirty: true,
      oldTranslate: 0,
      swiperOption: {
        // resistanceRatio: 0,
        speed: 300,
        slidesPerView: 'auto',
        freeMode: true,
        direction: 'vertical',
        // setWrapperSize: true,
        debug: true,
        on: {
          touchEnd: function () {
            // console.log('touchEnd', this.translate)
            var swiper = this
            if (this.translate > 100) {
              swiper.setTransition(this.params.speed)
              swiper.setTranslate(100)
              swiper.touchEventsData.isTouched = false// 跳过touchEnd事件后面的跳转(4.0.5)
              swiper.params.virtualTranslate = true// 定住不给回弹
              swiper.allowTouchMove = false
              vm.pullDownLoading = true
              vm.$emit('pullingDown')
            } else if (swiper.isEnd) {
              swiper.allowTouchMove = true
              vm.pullUpLoading = true
              swiper.params.virtualTranslate = true// 定住不给回弹
              vm.$emit('pullingUp')
            }
            if (this.pullDownRefresh) {
              vm.$refs.bubble.setY(0)
            }
          },
          touchMove: function (e) {
            // console.log('touchMove', this.translate)
            vm.$emit('onScroll', this.translate)
            var translate = this.translate
            var bubble = vm.$refs.bubble

            if (vm.oldTranslate > translate) {
              vm.$emit('onScrollUp', this.translate)
            } else {
              vm.$emit('onScrollDown', this.translate)
            }
            vm.oldTranslate = translate

            if (translate > 0) {
              if (bubble) {
                bubble.setY(translate - vm.pullDownInitTop)
              }
            }
          },
          momentumBounce: function () { // 非正式反弹回调函数，上拉释放加载更多
            var swiper = this
            // debugger;
            if (swiper.translate < -100) {
              swiper.allowTouchMove = true
              vm.pullUpLoading = true
              swiper.params.virtualTranslate = true// 定住不给回弹
              vm.$emit('pullingUp')
            }
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper
    },
    pullUpTxt () {
      const moreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) || '加载更多'

      const noMoreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore) || '没有更多数据了'

      return this.pullUpDirty ? moreTxt : noMoreTxt
    },
    refreshTxt () {
      return (this.pullDownRefresh && this.pullDownRefresh.txt) || '刷新成功'
    }
  },
  mounted () {
  },
  created () {
    this.pullDownInitTop = 80
  },
  methods: {
    pulldownLoadEnd () {
      var swiper = this.swiper
      this.pullDownLoading = false
      if (swiper) {
        setTimeout(() => {
          swiper.swiper.params.virtualTranslate = false// 定住不给回弹
          swiper.swiper.allowTouchMove = true
          swiper.swiper.update()
        },100)
      }
    },
    pullUpLoadEnd () {
      var swiper = this.swiper
      this.pullUpLoading = false
      if (swiper) {
        setTimeout(() => {
          swiper.swiper.params.virtualTranslate = false// 定住不给回弹
          swiper.swiper.allowTouchMove = true
          swiper.swiper.update()
        },100)
      }
    },
    forceUpdate (dirty) {
      this.pullUpDirty = dirty
      this.isPullUpLoad = dirty
    }
  },
  components: {
    Loading,
    Bubble
  }
}
</script>

<style lang="less" scoped>
  .scroll-container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    /*background: #fff;*/
  }
  .scroll-slide{
    min-height: 100%!important;
    height: auto!important;
  }
  .pulldown-wrapper{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    height: 80px;
    .after-trigger{
      margin-top: 10px;
    }
  }
  .pullup-wrapper{
    top: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .1rem 0;
  }
  .text-color{
    color: #999;
  }
</style>