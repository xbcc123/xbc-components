<template>
  <mt-popup v-model="visible" position="bottom" class="mint-datetime">
    <mt-picker
      :slots="selectSlots"
      @change="onChange"
      :visible-item-count="visibleItemCount"
      class="mint-datetime-picker"
      ref="picker"
      show-toolbar>
      <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false;$emit('cancel')">{{ cancelText }}</span>
      <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<style lang="css">
  @import "../../../packagesTool/style/var.scss";
	.mint-datetime{
		width: 100%;
	  .picker-slot-wrapper, .picker-item {
	    backface-visibility: hidden;
	  }
	  .picker-toolbar {
	    border-bottom: solid 1px #eaeaea;
	  }
	}
	.mint-datetime-action{
		display: inline-block;
    width: 50%;
    line-height: 0.8rem;
    font-size: 0.32rem;
    color: $color-blue;
	}
	.mint-datetime-cancel {
    float: left;
  }

  .mint-datetime-confirm {
    float: right;
  }
</style>

<script type="text/babel">
  import picker from '../../picker/index.js';
  import popup from '../../popup/index.js';

  export default {
    name: 'mt-select-picker',

    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      selectSlots: {
        type: Array
      },
      visibleItemCount: {
        type: Number,
        default: 5
      },
    },

    data() {
      return {
        visible: false,
      };
    },

    components: {
      'mt-picker': picker,
      'mt-popup': popup
    },

    methods: {
      open() {
        this.visible = true;
      },

      close() {
        this.visible = false;
      },

      
      onChange(picker, values) {
        this.$emit('change', picker, values);
      },

      confirm() {
        this.visible = false;
        this.$emit('confirm');
      }
    }
  };
</script>
