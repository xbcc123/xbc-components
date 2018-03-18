<template>
	<div class="fullDiv">
        <mt-loadmore 
       	    :top-method="loadTop"  
        	:bottom-method="loadBottom" 
        	:bottom-all-loaded="allLoaded" 
            :bottomAllLoaded="false"
        	:auto-fill="false" 
        	ref="loadmore">
            <ul >
                <li class="item" v-for="item in list">{{item}}</li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>

export default {
	data(){
 		return {
             allLoaded: false,
             list:[]
        }
		},
		mounted(){
			this.top = 1;
  			this.bottom = 20;
            for(let i = 0; i< 20; i++){
                this.list.push(i)
            }
		},
		methods:{
			loadTop() {
				this.list = []
                for (let i = 0; i < 20; i++) {
		            this.list.push(i)
		        }
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {
				for (let i = this.bottom; i < this.bottom + 10; i++) {
		            this.list.push(i)
		        }
				this.bottom = this.bottom + 10
                this.$refs.loadmore.onBottomLoaded();
            },
		}
}
</script>
<style lang="scss" scoped>
	.fullDiv{
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 1rem;
		overflow-x: auto;
	}
	.item{
		text-align: center;
		padding: 0.2rem 0;
		background: #ddd;
	}
	.item:nth-child(odd){
		background: #fff;
	}
</style>

