<template>
  <div class="mint-search">
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mint-searchbar-core">
      </div>
      <a
        class="mint-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
    </div>
    <div class="mint-search-list" v-show="show || currentValue">
      <div class="mint-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from '../../cell/index.js';
// if (process.env.NODE_ENV === 'component') {
//   require('../../cell/style.css');
// }

/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mt-search :value.sync="value" :result.sync="result"></mt-search>
 * <mt-search :value.sync="value">
 *   <mt-cell v-for="item in result" :title="item"></mt-cell>
 * </mt-search>
 */
export default {
  name: 'mt-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="scss">
  @import "../../../packagesTool/style/var.scss"; 

    .mint-search {
      height: 0.94rem;
      width: 100%;
      overflow: hidden;
    }
    .mint-searchbar {
      position: relative;
      height: 100%;
      align-items: center;
      background-color: $search-bar;
      box-sizing: border-box;
      display: flex;
      padding: .16rem .16rem;
      z-index: 1;
       .mint-searchbar-inner {
        align-items: center;
        background-color: $search-inner;
        border-radius: 0.08rem;
        display: flex;
        width: 100%;
        height: 100%;
        flex: 1;
        padding: 0.1rem 0;
        padding-left: .24rem;
        .mintui-search {
          @include tapSize(0.3rem, 0.32rem);
          background: url(search-icon.png) no-repeat center;
          background-size: 100%;
        }
      }

      .mint-searchbar-core {
        padding: .06rem;
        padding-left: .2rem;
        font-size: .26rem;
        -webkit-appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        background: transparent;
      }

      .mint-searchbar-cancel {
        font-size: .26rem;
        color: $color-blue;
        margin-left: .1rem;
        text-decoration: none;
      }
    }

    .mint-search-list {
      overflow: auto;
      padding-top: .44rem;
      position: absolute 0 0 0 0;
    }
</style>
