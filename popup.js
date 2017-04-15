window.onload = function() {
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://status.mojang.com/check', false ); // false for synchronous request
    xmlHttp.send( null );
		return console.log(xmlHttp.responseText);
}
