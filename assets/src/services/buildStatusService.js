//ToDo: requireJs add
'use strict';
angular.module('dashboardApp.services',[])
	.constant('GET_STATUSES_URL','/api/build/status/all')
	.factory('buildStatusService',['GET_STATUSES_URL','$http',function(url, $http){

		var process ={
			parse:function(collection){
				_.forEach(collection.data,function(item){
					if (item.time.start)
						item.time.start=new Date(item.time.start);

					if (item.time.end)
						item.time.end=new Date(item.time.end);

					if (item.state.build && item.state.build.buildTime)
						item.state.build.buildTime=new Date(item.state.build.buildTime);
				});

				collection.dateStamp= new Date(collection.dateStamp);

				return collection;
			},
			appendViewData:function(collection){

				_.forEach(collection.data,function(item,index) {
					item.viewData = {};
					item.viewData.expand=function(isAllowedToExapnd){
						var _id = item.id;

						_.forEach(collection.data,function(subitem,subindex) {
							if (subitem.id === _id &&
								index === subindex &&
								!subitem.viewData.isExpanded &&
								isAllowedToExapnd) {

								subitem.viewData.isExpanded = true;

							} else {

							   subitem.viewData.isExpanded = false;

							}
						})
					}
				});

				return collection;
			}
		}



		return {
			process:function(data){
				var result = process.parse(data);
				result = process.appendViewData(data);

				return result;
			},
			get:function(callback){
				 return	$http({
					 method: 'GET',
					 url: url
				 }).
						then(function(res) {
							 var result = process.parse(res.data);
						     result = process.appendViewData(res.data);

							return result;
						});
				}
		};
}])
;