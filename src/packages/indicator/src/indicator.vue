<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
        <span class="mint-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" :style="{backgroundColor: bgColor, opacity: bgOpacity}" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style lang='scss' >
  .mint-indicator {
    transition: opacity .2s linear;
  
    .mint-indicator-wrapper {
      position: fixed ;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
      z-index: 100;
    }
  
    .mint-indicator-text {
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }

    .mint-indicator-spin {
      display: inline-block;
      text-align: center;
    }

    .mint-indicator-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      z-index: 90;
    }
  }

.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>

<script type="text/babel">
  import Spinner from '../../spinner/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('../../spinner/style.css');
  }

  export default {
    data() {
      return {
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      },
      bgColor: {
        type: String,
        default: 'transparent'
      },
      bgOpacity: {
      	type: Number,
        default: 1
      }
    }
  };
</script>
