
/**
 * App通用配置
 */
const state = {
    loading: false,
    scroller_show: true
//  showToast: false,
//  leftNavStatus: false,
//  showSuccess: true,
//	showFail: false,
//  toastMsg: '操作成功',
//  alertMsg: '退出登录',
//  showAlert: false
}

const actions = {
    

    setLoadingState({ commit }, status) {
        commit('loading_status', status)
    }
    

}

const getters = {
    
//  showToast: state => state.showToast,
//  showAlert: state => state.showAlert,
    loading: state => state.loading,
    scroller_show: state => state.scroller_show
    
}


const mutations = {
    
    loading_status(state, status) {
        state.loading = status
    },
    scroller_show_status(state, status) {
        state.scroller_show = status
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}