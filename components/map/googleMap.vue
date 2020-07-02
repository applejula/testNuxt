<template>
    <gmap-map style="height:100%"
        :center="center"    :zoom="15" map-type-id="roadmap">
        <gmap-maker
            v-for="(row, idx) in mapMaker" :key="idx"
            :position="row.postion">
        </gmap-maker>
    </gmap-map>   
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