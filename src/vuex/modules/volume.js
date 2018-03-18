import api from '../../fetch/api'
import * as _ from '@/fetch/tool.js'
//import echarts from '@/../static/echarts.js'


const state = {
    consumeList:{},
    consumeDetail:{},
    revenueList: {},
    revenueReport:{},
    options : {
    	color:['#852120','#b05a21','#957727','#928b27','#efea3f','#cede6a','#004226','#00a548','#9dce89','#005934','#00516e','#1bcedf','#00aceb','#7584c1','#4d98d3','#043883','#874c9a','#1f2b61','#ba0073','#f3a292','#f72222','#b21e23'],
	    series : [
	        {
	            type: 'pie',
	            radius : '65%',
            	center: ['50%', '50%'],
	            label:{
	              normal:{
	                  position:'outside',
	                  formatter:'{d}%',
	                  textStyle:{
	                  	fontSize: 14
	                  }
	              }  
	            },
	            data:[]
	                
	           
	        }
	    ]
	},
	material_list: [{
	          flex: 1,
	          defaultIndex: 0,
	          values: [
	          		{id:0,
	          		 value: '全部'
	          		}
	          ],
	          textAlign: 'center'
	        }
	    ],
	payway: [{
	          flex: 1,
	          defaultIndex : 0,
	          values: [
	          		{id:0,
	          		 value: '全部'
	          		}
	          ],
	          textAlign: 'center'
	        }
	    ]
}

const actions = {
	
//	//产品下拉
//	getGoodsList({ commit }) {
//        
//      api.getGoodsList()
//          .then(res => {
//              commit('get_goods_list', res)
//          })
//  },
//  
//  //支付方式下拉
//	getPayWay({ commit }) {
//        
//      api.getPayWay()
//          .then(res => {
//              commit('get_pay_way', res)
//          })
//  },
	
	
	//消费概览列表
	getConsumeList({ commit },params) {
         //commit('loading_status', true)  
        api.getConsumeList(params)
            .then(res => {
            	commit('scroller_show_status', false)    
            	commit('loading_status', false) 
                commit('get_consume_list', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
   	
   	//消费概览详情
	getConsumeDetail({ commit },params) {
           commit('loading_status', true)   
        api.getConsumeDetail(params)
            .then(res => {
            	commit('scroller_show_status', false)    
            	commit('loading_status', false)  
                commit('get_consume_detail', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //营收报表列表
	getRevenueList({ commit },params) {
        //commit('loading_status', true)  
        api.getRevenueList(params.params)
            .then(res => {
            	commit('scroller_show_status', false)   
            	commit('loading_status', false)
            	if(params.data){
            		commit('get_select_list', res)
            	}
                commit('get_revenue_detail', res)
            }, err => {
            	commit('loading_status', false)
            })
    },
    
    //营收报表整体分析
	getRevenueReport({ commit },params) {
          
        api.getRevenueReport(params)
            .then(res => {
                commit('get_revenue_report', res)
            })
    }
    
   
}

const getters = {
    
    consumeList: state => state.consumeList,
    consumeDetail: state => state.consumeDetail,
    revenueList: state => state.revenueList,
    revenueReport: state => state.revenueReport,
    options: state => state.options,
    material_list: state => state.material_list,
    payway: state => state.payway
}

const mutations = {
//  get_goods_list (state, res) {
//      state.material_list[0].values = res.result.list
//  },
//  
//  get_pay_way (state, res) {
//      state.payway[0].values = res.result.list
//  },
    
    get_consume_list (state, res) {
        state.consumeList = res.result
    },
    
    get_consume_detail (state, res) {
        state.consumeDetail = res.result
    },
    
    get_revenue_detail (state, res) {
        state.revenueList = res.result
    	 
    },
    
    get_select_list(state, res){
    	state.material_list[0].values=state.material_list[0].values.slice(0,1).concat(_.unique(res.result.list,'goodsName','goodsId'))
    	state.payway[0].values=state.payway[0].values.slice(0,1).concat(_.unique(res.result.list,'payType','payId'))  
    },
    
    get_revenue_report (state, res) {
        state.revenueReport = res.result
        state.options.series[0].data=[]
        res.result.list.forEach(function(item){
        	state.options.series[0].data.push(item.money)
        })
        echarts.init(document.getElementById('revenue-chart')).setOption(state.options)
        
        
    }
   
}

export default {
    state,
    actions,
    getters,
    mutations
}