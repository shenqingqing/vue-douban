<template>
    <div class="page">
        <m-header>
            <span slot="left" class="backBtn"></span>
            <span slot="title">我的订单</span>
        </m-header>
        <div class="page-content">
            <m-toptab :tab="tab" @childTab="formTab"></m-toptab>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tab: {
                activeIndex:0,
                list:[{
                    text:'待收货',
                    id:'1'
                },{
                    text:'待付款',
                    id:'2'
                },{
                    text:'待发货',
                    id:'3'
                }
                ]
            }
        }
    },
    methods: {
        formTab(msg, index) {
            if(msg.text =='待收货') {

            }
        }
    }
}
</script>

