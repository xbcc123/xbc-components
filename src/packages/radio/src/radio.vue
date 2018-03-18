<template>
  <div class="mint-radiolist" @change="$emit('change', currentValue)">
    <label class="mint-radiolist-title" v-text="title" v-if="title"></label>
    <x-cell v-for="(option, index) in options" :key="index">
      <label class="mint-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-radio">
          <input
            class="mint-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mint-radio-core"></span>
        </span>
        <span class="mint-radio-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
import XCell from '../../cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/packages/cell/style.css');
}
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'mt-radio',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },

  components: {
    XCell
  }
};
</script>

<style lang="scss">
  @import "../../../packagesTool/style/var.scss";
	.mint-radiolist{
		.mint-cell {
	    padding: 0;
	  }
	}
	.mint-radiolist-label{
		display: block;
    padding: 0 0.2rem;
	}
	.mint-radiolist-title{
		font-size: 0.24rem;
    margin: 0.16rem;
    display: block;
    color: $radio-title-color;
	}
	.mint-radio{
		&.is-right {
	    float: right;
	  }
	}
	.mint-radio-label{
		vertical-align: middle;
    margin-left: 0.12rem;
	}
	.mint-radio-input{
		display: none;
		&:checked {
      + .mint-radio-core {
        background-color: $color-blue;
        border-color: $color-blue;

        &::after {
          background-color: $color-white;
          transform: scale(1);
        }
      }
    }

    &[disabled] + .mint-radio-core {
      background-color: $color-grey;
      border-color: #ccc;
    }
	}
	.mint-radio-core {
    box-sizing: border-box;
    display: inline-block;
    background-color: $color-white;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    @include tapSize(0.4rem, 0.4rem);
    vertical-align: middle;

    &::after {
      content: " ";
      border-radius: 100%;
      position: absolute;
      top: 0.1rem;
    	left: 0.1rem;
      @include tapSize(0.16rem, 0.16rem);
      transition: transform .2s;
      transform: scale(0);
    }
  }
</style>
