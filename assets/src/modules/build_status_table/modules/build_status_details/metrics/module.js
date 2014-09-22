angular.module('dashboardApp.buildStatusDetailsMetrics',[])
	.directive('buildStatusDetailsMetrics',['state__build_sub_codes',function(codes){
		var getCode = function(codeId){
			var element = _.find(codes, function(item){
				return item.code==codeId;
			});

			return element;
		};

		var getClass = function(change){
			if (!change) return 'no-change';
			if (change>0) return 'up';
			return 'down';
		};

		return {
			scope: {
				metrics: '='
			},
			templateUrl: 'build_status_table/modules/build_status_details/metrics/metrics.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
				$scope.code=getCode($scope.metrics.state.code);
				$scope.getClass=getClass;
			}
		}
	}]);