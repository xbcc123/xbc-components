import api from '../../fetch/api'
//import * as types from '../types'
//import { Toast } from 'mint-ui'
import Router from 'vue-router'
const state = {
    materielList:[],
    addMaterielList:[],
    feedDetail: {},
    stationList : {},
    selectedStation: {
    	id: undefined,
    	value: undefined
    },
    materielAmount:[],
    materielAmountList:[],
    cleanPositionList:[],
    cleanList:[],
    cleanDetail: {},
    site_list: [
        {
          flex: 1,
          defaultIndex : 0,
          values: [],
          textAlign: 'center'
        }
    ],
    repairKindList:[],
    repairList:[],
    repairDetail: {},
    operationAnalysis:[],
    operationAnalysisList:[],
    maxCount: 0,
    
    operationAnalysisStation:[]
  
}

const actions = {
	
	//获取物料列表
	getMaterielList({ commit }) {
        //commit('loading_status', true)    
        api.getMaterielList()
            .then(res => {
            	commit('loading_status', false)
                commit('get_materiel_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //获取站点列表
	getStationList({ commit },params) {
         //commit('loading_status', true)    
        api.getStationList(params)
            .then(res => {
            	commit('loading_status', false)
                commit('get_station_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    //获取附近站点
	getNearbyStation({ commit },params) {
         //commit('loading_status', true)    
        api.getStationList(params)
            .then(res => {
            	commit('loading_status', false)
                commit('save_station', res.result.near[0])
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //获取加料记录列表
//	getAddMaterielList({ commit },params) {
//      //commit('loading_status', true)    
//      api.getAddMaterielList(params)
//          .then(res => {
//          	commit('loading_status', false)
//              commit('get_add_materiel_list', res)
//          }, err => {
//          	commit('loading_status', false)
//          })
//  },
    
    
    //添加物料
	addMateriel({ commit },params) {
//		commit('loading_status', true)   
        api.addMateriel(params)
            .then(res => {
            	commit('loading_status', false)   
            	Toast({
				  message: '加料成功',
				  iconClass: 'ivu-icon ivu-icon-checkmark-round',
				  duration: 800
				})
            	setTimeout (function(){
					window.location.hash="#feedRecordUpdata"
				},800)
            	
            }, err => {
            	commit('loading_status', false)
            	Toast({
				  message: '加料失败',
				  position: 'bottom',
				  duration: 3000
				});
            })
		
    },
    //获取物料使用量
	getMaterielAmount({ commit },params) {
         //commit('loading_status', true)  
        api.getMaterielAmount(params)
            .then(res => {
            	commit('loading_status', false)
            	commit('get_materiel_amount', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //获取各站点物料使用列表
	getMaterielAmountList({ commit },params) {
           commit('loading_status', true)   
        api.getMaterielAmountList(params)
            .then(res => {
            	commit('loading_status', false)
            	commit('get_materiel_amount_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //获取清洁部位列表
	getCleanPositionList({ commit }) {
         //commit('loading_status', true)    
        api.getCleanPositionList()
            .then(res => {
            	commit('loading_status', false)  
            	commit('get_clean_position_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //添加清洁记录
	addClean({ commit },params) {
         //commit('loading_status', true)    
        api.addClean(params)
            .then(res => {
            	commit('loading_status', false)   
            	Toast({
				  message: '清洁成功',
				  iconClass: 'ivu-icon ivu-icon-checkmark-round',
				  duration: 800
				})
            	setTimeout (function(){
					window.location.hash="#cleanRecordUpdata"
				},800)
            	
            }, err => {
            	commit('loading_status', false)
            	Toast({
				  message: '清洁失败',
				  position: 'bottom',
				  duration: 3000
				});
            })
    },
    
    //获取清洁记录列表
//	getCleanList({ commit },params) {
//       //commit('loading_status', true)     
//      api.getCleanList(params)
//          .then(res => {
//          	commit('loading_status', false)    
//          	commit('get_clean_list', res)
//          }, err => {
//          	commit('loading_status', false)
//          })
//  },
	
	


	//获取维修部位列表
	getRepairKindList({ commit }) {
         //commit('loading_status', true)    
        api.getRepairKindList()
            .then(res => {
            	commit('loading_status', false)  
            	commit('get_repair_kind_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //添加维修记录
	addRepair({ commit },params) {
         //commit('loading_status', true)    
        api.addRepair(params)
            .then(res => {
            	commit('loading_status', false)     
            	Toast({
				  message: '维修成功',
				  iconClass: 'ivu-icon ivu-icon-checkmark-round',
				  duration: 800
				})
            	setTimeout (function(){
					window.location.hash="#repairRecordUpdata"
				},800)
            	
            }, err => {
            	commit('loading_status', false)
            	Toast({
				  message: '维修失败',
				  position: 'bottom',
				  duration: 3000
				});
            })
    },
    
    
    //运维分析初始页
	getOperationAnalysis({ commit }, params) {
         //commit('loading_status', true)    
        api.getOperationAnalysis(params)
            .then(res => {
            	commit('scroller_show_status', false)   
            	commit('loading_status', false)  
            	commit('get_operation_analysis', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //运维分析选择类型查看
	getOperationAnalysisType({ commit }, params) {
           commit('loading_status', true)    
        api.getOperationAnalysisType(params)
            .then(res => {
            	commit('loading_status', false)  
            	commit('get_operation_analysis_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //运维分析站点查看
	getOperationAnalysisStation({ commit }, params) {
           commit('loading_status', true)    
        api.getOperationAnalysisStation(params)
            .then(res => {
            	commit('loading_status', false)  
            	commit('get_operation_analysis_station', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //获取维修列表详情
//	getRepairDetail({ commit }, params) {
//       //commit('loading_status', true)    
//      api.getRepairDetail(params)
//          .then(res => {
//          	commit('loading_status', false)  
//          	commit('get_repair_detail', res)
//          }, err => {
//          	commit('loading_status', false)
//          })
//  },




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
    
    materielList: state => state.materielList,
    addMaterielList: state => state.addMaterielList,
    feedDetail: state => state.feedDetail,
    stationList: state => state.stationList,
    selectedStation: state => state.selectedStation,
    materielAmount: state => state.materielAmount,
    materielAmountList: state => state.materielAmountList,
    cleanPositionList: state => state.cleanPositionList,
    cleanList: state => state.cleanList,
    cleanDetail: state => state.cleanDetail,
    site_list: state => state.site_list,
    repairKindList: state => state.repairKindList,
    repairList: state => state.repairList,
    repairDetail: state => state.repairDetail,
    operationAnalysis: state => state.operationAnalysis,
    operationAnalysisList: state => state.operationAnalysisList,
    maxCount: state => state.maxCount,
    operationAnalysisStation: state => state.operationAnalysisStation
   
}

const mutations = {
   
    get_materiel_list (state, res) {
    	res.result.forEach(function(item){
    		item.num=""
    		item.number=""
		  	item.active=false
    	})
        state.materielList = res.result
    },
    
    get_add_materiel_list (state, res) {
    	if(res.result.page==1){
    		state.addMaterielList=res.result.data
    		return
    	}
        state.addMaterielList = state.addMaterielList.concat(res.result.data) 
    },
    
    get_feed_detail (state, res) {
    	res.result.list.forEach(function(item){
    		if(item.amount>0){
    			item.active=true
    			item.num=item.amount+item.unitName
    		}else{
    			item.active=false
    			item.num=''
    		}
    	})
    	state.feedDetail = res.result
    	state.selectedStation.id=res.result.stationId
    	state.selectedStation.value=res.result.stationName
    		
    },
    
    get_station_list (state, res) {
        state.stationList = res.result
        state.site_list[0].values = res.result.all
    },
    
    //保存选择的站点
    save_station (state, station) {
    	if(station){
    		state.selectedStation = station
    	}else{
    		state.selectedStation = {
		    	id: undefined,
		    	value: undefined
		    }
    	}
        
    },
    
    get_materiel_amount (state, res) {
        state.materielAmount = res.result.materiel
        state.materielAmountList = res.result.station
    },
    
    get_materiel_amount_list (state, res) {
        state.materielAmountList = res.result
    },
    
    get_clean_position_list (state, res) {
    	res.result.list.forEach(function(item){
    		item.label=item.value
    		item.value=item.id
    	})
        state.cleanPositionList = res.result.list
    },
    
    get_clean_list (state, res) {
    	if(res.result.page==1){
    		state.cleanList=res.result.data
    		return
    	}
        state.cleanList = state.cleanList.concat(res.result.data) 
    },
    
    get_clean_detail (state, res) {
    	res.result.list.forEach(function(item){
    		item.label=item.name
    		item.value=item.id
    		if(res.result.flag==0){
    			item.disabled=true
    		}
    	})
    	state.cleanDetail = res.result  	
    	state.selectedStation.id=res.result.stationId
    	state.selectedStation.value=res.result.stationName
    		
    },
    
    get_repair_kind_list (state, res) {
    	res.result.list.forEach(function(item){
    		item.label=item.value
    		item.value=item.id
    	})
    	res.result.caseList.forEach(function(item){
    		item.label=item.value
    		item.value=item.id
    	})
    	state.repairKindList = res.result
    },
    
    get_repair_list (state, res) {
    	if(res.result.page==1){
    		state.repairList=res.result.data
    		return
    	}
        state.repairList = state.repairList.concat(res.result.data) 
    },
    
    get_repair_detail (state, res) {
    	res.result.list.forEach(function(item){
    		item.label=item.name
    		item.value=item.id
    		if(res.result.flag==0){
    			item.disabled=true
    		}
    	})
    	res.result.caseList.forEach(function(item){
    		item.label=item.name
    		item.value=item.id
    		if(res.result.flag==0){
    			item.disabled=true
    		}
    	})
    	state.repairDetail = res.result
    	state.selectedStation.id=res.result.stationId
    	state.selectedStation.value=res.result.stationName
    		
    },
    
    get_operation_analysis (state, res) {
    	state.operationAnalysis = res.result.list
    	state.operationAnalysisList = res.result.stationList
    	res.result.list.forEach(function(item){
    		if(item.count>state.maxCount){
    			state.maxCount=item.count
    		}
    	})
    },
    
    get_operation_analysis_list (state, res) {
    	state.operationAnalysisList = res.result
    },
    
    get_operation_analysis_station (state, res) {
    	if(res.result.page==1){
    		state.operationAnalysisStation=res.result.data
    		return
    	}
        state.operationAnalysisStation = state.operationAnalysisStation.concat(res.result.data) 
    },
    
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