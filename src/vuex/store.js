

import Vue from 'vue'
import Vuex from 'vuex'

//import user from './modules/user'
import deviceMain from './modules/deviceMain'
import operation from './modules/operation'
import volume from './modules/volume'
import config from './modules/config'
import order from './modules/order'
import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        config,
        deviceMain,
        operation,
        volume,
        order,
        com
    }
})