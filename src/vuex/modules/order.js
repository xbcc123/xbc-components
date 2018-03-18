import api from '../../fetch/api'
//import { Toast } from 'mint-ui'

const state = {
    
    waitingOrder: [],
    processOrder: [],
    finishOrder: [],
    orderDetails: {}
}

const actions = {
    
    getWokerOrder({ commit }, params) {
    	commit('loading_status', true) 
        api.getWokerOrder(params[0])
            .then(res => {
                commit('loading_status', false) 
                
			  	Toast({
				  message: '成功接单',
				  iconClass: 'ivu-icon ivu-icon-checkmark-round',
				  duration: 1000
				})
            	setTimeout (function(){
					window.location.hash='#/waitingOrderDetail/'+params[1]
				},1000)
            }, err => {
            	commit('loading_status', false)
            })
    },
    getFinishOrder({ commit }, params) {
    	commit('loading_status', true) 
        api.getFinishOrder(params[0])
            .then(res => {
               commit('loading_status', false) 
                
			  	Toast({
				  message: '订单确认处理完成',
				  iconClass: 'ivu-icon ivu-icon-checkmark-round',
				  duration: 1000
				})
            	setTimeout (function(){
					window.location.hash='#/waitingOrderDetail/'+params[1]
				},1000)
            }, err => {
            	commit('loading_status', false)
            })
    },
//  getOrderList({ commit }, params) {
//      api.getOrderList(params)
//          .then(res => {
//              commit('get_Order_List', res)
//          })
//  },
    getOrderDetails({ commit }, params) {
    	commit('loading_status', true) 
        api.getOrderDetails(params)
            .then(res => {
            	commit('loading_status', false)
                commit('get_Order_Details', res)
            }, err => {
            	commit('loading_status', false)
            })
    }
}

const getters = {
    waitingOrder: waitingOrder => state.waitingOrder,
    processOrder: processOrder => state.processOrder,
    finishOrder: finishOrder => state.finishOrder,
    orderDetails: orderDetails => state.orderDetails,
    
}

const mutations = {
    clearOrder(state){
    	state.waitingOrder.length=0
    	state.processOrder.length=0
    	state.finishOrder.length=0
    	console.log(state.waitingOrder)
    },
    get_waiting_order(state, res) {
    	if(res.result.page==1){
    		state.waitingOrder=res.result.data
    		return
    	}
        state.waitingOrder = state.waitingOrder.concat(res.result.data) 
    },
    get_process_order(state, res) {
    	if(res.result.page==1){
    		state.processOrder=res.result.data
    		return
    	}
        state.processOrder = state.processOrder.concat(res.result.data) 
    },
    get_finish_order(state, res) {
    	if(res.result.page==1){
    		state.finishOrder=res.result.data
    		return
    	}
        state.finishOrder = state.finishOrder.concat(res.result.data) 
    },
    get_Order_Details(state, res) {
        state.orderDetails = res.result
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}