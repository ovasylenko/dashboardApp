angular.module('dashboardApp.buildStatusDetailsResult',[])
	.directive('buildStatusDetailsResult',['states_dictionary',function(states){
		var getCode = function(codeId,typeId){
			var element = _.find(states[typeId], function(item){
				return item.id==codeId;
			});

			return element;
		};

		return {
			scope: {
				code: '=',
				status:'=',
				type:'=',
				message: '=',
				deploy:'='
			},
			templateUrl: 'build_status_table/modules/build_status_details/result/result.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
				$scope.code=getCode($scope.code,$scope.type);
			}
		}
	}]);