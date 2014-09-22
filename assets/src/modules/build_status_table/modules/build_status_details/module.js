angular.module('dashboardApp.buildStatusDetails',
	[
		'dashboardApp.buildStatusDetailsMetrics',
		'dashboardApp.buildStatusDetailsBuilds',
		'dashboardApp.buildStatusDetailsTests',
		'dashboardApp.buildStatusDetailsResult'
	])
	.directive('buildStatusDetails',function(){

		return {
			scope: {
				state: '=',
				type:'=',
				deploy:'='
			},
			templateUrl: 'build_status_table/modules/build_status_details/details.tpl.html',
			replace: true,
			restrict: 'E',
			link: function($scope) {
			}
		}
	});