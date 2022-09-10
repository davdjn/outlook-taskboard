var tbConfig = angular.module('taskboardApp.config', []);

var config_data = {

  'GENERAL_CONFIG': {

  	// Outlook Task folders
    // Name: Name of the task folder
    // Title: Task lane title
    // Limit: hard limits for each task lane. 0 = no limit
    // Sort: Sort order for tasks (default = priority), can state multiple sort keys separated by comma, use '-' to sort descending, Example "duedate,-priority,subject"
    // Restrict: Restrict certain tasks (default = only show incomplete tasks) (More info = https://msdn.microsoft.com/en-us/library/office/ff869597.aspx)
    // Owner: If the task folder is shared by someone else, enter the name of the owner. (i.e. Evren Varol)
    'REQUESTS_FOLDER': 		{ Name: 'RequestsInfo', Title: 'INFO / REQUESTS', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' },
    'EMAILS_FOLDER': 		{ Name: 'OpenEmails', Title: 'EMAILS / FOLLOW-UPS', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' },
    'TASKS_FOLDER':       { Name: 'OpenTasks', Title: 'OPEN TASKS', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' },
    'WAITING_FOLDER': 		{ Name: 'Waiting', Title: 'WAITING / BLOCKED', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' },
    'BACKLOG_FOLDER': 			{ Name: '', Title: 'BACKLOG', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: ''},
    'INPROGRESS_FOLDER': 	{ Name: 'InProgress', Title: 'IN PROGRESS', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' }, 
    'NEXT_FOLDER': 	{ Name: 'ToDo', Title: 'TO DO', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: ''},
    'COMPLETED_FOLDER':     { Name: 'Completed', Title: 'COMPLETED', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: '' },

    // Task Note Excerpt Size
    // number of chars for each task note
    // 0 = makes no notes appear on the each task card
    'TASKNOTE_EXCERPT':		100,

    // Default task template
    'TASK_TEMPLATE':        ''

  }
};

angular.forEach(config_data,function(key,value) {
		tbConfig.constant(value,key);
});

