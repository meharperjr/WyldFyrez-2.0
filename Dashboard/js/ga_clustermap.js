// Creating map object
var map = L.map("ga_clus", {
  center: [32.165623, -82.900078],
  zoom: 6
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

// Store API query variables

// Grab the data with d3
d3.csv("Dashboard/data/GA_filtered_fires.csv").then(function(data) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < data.length; i++) {

    // Set the data location property to a variable
    var lat = data[i].LATITUDE; 
    var long = data[i].LONGITUDE;

    // Check for location property
 
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([lat,long])
        .bindPopup("Fire Cause : " + data[i].STAT_CAUSE_DESCR+" - " + "Fire Year : " +data[i].FIRE_YEAR));
    
  }

  // Add our marker cluster layer to the map
  map.addLayer(markers);

});

