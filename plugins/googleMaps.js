import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCYVMMHN0SYaaYkUyVfKewB-RaPRpQwY38',
    libraries: 'places'
  }
})
