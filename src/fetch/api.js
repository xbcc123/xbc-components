//import axios from 'axios'
//import qs from 'qs'
//import { Toast } from 'mint-ui'
//import * as _ from '@/fetch/tool.js'
//import store from '@/vuex/store.js'


//var access_token=_.GetQueryString('access_token');
//
//if(!(access_token==null||access_token==undefined)){
//	localStorage.setItem('access_token', access_token)
//}else{
//	access_token=localStorage.getItem('access_token')
//}
//
////var access_token='e3f7ad45e0769e7f469ef1f60d7d6f75'
//
////var access_token='661a1896e03980842cb628600de7a09d'
////var access_token='adef8afeaece823b4b4d265a63b5e805'
////var access_token='cfbba7b359d8f21880b6098989d24988'
////var access_token='ea282bd48a77f2814fda3e09dd18d703'
////var access_token='0aa1b86810770c0d8e1794f864df2046'
//
//
//
//
//
//// axios 配置
//axios.defaults.timeout = 15000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
////axios.defaults.baseURL = 'http://121.41.101.63:8088/yadu-api';
////axios.defaults.baseURL = 'http://116.62.201.22:8080/yadu-api'
//axios.defaults.baseURL = 'http://116.62.142.126:8088/yadu-api'
//						
//
////POST传参序列化
//axios.interceptors.request.use((config) => {
//  return config;
//},(error) =>{
//  
//  return Promise.reject(error);
//});
//
//////返回状态判断
////axios.interceptors.response.use((res) =>{
////  if(!(res.data.err_code==0)){
////      return Promise.reject(res);
////  }
////  return res;
////}, (error) => {
////  return Promise.reject(error);
////});
//
//export function fetchPost(url, params) {
//  return new Promise((resolve, reject) => {
//      axios.post(url, params)
//          .then(response => {
//          	if(response.data.err_code==0){
//          		resolve(response.data);
//          	}else if(response.data.err_code==20001||response.data.err_code==20002||response.data.err_code==20003){
////          		console.log('token失效')
//          		Toast({
//					  message: '登录失败，请重新登录',
//					  position: 'bottom',
//					  duration: 3000
//					});
//					window.location.href="yd://yadu.ydd100.cn?page=login"
//					window.webkit.messageHandlers.Redirect.postMessage("yd://yadu.ydd100.cn?page=login")
//          	}else{
//          		reject(response)
//          		Toast({
//					  message: response.data.err_msg,
//					  position: 'bottom',
//					  duration: 3000
//					});
//          	}
//              
//          })
//          .catch((error) => {
//             reject(error)
//             Toast({
//				  message: '网络错误',
//				  position: 'bottom',
//				  duration: 3000
//				});
//          })
//  })
//}
//export function fetchGet(url, params) {
//  return new Promise((resolve, reject) => {
//      axios.get(url, params)
//          .then(response => {
//          	if(response.data.err_code==0){
//          		resolve(response.data);
//          	}else if(response.data.err_code==20001||response.data.err_code==20002||response.data.err_code==20003){
//          		reject(response)
//          		Toast({
//					  message: '登录失败，请重新登录',
//					  position: 'bottom',
//					  duration: 3000
//					});
//					window.location.href="yd://yadu.ydd100.cn?page=login"
//					window.webkit.messageHandlers.Redirect.postMessage("yd://yadu.ydd100.cn?page=login")
//          	}else{
//          		reject(response)
//          		Toast({
//					  message: response.data.err_msg,
//					  position: 'bottom',
//					  duration: 3000
//					});
//          	}
//              
//          })
//          .catch((error) => {
//             reject(error)
//             Toast({
//				  message: '网络错误',
//				  position: 'bottom',
//				  duration: 3000
//				});
//          })
//  })
//}
//export default {
//	
//	//0584dc8373bfc780cdb4cf02e2f477f8
//	
//	//订单列表
//	getOrderRecord(params) {
//      return fetchGet('/order/list?access_token='+access_token,params)
//  },
//	
//	
//	//运营商下拉
//	getOperator() {
//      return fetchGet('/select/getOperator?access_token='+access_token)
//  },
//  
//  
//  //责任人下拉
//  getWorker(params) {
//      return fetchGet('select/getWorker?access_token='+access_token,params)
//  },
//  
//  
//  //获取设备列表
//  getDeviceList(params) {
//      return fetchGet('device/getList?access_token='+access_token,params)
//  },
//  
//  
//  //获取设备详情
//  getDeviceDetail(params) {
//      return fetchGet('device/detail?access_token='+access_token,params)
//  },
//  
//  //获取设备预警列表
//  getMonitorList(params) {
//      return fetchGet('device/getWarning?access_token='+access_token,params)
//  },
//  
//  //获取设备预警详情
//  getMonitorDetail(params) {
//      return fetchGet('device/warningDetail?access_token='+access_token,params)
//  },
//  
//  
//  //远程控制
//  remoteOperate(params) {
//      return fetchPost('device/remote?access_token='+access_token,params)
//  },
//  
//  
//  //获取片区信息
//  getAreasInfo() {
//      return fetchGet('user/area?access_token='+access_token)
//  },
//  
//  
//  //获取物料列表
//  getMaterielList() {
//      return fetchGet('materiel/list?access_token='+access_token)
//  },
//  
//  
//  //获取站点列表
//  getStationList(params) {
//      return fetchGet('station/list?access_token='+access_token,params)
//  },
//  
//  //获取加料记录列表
//  getAddMaterielList(params) {
//      return fetchGet('operation/materielList?access_token='+access_token,params)
//  },
//  
//  //获取加料详情
//  getMaterielDetail(params) {
//      return fetchGet('operation/materielDetail?access_token='+access_token,params)
//  },
//  
//  
//  //添加物料
//  addMateriel(params) {
//      return fetchPost('materiel/add?access_token='+access_token,params)
//  },
//  
//  
//   //获取物料使用量
//  getMaterielAmount(params) {
//      return fetchGet('materiel/analysis?access_token='+access_token,params)
//  },
//  
//   //获取各站点物料使用列表
//  getMaterielAmountList(params) {
//      return fetchGet('materiel/analysisBystation?access_token='+access_token,params)
//  },
//  
//   //获取清洁部位列表
//  getCleanPositionList() {
//      return fetchGet('device/cleanList?access_token='+access_token)
//  },
//  
//  //添加清洁记录
//  addClean(params) {
//      return fetchPost('device/cleanAdd?access_token='+access_token,params)
//  },
//  
//   //获取清洁记录列表
//  getCleanList(params) {
//      return fetchGet('operation/cleanList?access_token='+access_token,params)
//  },
//  
//  //获取清洁详情
//  getCleanDetail(params) {
//      return fetchGet('operation/cleanDetail?access_token='+access_token,params)
//  },
//  
//  
//  //获取维修部位列表
//  getRepairKindList() {
//      return fetchGet('device/repairList?access_token='+access_token)
//  },
//  
//  //添加维修记录
//  addRepair(params) {
//      return fetchPost('device/repairAdd?access_token='+access_token,params)
//  },
//  
//   //获取维修记录列表
//  getRepairList(params) {
//      return fetchGet('operation/repairList?access_token='+access_token,params)
//  },
//  
//   //获取维修记录详情
//  getRepairDetail(params) {
//      return fetchGet('operation/repairDetail?access_token='+access_token,params)
//  },
//  
//  
//  //产品下拉
//  getGoodsList() {
//      return fetchGet('select/getGoods?access_token='+access_token)
//  },
//  
//  
//  //支付方式下拉
//  getPayWay() {
//      return fetchGet('select/getPayWay?access_token='+access_token)
//  },
//  
//  
//  //消费概览列表
//  getConsumeList(params) {
//      return fetchGet('order/consumeList?access_token='+access_token,params)
//  },
//  
//  //消费概览详情
//  getConsumeDetail(params) {
//      return fetchGet('order/stationDetail?access_token='+access_token,params)
//  },
//  
//  //营收报表列表
//  getRevenueList(params) {
//      return fetchGet('order/revenueList?access_token='+access_token,params)
//  },
//  
//  //营收报表整体分析
//  getRevenueReport(params) {
//      return fetchGet('order/revenueReport?access_token='+access_token,params)
//  },
//  
//  
//  //运维用户
//  getOperatorList(params) {
//      return fetchGet('user/operation?access_token='+access_token,params)
//  },
//  
//  
//  
//  
//   // 获取订单列表
//  getOrderList(params) {
//      return fetchGet('workerOrder/list?access_token=' + access_token, params)
//  },
//
//  // 派单详情
//  getOrderDetails(params) {
//      return fetchGet('workerOrder/detail?access_token=' + access_token, params)
//  },
//
//  // 接单
//  getWokerOrder(params) {
//      return fetchPost('workerOrder/take?access_token=' + access_token, params)
//  },
//  
//  // 确认订单处理完成
//  getFinishOrder(params) {
//      return fetchPost('workerOrder/orderFinish?access_token=' + access_token, params)
//  },
//  
//  //运维分析初始页
//  getOperationAnalysis(params) {
//      return fetchGet('operation/analysis?access_token='+access_token,params)
//  },
//  
//  //运维分析选择类型查看
//  getOperationAnalysisType(params) {
//      return fetchGet('operation/analysisType?access_token='+access_token,params)
//  },
//  
//  //运维分析站点查看
//  getOperationAnalysisStation(params) {
//      return fetchGet('operation/analysisStation?access_token='+access_token,params)
//  },
//
//}
