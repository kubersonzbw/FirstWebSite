function GetMap() {
  var map = new Microsoft.Maps.Map("#myMap", {
    credentials: "Your Bing Maps Key",
    center: new Microsoft.Maps.Location(50.088228, 19.89286),
    zoom: 17,
  });

  var center = map.getCenter();

  //Create custom Pushpin
  var pin = new Microsoft.Maps.Pushpin(center, {
    title: "Tu",
    subTitle: "Jesteśmy",
    text: "1",
  });

  //Add the pushpin to the map
  map.entities.push(pin);
}
