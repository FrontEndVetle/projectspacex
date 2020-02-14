//making the API call using fetch to get latest launches
fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        loopThroughLaunched(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function loopThroughLaunched(launched) {
    launched.reverse();
    let missionimg = document.getElementById("gallerySlides");
    for (var i = 0; i < 3; i++) {
        missionimg.innerHTML +=
            "<img src = '" +
            launched[i].links.flickr_images[0] +
            "' class='gallery-image' alt='image of mission rocket'>";
    }
};