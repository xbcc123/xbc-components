<template>
	<div class="fullDiv" id="bodyDIV">
		<keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="/home" link="home">
		    <img slot="icon" src="../src/assets/image/code.png">
		    组件一
		  </mt-tab-item>
		  <mt-tab-item id="/home2" link="home2">
		    <img slot="icon" src="../src/assets/image/code.png">
		    组件二
		  </mt-tab-item>
		  <mt-tab-item id="/home3" link="home3">
		    <img slot="icon" src="../src/assets/image/code.png">
		    组件三
		  </mt-tab-item>
		  <mt-tab-item id="/home4" link="home4">
		    <img slot="icon" src="../src/assets/image/code.png">
		    组件四
		  </mt-tab-item>
		</mt-tabbar>
	</div>
		
</template>

<script>

export default {
	data () {
	    return {
	      selected: this.$route.fullPath
	    }
	},
	created() {

	}

}
</script>

<style>
			
</style>
