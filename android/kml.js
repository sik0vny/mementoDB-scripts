var Kml = {

  genStyle: function(icon) {
    result =  "  <Style id='" + icon + "'>\n";
    result += "  <IconStyle>\n";
    result += "    <Icon><href>" + icon + "</href></Icon>\n";
    result += "    <hotSpot x='0.5' y='0.5' xunits='fraction' yunits='fraction' />\n";
    result += "  </IconStyle>\n";  
    result += "  </Style>\n";
    return result; 
  }
  
  genStyles: function(icons) {
    result = "";
    icons.forEach(icon => result += genStyle(icon));
    return result;
  }
  
  genPlacemark: function(name, desc, latlon, altitude) {
    var coords = (latlon + "").split(",");
    coords = coords[1] + "," + coords[0];
    if (altitude != null) {
      coords += "," + altitude;
    }
    
    result =  "  <Placemark>\n";
    result += "    <name>" + name + "</name>\n";
    result += "     <description>" + desc + "</description>\n";
    result += "     <Point>\n";
    result += "       <coordinates>" + coords + "</coordinates>\n";
    result += "     </Point>\n";
    result += "  </Placemark>\n";
    return result; 
  },
 
   genKml: function(name, contents) {
    result  = '<?xml version="1.0" encoding="UTF-8"?>';
    result += '<kml xmlns="http://www.opengis.net/kml/2.2">';
    result += "<Document>"
    result += contents;
    result += "</Document>";
    result += "</kml>";
    return result;
  },
 
  writeFile: function(kml, path) {
   f = file(path);
   f.write(kml);
   f.close();
  },
  
};

Kml.elo = {"tt"};


