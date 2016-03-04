// Your JavaScript goes here...

request = new XMLHttpRequest();
// Step 1: Make request
request.open("GET", "https://messagehub.herokuapp.com/messages.json", true);
// Step 2: Handle the response
request.onreadystatechange = function() {
	// Step 3: Data is ready --there is a response!
	if (request.readyState == 4) {
		result = "";
		raw = request.responseText;
		data = JSON.parse(raw);
		elem = document.getElementById("messages");
		for (i = 0; i < data.length; i++)
		{
			result += "<p>" + data[i].content + " " data[i].username + "</p>";
		}
		elem.innerHTML = result;
	}
};
// Step 3: Fire off the request
request.send(null); // null means no data nec to send