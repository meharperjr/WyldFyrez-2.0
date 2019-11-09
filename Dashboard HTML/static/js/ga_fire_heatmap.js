var baseLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  

  d3.csv("/data/GA_filtered_fires.csv").then(function(data) { 
    console.log(data[0].LATITUDE);

    //["NONE", "ARREST, BOOKED", "JUVENILE BOOKED", "EXCEPTIONAL CLEARANCE", "UNFOUNDED", "CLEARED-CONTACT JUVENILE FOR MORE INFO"]
   
    var arson = [];
    var campfire = [];
    var eq_use = [];
    var children = [];
    var debris_burning = [];
    var fireworks = [];
    var lightning = [];
    var misc = [];
    var mis_undef = [];
    var powerline = [];
    var railroad = [];
    var smoking = [];
    var structure = [];
   
  
    for (var i = 0; i < data.length; i++) {
      var lat = data[i].LATITUDE; 
    var long = data[i].LONGITUDE;
    
      

      switch (data[i].STAT_CAUSE_DESCR) {
          case "Arson":
            arson.push([lat, long]);
         
            break;
          case "Campfire":
            campfire.push([lat, long]);
            break;
          case "Equipment Use":
            eq_use.push([lat, long]);
            break;
          case "Children":
            children.push([lat, long]);
            break;
          case "Debris Burning":
            debris_burning.push([lat, long]);
            break;
          case "Fireworks":
            fireworks.push([lat, long]);
            break;
          case "Lightning":
            lightning.push([lat, long]);
            break;
          case "Miscellaneous":
            misc.push([lat, long]);
            break;
          case "Missing/Undefined":
            mis_undef.push([lat, long]);
            break;
          case "Powerline":
            powerline.push([lat, long]);
            break;
          case "Railroad":
            railroad.push([lat, long]);
            break;
          case "Smoking":
            smoking.push([lat, long]);
            break; 
          case "Structure":
            structure.push([lat, long]);
            break; 
          
          default:
            break;
      }

    }
    

    var heatarson = L.heatLayer(arson, {
      radius: 50,
      blur: 35
    });
  
    var heatcampfire = L.heatLayer(campfire, {
      radius: 50,
      blur: 35
    });
  
    var heateq_use = L.heatLayer(eq_use, {
      radius: 50,
      blur: 35
    });
  
    var heatchildren = L.heatLayer(children, {
      radius: 50,
      blur: 35
    });

    var heatdebris_burning = L.heatLayer(debris_burning, {
      radius: 50,
      blur: 35
    });

    var heatfireworks = L.heatLayer(fireworks, {
      radius: 50,
      blur: 35
    });

    var heatlightning = L.heatLayer(lightning, {
      radius: 50,
      blur: 35
    });

    var heatmisc = L.heatLayer(misc, {
      radius: 50,
      blur: 35
    });


    var heatmis_undef = L.heatLayer(mis_undef, {
      radius: 50,
      blur: 35
    });


    var heatpowerline = L.heatLayer(powerline, {
      radius: 50,
      blur: 35
    });

    var heatrailroad = L.heatLayer(railroad, {
      radius: 50,
      blur: 35
    });

    var heatsmoking = L.heatLayer(smoking, {
      radius: 50,
      blur: 35
    });

    var heatstructure = L.heatLayer(structure, {
      radius: 50,
      blur: 35
    });


    

    // Create a baseMaps object
    var baseMaps = {
      "Street Map": baseLayer
    };
    
    // Create an overlay object
    var overlayMaps = {
      "Arson": heatarson,
      "Camp Fire": heatcampfire,
      "Equipment Use": heateq_use,
      "Children": heatchildren,
      "Debris Burning": heatdebris_burning,
      "Fireworks": heatfireworks,
      "Lightning": heatlightning,
      "Miscellaneous": heatmisc,
      "Missing/Undefined": heatmis_undef,
      "Powerline": heatpowerline,
      "Railroad": heatrailroad,
      "Smoking": heatsmoking,
      "Structure": heatstructure,
      
      
      
    };
  
    var map = L.map("map", {
      center: [32.165623, -82.900078],
  zoom: 6,
      layers: [baseLayer]
    });
  
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  
  });
  