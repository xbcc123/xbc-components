

/** 
*   Toast公共方法
*/



export function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var param=window.location.hash.split('?')[1];
    if(!param){
    	return null
    }
    var r = window.location.hash.split('?')[1].match(reg)
    if (r != null) return unescape(r[2])
    return null
}


//获取经纬度，并保存
export function getLocation() {
    var lat=GetQueryString('lat');
    var lng=GetQueryString('lng');
    if(!(lat==null || lat==undefined)){
		localStorage.setItem('lat', lat)
		 console.log('纬度保存')
	}
    if(!(lng==null || lng==undefined)){
		localStorage.setItem('lng', lng)
		 console.log('经度保存')
	}
}


//数组产品去重
export function unique(obj,name,id) {
     var res = [];
	 var json = {};
	 for(var i = 0; i < obj.length; i++){
		 if(!json[obj[i][id]]){
		 	var item={};
		 	item.id=obj[i][id];
		 	item.value=obj[i][name];
		 	json[obj[i][id]] = 1;
		    res.push(item);
		    
		 }
	 }
	 return res;
}





