<template>
    <div class="page">
        <div class="page-content mywatch">
            <swiper-scroller :pullDownRefresh="true" @pullingDown="pullingDown" :pullUpLoad="true" @pullingUp="pullingUp" ref="scroll">
                <movie-list :boardsList="boardsList" ></movie-list> 
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
import movieList from '../../broad/movie-list'
import axios from 'axios'
import { LOAD_TEXT } from 'api/config'
import { getTopaoMoviedata } from 'api/getMovieData'
export default {
    components: {
        movieList
    },
    data () {
        return {
            boardsList: [],
            page: 1,
            allCount: 9,
            loading: false,
        }
    },
    created() {
        this.pullingDown()
    },
    computed: {
        scroll () {
            return this.$refs.scroll
        },
        count () {
            return this.boardsList.length
        },
        hasData () {
            return this.count <= this.allCount
        }
    },
    methods: {
        _getData (p, callback) {
            if (this.loading && p !== 1) {
                setTimeout(() => {
                    if (callback) {
                        callback()
                    }
                }, 50)
                return
            }
            this.loading = true
            if (this.hasData || p === 1) {
                this._requestdata(p).then(() => {
                    setTimeout(() => {
                        if (callback) {
                            callback()
                        }
                    }, 50)
                })
            } else {
                setTimeout(() => {
                    if (callback) {
                        callback()
                    }
                }, 50)
            }
        },
        // 请求数据
        _requestdata (page) {
            this.$indicator.open(LOAD_TEXT)
            const url = '/douban/top250?p=' + page+'&c=10' 
            return axios.post(url, '').then((res) => {
                this.$indicator.close()
                if(res && res.data.data.subjects.length > 0) {
                    if (page === 1) this.boardsList = []
                    this.loading = false
                    this.page = res.data.data.page
                    this.allCount = res.data.data.count
                    let tempt = res.data.data.subjects
                    this.boardsList.push(...tempt)
                    // this.boardsList = res.data.data.subjects
                    console.log(this.boardsList)
                    console.log(this.hasData)
                    this.scroll.forceUpdate(this.hasData)
                }else {
                    if (page === 1) this.boardsList = []
                    this.scroll.forceUpdate(false) // 无数据（出现没有更多数据）
                }
            }).catch(function (eMsg) {
                console.log(eMsg)
                // this.scroll.forceUpdate(false) // 无数据（出现没有更多数据）
            })
        },
        // 下拉刷新
        pullingDown () {
            this._getData(1, () => {
                if (this.scroll) this.scroll.pulldownLoadEnd()
            })
        },
        // 上拉加载更多
        pullingUp () {
            this._getData(this.page + 1, () => {
                if (this.scroll) this.scroll.pullUpLoadEnd()
            })
        },
    }
}
</script>
<style lang="less" scoped>
.mobile-ios .page .page-content.mywatch {
  top:106px!important;
}
.mobile-android .page .page-content.mywatch {
  top:110px!important;
}
</style>

