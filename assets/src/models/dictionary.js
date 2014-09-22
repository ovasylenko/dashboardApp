angular.module('dashboardApp.dictionary', []).
		value("states_dictionary",
	[
		[
			{
				id:400,
				label:'Rejected',
				class:'row_rejected',
				imageClass:'firewall fail',
				resultText:'Change rejected'
			},
			{
				id:100,
				label:'Accepted',
				class:'row_completed',
				imageClass:'firewall ok'				,
				resultText:'Change accepted'
			}

		],
		[
			{
				id:0,
				type:0,
				label:'Pending',
				class:'row_disabled',
				imageClass:'build pending'
			},
			{
				id:100,
				label:'Complete',
				class:'row_completed',
				imageClass:'build completed',
				resultText:'Change complete'
			},
			{
				id:200,
				label:'Running',
				class:'row_running',
				imageClass:'build running',
				resultText:'Change running'
			},
			{
				id:400,
				label:'Rejected',
				class:'row_rejected',
				imageClass:'build rejected',
				resultText:'Change rejected'
			}
	]
	]).
		value("state__build_sub_codes",[{
			code:0,
			state:'wait',
			isDone: false,
			class: 'pending'
		},{
			code:1,
			state:'run',
			isDone: false,
			class: 'running'
		},{
			code:-1,
			state:'fail',
			isDone: true,
			class: 'fail'
		},{
			code:2,
			state:'ok',
			isDone: true,
			class: 'ok'
		}]);