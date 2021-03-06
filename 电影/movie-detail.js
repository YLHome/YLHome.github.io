/*
 * 电影详情
 */

angular.module('app.movie.detail',[])
.controller('MovieDetailController',function($scope,$http,$rootScope,$stateParams){
	
	var movieId = $stateParams.movieId;
	console.log(movieId);
	
	//电影详情
	$http.get('json/movie-detail.json').success(function(responeData){
//		console.log('电影详情：' + responeData);
//		console.log(responeData);
		$scope.movie = responeData.data.movie;
	});
	
	//相关电影
	$http.get('json/related-movie.json').success(function(responeData){
//		console.log(responeData);
		$scope.relatedMovies = responeData.data.shift().items;
		console.log($scope.relatedMovies);
	});
	
	//相关新闻
	$http.get('json/related-news.json').success(function(responeData){
//		console.log(responeData);
		$scope.news = responeData.data.newsList;
	});
	
	//评论
	$http.get('json/comment.json').success(function(responeData){
//		console.log(responeData);
		$scope.cmts = responeData.cmts;
	});

	//演职人员
	$http.get('json/actors.json').success(function(responeData){
//		console.log(responeData);
		$scope.actorlist = responeData.data;
	});
	
	//图集
	$http.get('json/photos.json').success(function(responeData){
//		console.log(responeData);
		$scope.photos = responeData.data.photos;
	});

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
	
	
});
