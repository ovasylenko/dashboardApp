angular.module('dashboardApp.buildStatusTable',['dashboardApp.buildStatusRowHeader'])
	.directive('buildStatusTableDirective',['buildStatusService','$sailsSocket',function(buildStatusService,$sailsSocket){
		var messaging = {
			subscribe:function($scope){
				$sailsSocket.subscribe('new_build',function(data){
					var model=$scope.buildServerStatusesJson;
					model.data.unshift(data.build);
					model=buildStatusService.process(model);

					$scope.buildServerStatusesJson=model;
				});
			}
		};

		return {

			scope: {
				label: '@'
			},
			templateUrl: 'build_status_table/main.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
				messaging.subscribe($scope);

				buildStatusService.get().then(function(json) {
					$scope.buildServerStatusesJson = json;
				});
			}
		}
	}]);