angular.module('dashboardApp.filters',[])
	.filter('isStringEmpty',function(){
		return function(input){
			if(angular.isString(input) && !(angular.equals(input,null) || angular.equals(input,'')))
				return input;
			else
				return '\u00A0';
		};
	});