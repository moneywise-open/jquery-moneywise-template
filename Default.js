$(function ()
{
	// Example data https://www.w3schools.com/js/js_json_arrays.asp
	var data = 
	{
		"name":"John",
		"age":30,
		"cars": 
		[
			{ "carid": 1, "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
			{ "carid": 2, "name":"BMW",  "models":[ "320", "X3", "X5" ] },
			{ "carid": 3, "name":"Fiat", "models":[ "500", "Panda" ] }
		]
	};
	
	$("#OutputId").Template("#TemplateId", data, false);
});
