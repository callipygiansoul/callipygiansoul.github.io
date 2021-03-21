

window.addEventListener("load", function() {

  var photos = [
    'craterLake_smaller.jpg', 'ecolaStatePark_smaller.jpg',
    'newberryCaldera_smaller.jpg', 'portlandHood_small.jpg', 'sealRock2_small.jpg', 'sealRock_smaller.jpg',
    'smithRock_smaller.jpg', 'bridgeNearTheCoast_small.jpg', 'downtown_trimet_small.jpg', 'silietzBay.jpg'
  ];
  var center_bottom_photos = ['sealRock2_small.jpg'];
  var randomIndex = parseInt(Math.random() * photos.length);
  document.body.style.backgroundImage = "url('img/" + photos[randomIndex] + "')";
  if (center_bottom_photos.includes(photos[randomIndex])) {
    document.body.style.backgroundPosition = "center bottom";
  }
});

