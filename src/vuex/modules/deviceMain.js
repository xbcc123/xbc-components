import api from '../../fetch/api'
//import * as types from '../types'
//import { Toast } from 'mint-ui'

const state = {
	
    device_operator: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [],
          textAlign: 'center'
        }
    ],
    device_status: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [{
          	status: '全部',
          	id:0
          },{
          	status: '正常',
          	id:1
          },{
          	status: '异常',
          	id:2
          }],
          textAlign: 'center'
        }
    ],
    monitor_status: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [{
          	status: '全部',
          	id:0
          },{
          	status: '正常',
          	id:1
          },{
          	status: '预警',
          	id:2
          }],
          textAlign: 'center'
        }
    ],
    operator_status: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [{
          	status: '全部',
          	id:0
          },{
          	status: '正常',
          	id:1
          },{
          	status: '禁用',
          	id:2
          }],
          textAlign: 'center'
        }
    ],
    device_worker: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [],
          textAlign: 'center'
        }
    ],
    
    device_list:[],
    areasInfo:[],
    curDeviceDetail:{},
    monitor_list:[],
    curMonitorDetail:{}
    
   
}

const actions = {
	
	
	//获取运营商
	getOperator({commit }) {

        api.getOperator()
            .then(res => {
                commit('get_operator', res)
            })
    },
    
    
    //获取责任人
    getWorker({ commit},params) {
        
        api.getWorker(params)
            .then(res => {
                commit('get_worker', res)
            })
    },
    
    //获取设备列表
//	getDeviceList({ commit },params) {
//      // commit('loading_status', true) 
//      api.getDeviceList(params)
//          .then(res => {
//          	commit('loading_status', false)
//              commit('get_device_list', res)
//          }, err => {
//          	commit('loading_status', false)
//          })
//  },
    
     //获取设备详情
	getDeviceDetail({ commit },params) {   
        commit('loading_status', true)   
        api.getDeviceDetail(params)
            .then(res => {
            	commit('loading_status', false) 
                commit('get_device_detail', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    
    //获取设备预警列表
//	getMonitorList({ commit },params) {
//      // commit('loading_status', true) 
//      api.getMonitorList(params)
//          .then(res => {
//          	commit('loading_status', false)
//              commit('get_monitor_list', res)
//          }, err => {
//          	commit('loading_status', false)
//          })
//  },
    
     //获取设备预警详情
	getMonitorDetail({ commit },params) {
           commit('loading_status', true)   
        api.getMonitorDetail(params)
            .then(res => {
            	commit('loading_status', false)
                commit('get_monitor_detail', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    
    //远程控制
	remoteOperate({ commit },params) {   
        api.remoteOperate(params)
            .then(res => { 
            	if(/OPENDOOR/g.test(params)){
            		Toast({
					  message: '远程开门成功',
					  iconClass: 'ivu-icon ivu-icon-checkmark-round',
					  duration: 2000
					})
            		return
            	}
            	if(/REBOOT/g.test(params)){
            		Toast({
					  message: '远程重启成功',
					  iconClass: 'ivu-icon ivu-icon-checkmark-round',
					  duration: 2000
					})
            		return
            	}
            	
            }, err => {
            	if(/OPENDOOR/g.test(params)){
            		Toast({
					  message: '远程开门失败',
					  iconClass: 'ivu-icon ivu-icon-checkmark-round',
					  duration: 2000
					})
            		return
            	}
            	if(/REBOOT/g.test(params)){
            		Toast({
					  message: '远程重启失败',
					  iconClass: 'ivu-icon ivu-icon-checkmark-round',
					  duration: 2000
					})
            		return
            	}
            })
		
    },
    
    
    //获取片区列表
	getAreasList({ commit }) {
         // commit('loading_status', true)    
        api.getAreasInfo()
            .then(res => {
            	commit('loading_status', false)
                commit('get_areas_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    /**
     * 获取约跑步列表
     */
//  getSportsList({ commit }) {
//      if(state.scroll) {
//          commit(types.GET_SPORTS_PAGE_NUM)
//          commit(types.COM_LOADING_STATUS, true),
//          commit(types.GET_SPORTS_SCORLL_STATUS, false)
//          api.SportsList()
//              .then(res => {
//                  console.log(res)
//                  commit(types.COM_LOADING_STATUS, false),
//                  commit(types.GET_SPORTS_SCORLL_STATUS, true)
//                  commit(types.GET_SPORTS_LIST, res)
//              })
//      }
//  }
}

const getters = {
	
    device_operator: state => state.device_operator,
    device_status: state => state.device_status,
    monitor_status: state => state.monitor_status,
    operator_status: state => state.operator_status,
    device_worker: state => state.device_worker,
    device_list: state => state.device_list,
    curDeviceDetail: state => state.curDeviceDetail,
    monitor_list: state => state.monitor_list,
    curMonitorDetail: state => state.curMonitorDetail,
    areasInfo: state => state.areasInfo
}

const mutations = {
	
    get_operator (state, res) {
        state.device_operator[0].values = res.result.list
    },
    
    get_worker (state, res) {
        state.device_worker[0].values = res.result.list
        
    },
    
    get_device_list (state, res) {
    	if(res.result.page==1){
    		state.device_list=res.result.data
    		return
    	}
        state.device_list = state.device_list.concat(res.result.data) 
    },
    
    get_device_detail (state, res) {
        state.curDeviceDetail = res.result
    },
    
    get_monitor_list (state, res) {
    	if(res.result.page==1){
    		state.monitor_list=res.result.data
    		return
    	}
        state.monitor_list = state.monitor_list.concat(res.result.data) 
    },
    
    get_monitor_detail (state, res) {
        state.curMonitorDetail = res.result
    },
    
    get_areas_list (state, res) {
        state.areasInfo = res.result
    }
//  [types.GET_SPORTS_SEARCH_KEY](state, params) {
//      state.searchKey = params
//  },
//  [types.GET_SPORTS_PAGE_NUM](state) {
//      state.searchKey['page'] += 1
//  },
//  [types.GET_SPORTS_SCORLL_STATUS](state, status) {
//      state.scroll = status
//  }
}

export default {
    state,
    actions,
    getters,
    mutations
}