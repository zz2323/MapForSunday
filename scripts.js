var map = L.map('CHCMap').setView([40.7127, -74.005973], 13);//pointing the map to New York City

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var HealthCenterArray = mappingHealthCenterData.rows; //creating an array for the data, pulling all the rows

/*
 * A loop in which each location's full address, name, and telephone number are displayed in a blue popup'
 */

for (var i = 0; i < HealthCenterArray.length; i++) {
	
	var EachLocation = HealthCenterArray[i];
	
var marker = L.marker([EachLocation.latitude, EachLocation. longitude]).addTo(map);//dotting the marker location

marker.bindPopup("<b>"+ EachLocation.FullAddress+"</b><br>"+EachLocation.NameofCenter+"</b><br>"+EachLocation.TelephoneNumber);//what the popup has
