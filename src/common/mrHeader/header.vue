<template>
  <div class="bar bar-header">
    <div class="buttons btnLeft" v-on:click="backCallback()">
      <slot name="left"></slot>
    </div>
    <h3 class="title"
      :class="{
        'title-left': titleAlign === 'left',
        'title-right': titleAlign === 'right'
      }"
    >
      <slot name="title"></slot>
    </h3>
    <div class="buttons btnRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    titleAlign: {
      type: String,
      validator: function (position) {
        return position === 'left' || position === 'right' || position === 'center'
      },
      default: 'center'
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  methods: {
    backCallback () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang='less'>
.bar-header{
  height: 44px;
  line-height: 44px;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  z-index: 9;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  background: #fff;
  .title{
    margin:0!important;
    font-size: .35rem!important;
  }
}
.bar .buttons{
  position: absolute;
  line-height: 44px;
  z-index: 2;
  span{
    height: 44px;
    width: 100%;
    font-size: .28rem;
    display: block;
    background: none;
    border: none;
    position: relative;
    z-index: 1;
    text-align: center;
  }
}
.btnLeft{
  width: 1.5rem;
  left: 0;
}
.btnRight{
  width: 2rem;
  right: 0;
}
.bar .title {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    margin: 0 10px;
    min-width: 30px;
    height: 44px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    font-weight:normal;
    line-height: 44px;
}
</style>
