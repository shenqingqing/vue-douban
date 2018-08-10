<template>
    <div class="md-movie-list">
        <div class="list">
            <router-link v-for="(item, index) in boardsList" tag="li" :key="index" :to="{ name: 'broadItem', params: { movidId: item.id ,movieTitle: item.title }}" >
                <movie-item :movie="item"></movie-item>
            </router-link>
        </div>
    </div>
</template>
<script>
import movieItem from './movie-item'
export default {
    components: {
        movieItem
    },
    props: {
        boardsList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    
}
</script>
<style  lang="less">
.list {
  height: 100%;
  li{
        background: #fff;
        margin-top: .15rem;
  }
  .item {
    display: flex;
    padding: .2rem .4rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    img {
        width: 1.28rem;
        height: 1.68rem;
        margin-right: .2rem;
    }
    .meta {
        flex: 1;
        .title{
            font-size: .32rem;
            display: block;
            margin-bottom: .15rem;
        }
        .sub-title {
            font-size: .22rem;
            color: #c0c0c0;
            display: block;
            margin-bottom: .15rem;
        }
        .artists {
            font-size: .24rem;
            color: #999;
        }
    }
    .rating div {
            display: inline-block;
            width: .6rem;
            font-size: .28rrem;
            font-weight: bold;
            text-align: center;
            background-color: rgba(247, 76, 49, 0.8);
            color: #fff;
            border-radius: .2rem;
            height: .6rem;
            line-height: .6rem;
        }
    }
}


.list .item .rating text {
  display: inline-block;
  width: .4rem;
  font-size: .28rrem;
  font-weight: bold;
  text-align: center;
  background-color: rgba(247, 76, 49, 0.8);
  color: #fff;
  padding: .10rem;
  border-radius: .2rem;
}

.list .tips {
  font-size: .28rrem;
  text-align: center;
  padding: .50rem;
  color: #ccc;
}

.list .tips image,
.list .tips text {
  vertical-align: middle;
}

.list .tips image {
  width: .4rem;
  height: .4rem;
  margin-right: .2rem;
}
</style>


