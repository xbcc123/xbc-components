import api from '../../fetch/api'
//import * as types from '../types'
//import { Toast } from 'mint-ui'

const state = {
    operatorList:[]
    
}

const actions = {
	
	//运维用户
	getOperatorList({ commit },param) {
          //commit('loading_status', true) 
        api.getOperatorList(param.params)
            .then(res => {
            	
				commit('scroller_show_status', false)    
            	commit('loading_status', false) 
                commit('get_operator_list', res)
                setTimeout(function(){
            		param.data.$refs.scroller.resize()
            	},10)
            }, err => {
            	commit('loading_status', false)
            })
    }
   	
   	
    
   
}

const getters = {
    
    operatorList: state => state.operatorList
   
    
}

const mutations = {
   
    get_operator_list (state, res) {
        state.operatorList = res.result
    }
    
   
}

export default {
    state,
    actions,
    getters,
    mutations
}