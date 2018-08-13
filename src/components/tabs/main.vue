<template>
    <div class="page has-footer">
        <div class="page-content mine">
            <swiper-scroller ref="scroll" :pullDownRefresh="false" @pullingDown="pullingDown" @pullingUp="pullingUp">
                <div class="myHeader">
                    <div class="head">
                        <div class="mrimg"></div>
                    </div>
                    <div class="loginInfo">
                        <div class="font30 nickName">
                            {{userinfo.nickName}}({{userinfo.realName}})
                        </div>
                        <p class="left word mt20">点击查看或编辑个人信息</p>
                    </div>
                </div>
                <div class="myOrder mt20">
                    <router-link class="orderCont" tag="div" to="/myorder">
                        <div class="icon1">
                        <img src="@/assets/image/mine/icon_myorder.png" class="img"></div>
                        <p class="text text-c black3 font28 mt30">我的订单</p>
                    </router-link>
                    <!-- <router-link class="orderCont" tag="div" to="/myIssue"> -->
                    <div class="orderCont">
                        <div class="icon2"><img src="@/assets/image/mine/icon_issue.png" class="img"></div>
                        <p class="text text-c black3 font28 mt30">我的收藏</p>
                    </div>
                    <!-- </router-link> -->
                    <!-- <router-link class="orderCont" tag="div" :to="{path: '/myReply', query:{'type': 'Offic'}}"> -->
                    <div class="orderCont">
                        <div class="icon2"><img src="@/assets/image/mine/icon_reply.png" class="img"></div>
                        <p class="text text-c black3 font28 mt30">我的积分</p>
                    </div>
                    <!-- </router-link> -->
                    <div class="orderCont" @click="myActive()">
                        <div class="icon2"><img src="@/assets/image/mine/icon_active.png" class="img"></div>
                        <p class="text text-c black3 font28 mt30">观看历史</p>
                    </div>
                </div>
                <div class="myMenu">
                    <ul>
                        <!-- <router-link to='/feedback' tag="li">
                            <span class="icon"><img src="@/assets/image/mine/icon_back.png" class="img"></span>
                            <span class="font28 black3">意见反馈</span>
                            <span class="arrow"></span>
                        </router-link> -->
                        <!-- <router-link to='/serviceHotline' tag="li">
                            <span class="icon"><img src="@/assets/image/mine/icon_hot.png" class="img"></span>
                            <span class="font28 black3">服务热线</span>
                            <span class="arrow"></span>
                        </router-link> -->
                        <!-- <router-link to="/about" tag="li" class="aboutApp"> -->
                        <li class="aboutApp">
                            <span class="icon"><img src="@/assets/image/mine/icon_aboutapp.png" class="img"></span>
                            <span class="font28 black3">关于APP</span>
                            <span class="arrow"></span>
                            <span class="shareImg"><img src="@/assets/image/mine/signShare.png"/></span>
                        </li>
                        <!-- </router-link> -->
                        <!-- <router-link to="/set" tag="li"> -->
                        <li>
                            <span class="icon"><img src="@/assets/image/mine/icon_set.png" class="img"></span>
                            <span class="font28 black3">设置</span>
                            <span class="arrow"></span>
                        </li>
                        <!-- </router-link> -->
                    </ul>
                </div>
            </swiper-scroller>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userinfo: {}
        }
    },
    computed: {
        scroll () {
            return this.$refs.scroll
        }
    },
    created () {
         this.userinfo= {
            nickName: '江南偏南_MD',
            realName: '花花'
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
        myActive () {
            this.$router.push('/myWatch')
        }
    }
}
</script>

<style lang='less' scoped>
.page-content{
  background: #f5f5f5;
  clear: both;
  margin-top: -64px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.mobile-android .page-content {
  margin-top: -44px;
}
.myHeader{
  width: 100%;
  background-color: #fff;
  background-size: 100%;
  height: 2.84rem;
  padding: .2rem;
  padding-right: .3rem;
  padding-top: .9rem;
  display: flex;
  .head{
    height: 1.24rem;
    margin-left: .2rem;
    box-shadow: 0px 5px 10px #eee;
    border-radius: 50%;
    flex-basis: 1.57rem;
    .mrimg{
      width: 1.24rem;
      height: 100%;
      background: url('../../assets/image/headerimg.png') 100% center no-repeat;
      border-radius: 50%;
      background-size: contain;
    }
  }
  .loginInfo {
    width: 100%;
    position: relative;
    height: 1.24rem;
    background: url('../../assets/image/arrowright.png') 100% center no-repeat;
    background-size: .15rem .25rem;
  }
  .nickName{
    width: 68%;
    display: inline-block;
    margin-left: .35rem;
    margin-top: .25rem;
    color: #000;
  }
  .word{
    margin-left: .35rem;
    color: #999;
  }
  .editBtn{
    width: 1rem;
    height: .7rem;
    margin: auto;
    img{
      width: .4rem;
      height: .4rem;
    }
  }
}
.myOrder{
  padding:.4rem 0;
  width: 100%;
  background: #fff;
  overflow: hidden;
  .orderCont{
    float: left;
    width: 25%;
    position: relative;
    .icon1{
      width: .38rem;
      height: .41rem;
      margin: auto;
    }
    .icon2{
      width: .44rem;
      height: .42rem;
      margin: auto;
    }
    .redIcon{
      min-width: .3rem;
      background: #ea4a1f;
      color: #fff;
      text-align: center;
      display: inline-block;
      position: absolute;
      border-radius: 5px;
      right: .5rem;
      top: -.1rem;
      font-size: .2rem;
      box-shadow: 0px 5px 10px #ccc;
    }
  }
}
.myOrder{
  padding:.4rem 0;
  width: 100%;
  background: #fff;
  overflow: hidden;
  .orderCont{
    float: left;
    width: 25%;
    position: relative;
    .icon1{
      width: .38rem;
      height: .41rem;
      margin: auto;
    }
    .icon2{
      width: .44rem;
      height: .42rem;
      margin: auto;
    }
    .redIcon{
      min-width: .3rem;
      background: #ea4a1f;
      color: #fff;
      text-align: center;
      display: inline-block;
      position: absolute;
      border-radius: 5px;
      right: .5rem;
      top: -.1rem;
      font-size: .2rem;
      box-shadow: 0px 5px 10px #ccc;
    }
  }
}
.myMenu{
  margin: .2rem 0 .3rem 0;
  background: #fff;
  /*padding-left:.3rem;*/
  border-bottom: 1px solid #eee;
  li{
    border-bottom: 1px solid #eee;
    height: 1.1rem;
    line-height: 1.1rem;
    .icon{
      width: .44rem;
      height: .44rem;
      display: inline-block;
      position: relative;
      top: 0.14rem;
      margin-right: .2rem;
      margin-left: .3rem;
      vertical-align: top;
    }
    .arrow{
      width: .19rem;
      height: .34rem;
      background: url(../../assets/image/arrowright.png) no-repeat;
      background-size: 100%;
      float: right;
      margin-top: .45rem;
      margin-right: .3rem;
    }
  }
  li:last-child{
     border-bottom:0;
  }
}
.shareImg {
    position: absolute;
    width: .4rem;
    height: .4rem;
    right: .8rem;
    top: 50%;
    margin-top: -.2rem;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
.aboutApp {
  position: relative;
}
.mobile-iPhone10 .mine{
  height: 90%;
}
</style>

