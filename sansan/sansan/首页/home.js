
(function(){

    var home = angular.module('app.home',[]);

    home.controller('homeController',function($scope,$http){
        $('#myCarousel').carousel({
            //自动3秒播放
            interval : 3000
        });

        $http.get("json/coming.json").success(function (jsonData) {
            console.log(jsonData);
            $scope.data = jsonData;
            $scope.comingdata = jsonData.subjects;
        });

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

})();

/**
 * Created by ASUS on 2017/4/3.
 */
