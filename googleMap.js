var map;
var button = document.getElementById('map_button');
button.addEventListener('click', changeCenter);

function initMap() {
  var hallasan = { lat: 33.3616819, lng: 126.5291548 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 11,
      center: hallasan
    });
  var mainMarker = new google.maps.Marker({
    position: hallasan,
    map: map,
    label: {
        color: "#C70E20"
    },
    icon: {
        labelOrigin: new google.maps.Point(100, 55)
    }
  });

  var subMarkerPoint = { lat: 33.392143993983, lng: 26.49391202401};
  var subMarker = new google.maps.Marker({
      position: subMarkerPoint,
      map: map,
      label: "국립현대미술관",
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        labelOrigin: new google.maps.Point(20, 47),
        anchor: new google.maps.Point(50,32)
      }
    });
}

function changeCenter() {
  var hallasan = { lat: 33.3616819, lng: 126.5291548};
  map.panTo(hallasan);
  map.setZoom(11);
}

