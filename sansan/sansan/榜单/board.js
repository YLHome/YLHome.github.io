/**
 * Created by ASUS on 2017/4/3.
 */

(function(){

    var board = angular.module('app.list',[]);

    board.controller('ListController',function($scope,$http){
        // $http.jsonp("http://api.maoyan.com/mmdb/movie/v3/list/hot.json").success(function (res) {
        //     console.log(res.data.hot);
        // });

        $http.get("json/board.json").success(function (jsondata) {

            $scope.boarddata = jsondata.data.hot;
            console.log(jsondata.data);
        });
        //请求类型数据
        // $http.get('json/classes.json').success(function(jsondata){
        //     $scope.types = jsondata.types;
        //     $scope.countrys = jsondata.countrys;
        //     $scope.years = jsondata.years;
        // });

//         var appURL = URLConfig.appURL;
//
//         //请求的URL接口：https://api.douban.com/v2/movie/in_theaters?count=30&start=0
//
//         //电影类型
//         var type = "in_theaters";
//
//         //第几页
//         var start = $routeParams.page || 0;
//
//         //一页的数量
//         var count = URLConfig.page_size;
//
//         //拼接URL
//         var url = appURL + type + '?count=' + count + '&start=' + start + '&callback=movielistCallback';
//         console.log(url);
//         $http.jsonp(url);
//
//         //正在加载，显示模态提示
//         this.loading = true;
//         var that = this;
//         console.log(11);
//         window.movielistCallback = function(jsonData){
//             console.log(jsonData);
//
// //		$scope.title = jsonData.title;
// //		$scope.total = jsonData.total;
// //		$scope.movies = jsonData.subjects;
//
//             that.title = jsonData.title;
//             that.total = jsonData.total;
//             that.movies = jsonData.subjects;
//
//             //加载完成,隐藏模态提示
//             that.loading = false;
//         }
//
//         $scope.nextPage = function(isNext){
//
//             //根据start计算出当前的页数
//             var currentPage = start/20;
//             isNext?currentPage++:currentPage--;
//
//             if(currentPage*20 > that.total || currentPage*20 < 0) {
//                 return;
//             }
//
//             //updateParams : 更新URL中的参数，刷新页面
//             $route.updateParams({
//                 page : 20*currentPage
//             });
//         }

    });


})();