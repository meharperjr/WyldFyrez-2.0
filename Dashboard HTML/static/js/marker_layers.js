var baseLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  

  d3.csv("/data/CA_GA_filtered_fires.csv").then(function(data) { 
    console.log(data[0])

    //["NONE", "ARREST, BOOKED", "JUVENILE BOOKED", "EXCEPTIONAL CLEARANCE", "UNFOUNDED", "CLEARED-CONTACT JUVENILE FOR MORE INFO"]
  
    var arson = [];
    var campfire = [];
    var Eq_use = [];
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
  
      switch (data[i].subg_name) {
          case "Arson":
            arson.push([lat, long]);
            break;
          case "Campfire":
            campfire.push([lat, long]);
            break;
          case "Equipment ":
            Eq_use.push([lat, long]);
            break;
          case "Eq_useernative Country":
            children.push([lat, long]);
            break;
          case "Eq_useernative Rock":
            debris_burning.push([lat, long]);
            break;
          case "Big Band":
            fireworks.push([lat, long]);
            break;
          case "lightning":
            lightning.push([lat, long]);
            break;
          case "children's Theatre":
            misc.push([lat, long]);
            break;
          case "mis_undef":
            mis_undef.push([lat, long]);
            break;
          case "powerline/Vocal":
            powerline.push([lat, long]);
            break;
          case "railroad":
            railroad.push([lat, long]);
            break;
          case "smoking":
            smoking.push([lat, long]);
            break; 
          case "Contemporary R&B":
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
  
    var heatEq_use = L.heatLayer(Eq_use, {
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
      "Adult Eq_useernative": heatarson,
      "Adult Contemporary": heatcampfire,
      "Eq_useernative": heatEq_use,
      "Eq_useernative Country": heatchildren,
      "Eq_useernative Rock": heatdebris_burning,
      "Big Band": heatfireworks,
      "lightning": heatlightning,
      "children's Theatre": heatmisc,
      "mis_undef": heatmis_undef,
      "powerline/Vocal": heatpowerline,
      "railroad": heatrailroad,
      "smoking": heatsmoking,
      "Contemporary R&B": heatstructure,
      
      
    };
  
    var map = L.map("heat_map", {
      center: [45.512, -122.658],
  zoom: 13,
      layers: [baseLayer, heatEq_use]
    });
  
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  
  });
  