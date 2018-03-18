<template>
	<div class="fullDiv">
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back" >返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-button type="default" @click="a" plain>按钮一</mt-button>
		<mt-button type="primary"  plain>按钮2</mt-button>
		<mt-button type="danger" plain>按钮3</mt-button>
		<div ref="name" @click="b">aaa</div>

		<mt-swipe :auto="4000" sizeType="large">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		<mt-cell title="原生跳转" label="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></mt-cell>
		<mt-button @click.native="openAlert" size="large">打开 alert 提示框</mt-button>
	  <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
	  <mt-button @click.native="openPrompt" size="large">打开 prompt 提示框</mt-button>
	

	</div>
	 
	
</template>

<script>
import Vue from 'vue';
export default {
		
	data(){
 		return {
 			selected: '外卖'
 		}
    
	},

	created() {
		// console.log(this.$refs)
	},
	methods: {

		a(e) {
			// console.log(e)
		this.$router.replace({ path: '/home2#i_am_hash', 
		// query: { userId: 123 }
		})	
			
		},
		b() {
			console.log(this.$refs.name.style.background = 'red')
		},

	  openAlert() {
	    Vue.$messageBox.alert('操作成功!', '提示');
	  },
	  openConfirm() {
	    this.$messageBox.confirm('确定执行此操作?', '提示');
	  },
	  openPrompt() {
	    this.$messageBox.prompt(' ', '请输入姓名').then(({ value }) => {
	      if (value) {
	        this.$messageBox.alert(`你的名字是 ${ value }`, '输入成功');
	      }
	    });
	  }
	}
 
}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		height: 3.4rem;
	}
</style>

