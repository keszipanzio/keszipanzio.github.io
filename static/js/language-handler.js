function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(function() {
	var currentUrl = new URL(window.location.href);
	//var lang = currentUrl.searchParams.get("lang");
	var lang = getParameterByName("lang", null);
	if (lang)
	{
		$("[name='nyelv']").val(lang);
		if (lang==='en')
		{
			//$('.en').show();
			//$("[data-lang='hu']").remove();
			$("[data-lang='en']").show();
		}
		else if(lang==='de')
		{
			//$('.de').show();
			$("[data-lang='de']").show();
		}
		else if(lang==='it')
		{
			//$('.it').show();
			$("[data-lang='it']").show();
		}
	}
	else
	{
		//$('.hu').show();
		$("[data-lang='hu']").show();
	}
});
