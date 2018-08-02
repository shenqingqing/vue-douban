<template>
    <div>
        <transition name="fade">
            <keep-alive><router-view></router-view></keep-alive>
        </transition>
        <m-tabbar></m-tabbar>
    </div>
</template>
<script>
import mTabbar from './mrTabbar/tabbar.vue'
export default {
    components: {
        mTabbar
    }
}
</script>
