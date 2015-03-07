var map = L.map('CHCMap').setView([40.7127, -74.005973], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([40.798664,-73.967778]).addTo(map);

var HealthCenterArray = mappingHealthCenterData.rows;

for (var i = 0; i < HealthCenterArray.length; i++) {
	
	var EachLocation = HealthCenterArray[i];
	
	var marker = L.marker([individualWarmingShelter.latitude, individualWarmingShelter.Longitude]).addTo(map);
	marker.bindPopup("<b>"+individualWarmingShelter.fullAddress+"</b><br>"+individualWarmingShelter.ProgramName);
}//end of the function