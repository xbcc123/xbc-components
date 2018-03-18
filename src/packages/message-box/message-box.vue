<template>
  <div class="mint-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="mint-msgbox" v-show="value">
        <div class="mint-msgbox-header" v-if="title !== ''">
          <div class="mint-msgbox-title">{{ title }}</div>
        </div>
        <div class="mint-msgbox-content" v-if="message !== ''">
          <div class="mint-msgbox-message" v-html="message"></div>
          <div class="mint-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="mint-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="mint-msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@import "../../packagesTool/style/var.scss";
	.mint-msgbox{
		position: fixed;
	  top: 50%;
	  left: 50%;
	  transform: translate3d(-50%, -50%, 0);
	  background-color: #fff;
	  width: 5.22rem;
	  border-radius: 0.14rem;
	  font-size: 0.3rem;
	  -webkit-user-select: none;
	  overflow: hidden;
	  backface-visibility: hidden;
	  transition: .2s;
	}
	.mint-msgbox-header{
		padding: 0.3rem 0 0;
	}
	.mint-msgbox-content {
    padding: 0.2rem 0.4rem 0.3rem;
    border-bottom: 1px solid #ddd;
    min-height: 0.72rem;
    position: relative;
  }

  .mint-msgbox-input {
    padding-top: 0.3rem;
    & input {
      border: 1px solid #dedede;
      border-radius: 0.1rem;
      padding: 0.08rem 0.1rem;
      width: 100%;
      appearance: none;
      outline: none;
    }
    & input.invalid {
      border-color: #ff4949;
      &:focus {
        border-color: #ff4949;
      }
    }
  }

  .mint-msgbox-errormsg {
    color: red;
    font-size: 0.24rem;
    min-height: 0.36rem;
    margin-top: 2px;
  }

  .mint-msgbox-title {
    text-align: center;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 0.3rem;
    font-weight: bold;
    color: #333;
  }

  .mint-msgbox-message {
    color: #999;
    margin: 0;
    text-align: center;
    line-height: 0.72rem;
  }

  .mint-msgbox-btns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  .mint-msgbox-btn {
    line-height: 0.7rem;
    display: block;
    background-color: #fff;
    flex: 1;
    margin: 0;
    border: 0;
    font-size: 0.28rem;

    &:focus {
      outline: none;
    }

    &:active {
      background-color: #fff;
    }
  }

  .mint-msgbox-cancel {
    width: 50%;
    border-right: 1px solid #ddd;
    &:active {
      color: #000;
    }
  }

  .mint-msgbox-confirm {
    color: $normalColor;
    width: 50%;
    &:active {
     color: $normalColor;
    }
  }

  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
<style src="../../packagesTool/style/popup.css"></style>

<script>
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';

  import Popup from '../../packagesTool/utils/popup/index.js';

  export default {
    mixins: [ Popup ],
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'mint-msgbox-btn mint-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' mint-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'mint-msgbox-btn mint-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' mint-msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
