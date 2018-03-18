<template>
  <div @change="$emit('change', currentValue)" class="mint-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="mint-checklist-title" v-text="title" v-if="title"></label>
    <x-cell v-for="(option, index) in options" :key="index">
      <label class="mint-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-checkbox">
          <input
            class="mint-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mint-checkbox-core"></span>
        </span>
        <span class="mint-checkbox-label" v-text="option.label || option"></span>
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
 * mt-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :v-model="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
export default {
  name: 'mt-checklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: { XCell },

  data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss">
  @import "../../../packagesTool/style/var.scss";
	.mint-checklist{
		.mint-cell {
	    padding: 0;
	  }
	  &.is-limit {
	    .mint-checkbox-core:not(:checked) {
	      background-color: $color-grey;
	      border-color: $color-grey;
	    }
	  }
	}
	.mint-checklist-label{
		display: block;
    padding: 0 0.2rem;
	}
	.mint-checklist-title{
		color: $checklist-title-color;
    display: block;
    font-size: 0.24rem;
    margin: 0.16rem;
	}
	.mint-checkbox{
		&.is-right {
	    float: right;
	  }
	}
	.mint-checkbox-label{
		vertical-align: middle;
    margin-left: 0.12rem;
	}
	.mint-checkbox-input{
		display: none;
		&:checked {
      + .mint-checkbox-core {
        background-color: $color-blue;
        border-color: $color-blue;

        &::after {
          border-color: $color-white;
          transform: rotate(45deg) scale(1);
        }
      }
    }

    &[disabled] + .mint-checkbox-core {
      background-color: $color-grey;
      border-color: #ccc;
    }
	}	
	.mint-checkbox-core {
    display: inline-block;
    background-color: $color-white;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    @include tapSize(0.4rem, 0.4rem);
    vertical-align: middle;

    &::after {
      border: 0.04rem solid transparent;
      border-left: 0;
      border-top: 0;
      content: " ";
      position: absolute;
      top: 0.06rem;
    	left: 0.12rem;
      @include tapSize(0.08rem, 0.16rem);
      transform: rotate(45deg) scale(0);
      transition: transform .2s;
    }
  }

</style>
