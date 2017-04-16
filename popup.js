window.onload = function() {
		var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://status.mojang.com/check', false ); // false for synchronous request
    xmlHttp.send( null );
		var returnCodeJSON = JSON.parse(xmlHttp.responseText);
		var spanArray = [];
		var statusArray = [];
		var classArray = document.getElementsByClassName('status-result');

		for (var i = 0; i < 5; i++) {
			spanArray.push(Object.values(returnCodeJSON[i]));
		}

		for (var i = 0; i < spanArray.length; i++) {
			var statusIndicator = spanArray[i][0];
			switch (statusIndicator) {
				case 'green':
						statusArray.push(['Online', 'lightgreen']);
					break;
				case 'yellow':
					statusArray.push(['Issues', 'orange']);
					break;
				case 'red':
					statusArray.push(['Offline', 'red']);
					break;
				default:
					statusArray.push(['Offline', 'red']);
			}
		}

		for (var i = 0; i < classArray.length; i++) {
			classArray[i].innerHTML = statusArray[i][0];
			classArray[i].style.color = statusArray[i][1];
		}


		console.log(spanArray[0][0]);

}
