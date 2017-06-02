
(function(){
	
var movie = angular.module('app.movie',[]);

movie.controller('movieController',function($scope,$http){
	$scope.cIndex = 1;
	$scope.$this;	
	//监听页面的的切换，切换时selectIndex会修改
	$scope.$watch('selectIndex',function(newVal){
		
		var url;
		if(newVal == 0) {
			url = "json/list-1.json";
		}else if(newVal == 1) {
			url = "json/list-2.json";
		}else if(newVal == 2) {
			url = "json/list-3.json";
		}
		
		//发送请求
		$http.get(url).success(function(responeData){
			//console.log(responeData);
			$scope.movies = responeData.data.movies;
		});
	});

	//$scope.$on('事件名')
	
	$scope.getBigRating = function(sc){ //sc 9.2 ： 评分
		if(sc == 0) {
			return "暂无评分";
		}
		//'9.2'
		sc = sc.toString();
		var arr = sc.split('.');  //['9','2']
		return arr[0] + '.';	
	}
	
	$scope.getSmallRating = function(sc){  //8
		if(sc == 0){
			return "";
		}

		sc = sc.toString();
		var arr = sc.split('.');  //['9','2']
		
//			console.log(arr[1]);
		if(arr[1] === undefined){
			return 0;
		}
		return arr[1];
	}	
	
	
	//请求类型数据
	$http.get('json/classes.json').success(function(jsondata){
		$scope.types = jsondata.types;
		$scope.countrys = jsondata.countrys;
		$scope.years = jsondata.years;
	});
	
	
	//选择
	$scope.selected = function(index,i){
		$scope['selectIndex'+i] = index;
	}
	
	$scope.clickCut = function(){
		$scope.$this = this;
		$scope.cIndex = 0;
//		console.log($scope.$this);
//		return $scope.$this;
	}
	
});	
	
	
})();

