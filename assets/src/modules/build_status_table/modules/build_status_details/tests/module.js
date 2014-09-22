angular.module('dashboardApp.buildStatusDetailsTests',['nvd3ChartDirectives'])
	.directive('buildStatusDetailsTests',['state__build_sub_codes',function(codes){
		var getCode = function(codeId){
			var element = _.find(codes, function(item){
				return item.code==codeId;
			});

			return element;
		};

		var getPercent= function(passed, failed) {
			var total= passed+ failed;
			var ratio = passed/total;

			return Math.floor(ratio *100);
		};


		var formatHex = function(num){
			return ("0"+num).slice(-2);
		};

		var getColor= function(percent){
			var	R=Math.floor((255*(100-percent))/100);
			var G=Math.floor((255*(percent))/100);
			var B=0;
			return '#'+formatHex(R.toString(16)) + formatHex(G.toString(16))  + formatHex(B.toString(16));

		}

		return {
			scope: {
				tests: '=',
				title: '='
			},
			templateUrl: 'build_status_table/modules/build_status_details/tests/tests.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
				$scope.code=getCode($scope.tests.code);
				$scope.data = [ $scope.tests.results.passed,$scope.tests.results.failed];
				$scope.percent= Math.floor(getPercent( $scope.tests.results.passed,$scope.tests.results.failed));
				$scope.gradientColor = getColor(	$scope.percent);
				$scope.xFunction = function(d){
					return function(d) {
						return d;
					};
				}

				var colorArray = [ '#70AD47', '#ED7D31'];
				$scope.colorFunction = function() {
					return function (d, i) {
						return colorArray[i];
					};
				}



			}
		}
	}]);