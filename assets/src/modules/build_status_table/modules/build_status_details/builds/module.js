angular.module('dashboardApp.buildStatusDetailsBuilds',[])
	.directive('buildStatusDetailsBuilds',['state__build_sub_codes',function(codes){
		var getCode = function(codeId){
			var element = _.find(codes, function(item){
				return item.code==codeId;
			});

			return element;
		};


		return {
			scope: {
				builds: '='
			},
			templateUrl: 'build_status_table/modules/build_status_details/builds/builds.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
				$scope.code=getCode($scope.builds.code);
				$scope.getCode=getCode;
			}
		}
	}]);