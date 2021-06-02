import React from "react";
import { useEffect } from "react";
import useScript from "../../hooks/useScript";
import "./Map.css";
import SearchIcon from "@material-ui/icons/Search";
import AutoComplete from "./AutoComplete";
import calcRoute from "./Directions";

let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;

function initMap() {
  bounds = new window.google.maps.LatLngBounds();
  infoWindow = new window.google.maps.InfoWindow();
  currentInfoWindow = infoWindow;
  infoPane = document.getElementById("panel");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log("accuracy: ", position.coords.accuracy);
        map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: pos,
        });
        infoWindow.setPosition(pos);
        infoWindow.setContent("You are here.");
        infoWindow.open(map);
        map.setCenter(pos);
        bounds.extend(pos);
        new window.google.maps.Marker({
          position: pos,
          map: map,
          title: "your current location",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          },
        });
        map.setZoom(18);
        map.setCenter(pos);

        // Call Places Nearby Search on user's location
        AutoComplete(map);
        getNearbyPlaces(pos);
      },
      () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError(true, infoWindow);
      },
      { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
    );
  } else {
    // Browser doesn't support geolocation
    handleLocationError(false, infoWindow);
  }
}

function handleLocationError(browserHasGeolocation, infoWindow) {
  // Display an InfoWindow at the map center
  infoWindow.setContent(
    browserHasGeolocation
      ? "Geolocation permissions denied. Using default location."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  currentInfoWindow = infoWindow;
}
function getNearbyPlaces(position) {
  let request = {
    location: position,
    rankBy: window.google.maps.places.RankBy.DISTANCE,
    types: ["hospital", "مستشفي"],
  };

  service = new window.google.maps.places.PlacesService(map);
  service.nearbySearch(request, nearbyCallback);
}

function nearbyCallback(results, status) {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    const index = results.findIndex((result) => {
      return (
        result.name.includes("Hospital") ||
        result.name.includes("hospital") ||
        result.name.includes("مستشفى") ||
        result.name.includes("مستشفي")
      );
    });

    calcRoute(pos, results[index].geometry.location, map);
    createMarkers(results.slice(0, 4));
  }
}

// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach((place) => {
    let marker = new window.google.maps.Marker({
      position: place.geometry.location,
      map: map,
      title: place.name,
      icon: {
        url: "/hosIcon.svg",
        scaledSize: new window.google.maps.Size(40, 40),
      },
    });

    window.google.maps.event.addListener(marker, "click", () => {
      let request = {
        placeId: place.place_id,
        fields: [
          "name",
          "formatted_address",
          "geometry",
          "rating",
          "website",
          "photos",
        ],
      };

      /* Only fetch the details of a place when the user clicks on a marker.
       * If we fetch the details for all place results as soon as we get
       * the search response, we will hit API rate limits. */
      service.getDetails(request, (placeResult, status) => {
        showDetails(placeResult, marker, status);
      });
    });

    // Adjust the map bounds to include the location of this marker
    bounds.extend(place.geometry.location);
  });
  /* Once all the markers have been placed, adjust the bounds of the map to
   * show all the markers within the visible area. */
  map.fitBounds(bounds);
}

function showDetails(placeResult, marker, status) {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new window.google.maps.InfoWindow();
    placeInfowindow.setContent(
      "<div><strong>" + placeResult.name + "</strong></div>"
    );
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
  } else {
    console.log("showDetails failed: " + status);
  }
}

function Map() {
  const [loaded, error] = useScript(
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyC5BgoVtlDF_mzZiy-Wo0JO4MxVVzo-SN0&libraries=places&v=weekly"
  );
  useEffect(() => {
    if (loaded) {
      initMap();
    }
  }, [loaded]);

  return (
    <div style={{ backgroundColor: "#fff" }} className="container">
      <div className="pac-card" id="pac-card">
        <div id="pac-container">
          <SearchIcon
            style={{
              color: "gray",
              margin: "10px",
              fontSize: "2rem",
            }}
          />
          <input id="pac-input" type="text" placeholder="Enter a location" />
        </div>
      </div>
      <div id="map"></div>
      <div id="infowindow-content">
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
      <div id="infowindow-contentEnd">
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
      <div id="panel"></div>
    </div>
  );
}

export default Map;
