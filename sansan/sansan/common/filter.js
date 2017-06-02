angular.module('app.filter',[]).filter('replaceImgURL',function(){
	return function(content,w,h){
		//url : http://p0.meituan.net/w.h/movie/ed202215e4703a23caaf216f499a2e5f810517.jpg
		//console.log(content);
		//w.h ---> 300.300
//		console.log(content);
		if(content) {
			
			var wh = w + '.' + h;
			
			if(w === undefined || h === undefined) {
				wh = "";
			}
			
			var s = content.replace(/w.h/g,wh);
			
			// console.log(s);
			
			return s;
//			return content.replace('/w.h/g','300.300');
		}
		
	}
})
.filter('cutMovie',function(){
	
	return function(input,type,isFirst){
		var out = [];
		
//		console.log(cIndex);
//		console.log(type);
		
		if(isFirst){
			angular.forEach(input,function(cut){
				out.push(cut);
			})
		}else{
			angular.forEach(input,function(cut){	
			   	console.log(cut);
			   	if(type.t == "全部"){
			   		out.push(cut);
			   		
			   	}else if(cut.cat.indexOf(type.t)>0){  
		    		out.push(cut);              
//		    		console.log(out);           
		    	}
		  
			})
		}
//		isFirst = 0;
		return out;
		
	}
});