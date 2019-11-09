// Creating map object
var map = L.map("map", {
    center: [36.778259, -119.417931],
    zoom: 6
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 16,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(map);
  

  
   d3.csv("/data/CA_filtered_fires.csv").then(function(data) { 
    // console.log(data[0].LATITUDE);
  
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
          .bindPopup(data[i].STAT_CAUSE_DESCR));      
  
    }
  
    // Add our marker cluster layer to the map
    map.addLayer(markers);
  
  });
  