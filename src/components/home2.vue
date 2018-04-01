<template>
	<div class="fullDiv">
		<mt-button @click.native="show = true" size="large">打开 选择框</mt-button>
		<mt-popup v-model="show" position="bottom" class="pop-select">
	     <mt-picker @cancel="show = false" @confirm="confirmOperate" :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="true"></mt-picker>
	    </mt-popup>
	    <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
	    <mt-datetime-picker
	      ref="picker2"
	      type="date"
	      v-model="value2"
	      @confirm="handleChange">
	    </mt-datetime-picker>
	    <mt-button @click.native="open('picker3')" size="large">点击弹出 select Picker</mt-button>
	    <mt-select-picker
	      ref="picker3"
	      v-model="value2"
	      :selectSlots="dateSlots"
	      @change="onDateChange"
	      @confirm="handleChange">
	    </mt-select-picker>
	    <mt-checklist
	      class="page-part"
	      align="right"
	      v-model="value3"
	      @change="changeCheck"
	      :options="options2">
	    </mt-checklist>
	    <div>
	      <mt-cell title="选中的项">{{ value3 }}</mt-cell>
	    </div>
	    <mt-radio
	      class="page-part"
	      title="第二个单选框列表"
	      v-model="value4"
	      :options="options2" />
	    <div>
	      <mt-cell title="选中的项">{{ value4 }}</mt-cell>
	    </div>
	   <div id="i_am_hash">
	    </div>	
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	
	data(){
 		return {
 			show: false,
 			value2: false,
 			dateSlots: [
	          {
	            flex: 1,
	            values: [],
	            className: 'slot1',
	            textAlign: 'right'
	          }, {
	            divider: true,
	            content: '-',
	            className: 'slot2'
	          }, {
	            flex: 1,
	            values: [],
	            className: 'slot3',
	            textAlign: 'left'
	          }
	        ],
	        options2 : [
		      {
		        label: '被禁用',
		        value: '值F',
		        disabled: true
		      },
		      {
		        label: '选中禁用',
		        value: '选中禁用的值',
		        disabled: true
		      },
		      {
		        label: '选项A',
		        value: '值A'
		      },
		      {
		        label: '选项B',
		        value: '值B'
		      }
		    ],
		    value3: [],
		    value4: ''
 		}
    
	},
	mounted() {
		this.dateSlots = [
	          {
	            flex: 1,
	            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
	            className: 'slot1',
	            textAlign: 'right'
	          }, {
	            divider: true,
	            content: '-',
	            className: 'slot2'
	          }, {
	            flex: 1,
	            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
	            className: 'slot3',
	            textAlign: 'left'
	          }
	        ]
	},
	methods: {
	  onDateChange(picker, values) {
	  	console.log(values)
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
     },
     confirmOperate() {
     	console.log('点击确定')
     	this.show = false
     },
     handleChange() {
     	console.log('点击确定')
     },
     open(picker) {
        this.$refs[picker].open();
     },
     changeCheck(data) {
     	console.log(data)
     }
	}
}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		height: 3.4rem;
	}
	.pop-select{
		width: 100%;
	}
	.operate-btn{
		width: 100%;
		height: 100%;
		display: flex;
		padding: 0 0.3rem;
		line-height: 0.9rem;
	}
	.operate-btn>span{
		flex: 1;
	}
</style>

