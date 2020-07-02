<template>
    <div class="hotelmap">
        호텔 구글 지도 표시용 div:
        <googleView :htlMapMaker="htlMapMaker"></googleView>
    </div>
</template>
<script>
import googleView from '@/components/map/googleView.vue' 
export default {
    props:{
        htlMapMaker:{
            type:Array,
            default:[]
        }
    }
}
</script>