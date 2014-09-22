angular.module('dashboardApp.buildStatusRowHeader',
	[
	 'dashboardApp.buildStatusBlock',
	 'dashboardApp.buildStatusDetails'
	])
	.directive('buildStatusRowHeader',['states_dictionary','$sailsSocket',function(states,$sailsSocket){
		var getCode = function(codeId,typeId){
			var element = _.find(states[typeId], function(item){
				return item.id==codeId;
			});

			return element;
		};


		return {
			scope: {
				entry: '='
			},
			templateUrl: 'build_status_table/modules/build_status_row_header/header.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
			   $scope.code = getCode($scope.entry.state.code,$scope.entry.type);
			}
		}
	}]);