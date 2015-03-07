var map = L.map('CHCMap').setView([40.7127, -74.005973], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.798664,-73.967778]).addTo(map);

marker.bindPopup("<b>My Sex Dungeon!</b><br>Fuck off.").openPopup();