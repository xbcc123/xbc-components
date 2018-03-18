<template>
	<div class="fullDiv">
		<mt-search
        v-model="value1"
        cancel-text="取消"
        placeholder="搜索">
    </mt-search>	
		<br>
		<br>
		<br>
		<mt-switch v-model="value">
				开关
		</mt-switch>
		<p>{{value}}</p>
			<!-- indicator	 -->
		<mt-button type="default" @click.native="showLoading" plain>loading</mt-button>
			
	</div>
	 
	
</template>

<script>
import Vue from 'vue';
export default {
	
	data(){
 		return {
 			value:true,
 			value1: ''
 		}
    
	},
	
	methods: {
	  goSearch(){
			this.$router.push({path:'/search'})
		},
		goLoadMore(){
			this.$router.push({path:'/loadmore'})
		},
		showLoading(){
			let self = this
			self.$indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			})	
			setTimeout(
				function(){
					self.$indicator.close()
				},2000
			)
		}		
	}
 
}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		height: 3.4rem;
	}
	.pop-select{
		width: 100%;
	}
	.operate-btn{
		width: 100%;
		height: 100%;
		display: flex;
		padding: 0 0.3rem;
		line-height: 0.9rem;
	}
	.operate-btn>span{
		flex: 1;
	}
</style>

