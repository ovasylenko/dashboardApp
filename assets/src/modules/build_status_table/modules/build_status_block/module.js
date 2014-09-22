angular.module('dashboardApp.buildStatusBlock',[])
	.directive('buildStatusBlock',['state__build_sub_codes',function(codes){
		var getCode = function(codeId){
			var element = _.find(codes, function(item){
				return item.code==codeId;
			});

			return element;
		};

		return {
		scope: {
			code: '=',
			percents:'='
		},
		templateUrl: 'build_status_table/modules/build_status_block/status.tpl.html',
		replace: true,
		restrict: 'E',
		link: function($scope) {
		var code =	getCode($scope.code);
			$scope.itemWidth = (code.isDone?100:$scope.percents)+'%';
		  	$scope.itemClass = code.class;
		}
	}
}]);