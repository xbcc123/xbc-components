<template>
  <label class="mint-switch">
    <input class="mint-switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="mint-switch-core"></span>
    <div class="mint-switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'mt-switch',

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style lang="scss">
  @import "../../../packagesTool/style/var.scss";

    .mint-switch {
      display: flex;
      align-items: center;
      position: relative;

      * {
        pointer-events: none;
      }

      .mint-switch-label {
        margin-left: 0.2rem;
        display: inline-block;

        &:empty {
          margin-left: 0;
        }
      }

      .mint-switch-core {
        display: inline-block;
        position: relative;
        @include tapSize(1.04rem,0.64rem);
        border: 1px solid $color-grey;
        border-radius: 0.4rem;
        box-sizing: border-box;
        background: $color-grey;
        &::after, &::before {
          content: " ";
          position: absolute;
          top:0;
          left: 0;
          transition:transform .3s;
          border-radius: 0.6rem;
        }
        &::after {
          @include tapSize(0.6rem,0.6rem);
          background-color: $switch-dir-color;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        }
        &::before {
          @include tapSize(1rem,0.6rem);
          background-color: #fdfdfd;
        }
      }
      .mint-switch-input {
        display: none;
        &:checked {
          +.mint-switch-core {
            border-color: $switch-color;
            background-color: $switch-color;
            &::before {
              transform: scale(0);
            }
            &::after {
              transform: translateX(0.4rem);
            }
          }
        }
      }
    }
</style>
