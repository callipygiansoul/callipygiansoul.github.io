

window.addEventListener("load", function(){
  const targetDate = new Date('2022-03-03T16:00:00') / 1000;
  new FlipDown(targetDate, "flipdown").start();

  var photos = [
    'craterLake_small.jpg', 'ecolaStatePark.jpg',
    'newberryCaldera_small.jpg', 'portlandHood.jpg', 'sealRock2.jpg', 'sealRock_small.jpg',
    'smithRock_small.jpg'
  ];
  var center_bottom_photos = ['sealRock2'];
  var randomIndex = parseInt(Math.random() * photos.length);
  document.body.style.backgroundImage = "url('img/" + photos[randomIndex] + "')";
  if (center_bottom_photos.includes(photos[2])) {
    document.body.style.backgroundPosition = "center bottom";
  }


});

