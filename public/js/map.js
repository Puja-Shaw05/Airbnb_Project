mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 6, // starting zoom
});

const marker = new mapboxgl.Marker({ color: 'red'})
 .setLngLat(listing.geometry.coordinates)
 .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<P><b>${listing.location}, ${listing.country}</b></p><p>Exact location will be provided after booking!</p>`))
 .addTo(map);
