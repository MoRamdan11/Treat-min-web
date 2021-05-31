export default function calcRoute(start, end, map) {
  var directionsService = new window.google.maps.DirectionsService();
  var directionsRenderer = new window.google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  var request = {
    origin: start,
    destination: end,
    travelMode: "DRIVING",
  };
  directionsService.route(request, function (result, status) {
    if (status === "OK") {
      directionsRenderer.setDirections(result);
    }
  });
}
