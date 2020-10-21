var Kml = {
  /**  
  Generate a kml file
    @param {string} latlon
    @param {string} altitude

var entries = selectedEntries();

    var c = '<?xml version="1.0" encoding="UTF-8"?>\n';
    c += '<kml xmlns="http://www.opengis.net/kml/2.2">\n';

    for (i = 0; i < entries.length; i++) {
      var e = entries[i];

      let strain = e.field("Strain");

      let acc = e.field("Accuracy");

      let alt = e.field("Altitude");
      if (alt == null) { alt = "0"; }

      var coords = e.field("location") + "";
      coords = coords.split(",");
      coords = coords[1] + "," + coords[0] + "," + alt;

      let datetime = moment(e.field("datetime")).format("HH:mm YY.MM.DD");

      let desc = "Time: " + datetime + "\n";
      desc += "GPS Accuracy: " + acc + "m";

      c += "  <Placemark>\n";
      c += "    <name>" + strain + "</name>\n";
      c += "     <description>" + desc + "</description>\n";
      c += "     <Point>\n";
      c += "       <coordinates>" + coords + "</coordinates>\n";
      c += "     </Point>\n";
      c += "  </Placemark>\n";
    }

    c += "</kml>";

    f = file(path);
    f.write(c);
    f.close();

    message(c);
    message("Exported " + entries.length + " houby");



    */
  placemark: function(name, desc, latlon, altitude) {
    var coords = latlon.split(",");
    coords = coords[1] + "," + coords[0] + "," + altitude;
    
    result =  "  <Placemark>\n";
    result += "    <name>" + name + "</name>\n";
    result += "     <description>" + desc + "</description>\n";
    result += "     <Point>\n";
    result += "       <coordinates>" + coords + "</coordinates>\n";
    result += "     </Point>\n";
    result += "  </Placemark>\n";
    return result;
  }
}
