var map = L.map('CHCMap').setView([40.7127, -74.005973], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.73084, -74.006704]).addTo(map);