<template>
    <div>
        <div v-for="(row, idx) in mapMaker" :key="idx">
            {{row.hotelName}}:{{row.postion}}
        </div>
    </div>
</template>
<script>
import {gmapApi} from 'vue2-google-maps'
export default {
    props:{
        htlMapMaker:{
            type: Array,
            default: []
        }
    },
    data(){
        return {
            mapMaker:[]
        }
    },
    beforeMount(){
        this.mapMaker = _cloneDeep(this.htlMapMaker)
    }
}
</script>