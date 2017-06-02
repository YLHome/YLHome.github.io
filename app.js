var app = angular.module('myApp',[
	'ui.router',
	'app.movie',
	'app.filter',
	'app.movie.detail',
	'app.home',
	'app.list'
]);

app.config(function($stateProvider,$urlRouterProvider){
	
	//当url为''是，则跳转到/navs
	$urlRouterProvider.when('','/navs/home');
	
	$stateProvider.state('navs',{  //导航栏页面
		url : '/navs',
		templateUrl : '导航栏.html'
		
	})

	//配置导航栏的子页面
	.state('navs.home',{
		url : '/home',
		templateUrl : '首页/首页.html'
	}).state('navs.movie',{
		url : '/movie',
		templateUrl : '电影/电影.html'		
	}).state('navs.board',{
		url : '/board',
		templateUrl : '榜单/榜单.html'		
	})
	.state('navs.moviedetail',{ 
		url : '/moviedetail/:movieId',
		templateUrl : '电影/电影详情.html'
	})
	.state('navs.moviedetail.info',{ 
		url : '/info',
		views : {
			'introduce' : {
				templateUrl : '电影/电影详情-介绍.html',
//				controller : ''
			},
			'actors' : {
				templateUrl : '电影/电影详情-演职人员.html',
			},
			'pics' : {
				templateUrl : '电影/电影详情-图集.html',
			}
		}
	});
	// //将URL的配置 定义成全局，让其他地方可以共享访问
	// app.constant('URLConfig',{
	// 	appURL : 'https://api.douban.com/v2/movie/',
	// 	page_size : 20
	// });
	
});

app.controller('NavController',function($location,$scope){
	
	function parseLocation(){
		var url = $location.url();
		
		console.log(url);
		
		if(url == '/navs/home') {
			$scope.selectIndex = 0;
		}else if(url == '/navs/movie'){
			$scope.selectIndex = 1;
		}else if(url == '/navs/board'){
			$scope.selectIndex = 2;
		}
		
		//滚动条回到起始位置
		window.scrollTo(0,0);
		
	}
	parseLocation();
	
	$scope.$on('$locationChangeStart',parseLocation);

	$scope.isLogin = false;
	$scope.isLogin = false;

	$scope.Login = function () {
		$scope.isLogin = true
	};

	$scope.Register = function () {
		$scope.isregister = true;
		$scope.isLogin = false;
	};
	$scope.reLogin = function () {
		$scope.isregister = false;
		$scope.isLogin = true;
	};
	$scope.myLogin = function () {
		$scope.isregister = false;
		$scope.isLogin = false;
	};
	$scope.myClose = function () {
		$scope.isregister = false;
		$scope.isLogin = false;
	};
		
})




