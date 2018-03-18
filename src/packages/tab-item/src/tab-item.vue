<template>
  <div class="mint-tab-item"
  	@click="tabClick"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="mint-tab-item-icon"><slot name="icon"></slot></div>
    <div class="mint-tab-item-label"><slot></slot></div>
  </div>
</template>

<script>
/**
 * mt-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mt-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mt-tab-item>
 */
export default {
  name: 'mt-tab-item',

  props: {
  	id: [String, Number],
  	link: String
  },
  methods: {
  	tabClick() {
  		this.$parent.$emit('input', this.id)
  		if(this.link) {
  			this.$router.push('/' + this.link)
  		}
  		
  	}
  }
};
</script>

<style lang="scss">
  @import "../../../packagesTool/style/var.scss";
	.mint-tab-item{
		display: block;
	  height: $footer-height;
	  flex: 1;
	  text-decoration: none;
	  padding: 0.12rem 0;
	}
	.mint-tab-item-icon{
		@include tapSize($footer-icon-width, $footer-icon-height);
    margin: 0 auto 0.1rem;
    &:empty {
      display: none;
    }

    & > * {
      display: block;
      @include tapSize;
    }
	}
	.mint-tab-item-label{
		color: inherit;
    font-size: $normal-font;
    line-height: 1;
	}
</style>
