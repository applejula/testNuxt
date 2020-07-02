<template>
    <hotelMap :htlMapMaker="htlMapMaker" />
</template>
<script>
import hotelMap from '@/components/map/hotelMap.vue' 
export default {
    components:{
        hotelMap
    },
    data(){
        return {
            htlMapMaker:[
                {
                    postion: {
                        lng: 139.76316,
                        lat: 35.66823
                    },
                    hotelName: "호텔 유니조 도쿄 긴자 나나초메에",
                    hotelCode: "K19172"
                },
                {
                    postion: {
                        lng: 139.71929,
                        lat: 35.77912
                    },
                    hotelName: "HOTEL WING INTERNATIONAL TOKYO AKABANE",
                    hotelCode: "N07995"
                },
                {
                    postion: {
                        lng: 139.759587,
                        lat: 35.663251
                    },
                    hotelName: "콘라드 도쿄 호텔",
                    hotelCode: "H13677"
                },
            ]
        }
    },
    mounted(){
        console.log('mapview ====>')
    },
    methods:{
    }
}
</script>