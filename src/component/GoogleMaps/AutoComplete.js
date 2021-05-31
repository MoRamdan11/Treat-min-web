import calcRoute from "./Directions";

export default function AutoComplete(map) {
  let place;
  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const options = {
    componentRestrictions: { country: "eg" },
    fields: ["formatted_address", "geometry", "name"],
    origin: map.getCenter(),
    strictBounds: false,
    types: ["establishment"],
  };

  //to push the searchBox to the top right corner
  map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);

  // instanciate an instance of google maps auto complete class
  const autocomplete = new window.google.maps.places.Autocomplete(
    input,
    options
  );
  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);
  const infowindowStart = new window.google.maps.InfoWindow();
  const infowindowEnd = new window.google.maps.InfoWindow();

  const infowindowContentStart = document.getElementById("infowindow-content");
  const infowindowContentEnd = document.getElementById("infowindow-contentEnd");

  infowindowStart.setContent(infowindowContentStart);
  const markerStart = new window.google.maps.Marker({
    map,
    anchorPoint: new window.google.maps.Point(0, -29),
  });

  infowindowEnd.setContent(infowindowContentEnd);
  const markerEnd = new window.google.maps.Marker({
    map,
    anchorPoint: new window.google.maps.Point(0, -29),
    icon: {
      url: "/hosIcon.svg",
      scaledSize: new window.google.maps.Size(30, 30),
    },
  });

  autocomplete.addListener("place_changed", () => {
    infowindowStart.close();
    markerStart.setVisible(false);
    infowindowEnd.close();
    markerEnd.setVisible(false);
    place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(19);
    }

    markerStart.setPosition(place.geometry.location);
    markerStart.setVisible(true);
    infowindowContentStart.children["place-name"].textContent = place.name;
    infowindowContentStart.children["place-address"].textContent =
      place.formatted_address;
    infowindowStart.open(map, markerStart);

    let request = {
      location: place.geometry.location,
      rankBy: window.google.maps.places.RankBy.DISTANCE,
      types: ["hospital", "مستشفي"],
    };
    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const index = results.findIndex((result) => {
          return (
            result.name.includes("Hospital") ||
            result.name.includes("hospital") ||
            result.name.includes("مستشفى") ||
            result.name.includes("مستشفي")
          );
        });
        calcRoute(
          place.geometry.location,
          results[index].geometry.location,
          map
        );
        markerEnd.setPosition(results[index].geometry.location);
        markerEnd.setVisible(true);
        infowindowContentEnd.children["place-name"].textContent =
          results[index].name;
        infowindowContentEnd.children["place-address"].textContent =
          results[index].formatted_address;
        infowindowEnd.open(map, markerEnd);
      }
    });
  });
}
