function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition((data) => {
    success(data.coords.latitude, data.coords.longitude);
  });
}

const geo = getGeolocation((data) => {
  console.log(data);
});

function getPromiseGeo() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      resolve(data.coords.latitude, data.coords.longitude);
    });
  });
}

getPromiseGeo().then((data) => {
  console.log(data);
});





setAttri() {
    
}