// moneywise-template.js 3.0
// 
// 2016-07-18 AAB - Original
(function ($)
{
	$.fn.Template = function (templateid, data, append)
	{
		var strHtml = $(templateid).TemplateHtml(data);
		if (append)
			return $(this).append(strHtml);
		else
			return $(this).html(strHtml);
	}

	$.fn.TemplateHtml = function (data)
	{
		if (!this[0].jscache)
		{
			var html = this.html().replace(/[\t\r\n]/g, " ");
			var js = "var _='';";
			var intI, intJ = 0;
			while (intJ < html.length)
			{
				intI = html.indexOf("{{", intJ);
				if (intI < 0)
					break;
				js += "_+='" + html.substring(intJ, intI).replace(/\'/g,"\\'") + "';";
				intJ = intI + 2;
				direct = (html[intJ] == "=");
				if (direct)
					intJ++;
				intI = html.indexOf("}}", intJ);
				if (intI < 0)
					break;
				if (direct)
					js += "_+=";
				js += html.substring(intJ, intI).trim() + ";";
				intJ = intI + 2;
			}
			js += "_+='" + html.substring(intJ).replace(/\'/g,"\\'") + "'; return _;";
			this[0].jscache = new Function(js);
			this.empty();
		}
		return this[0].jscache.call(data);
	};

}(jQuery));

