// Lead author : Danny Callahan

// takes a handlebars template and possibly also data and renders the template
var loadDraftPageMembers = function(template, data) {
	data = data || {};
	$('#members').html(Handlebars.templates[template](data));
};

var loadDraftPageLeagueName = function(template, data) {
	data = data || {};
	$('#title').html(Handlebars.templates[template](data));
};

// submits form to create team, then renders user's homepage on success
$(document).on('submit', '#goToDraft', function (e) {
	e.preventDefault();
	$.post(
		'/league/create',
		helpers.getFormData(this)
	).done(function (data) {
		if (data.failure) {

		}
		else {
			loadDraftPageMembers('draftLeague', { members : data.members });
			loadDraftPageLeagueName('draftLeagueTitle', { title : data.name });
		}
	});
});