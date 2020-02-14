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
            "<article class='mission'><div class='caption'><bar> " +
            launched[i].mission_name[0] +
            "</bar></div><img src = '" +
            launched[i].links.flickr_images[0] +
            "' class='gallery-image' alt='image of mission rocket'>" +
            launched[i].launch_year[0] +
            "  </article>";
    }
    document.querySelectorAll(".mission").forEach(item => {
        item.addEventListener("click", function() {
            var filteredLaunch = launched.filter(
                launch => launch.links.flickr_images[0] === item.firstChild.src
            );
            var hideFilter = document.querySelector(".slider");
            let missionInfo = document.querySelector(".selected-mission")
            hideFilter.innerHTML = "";
            missionInfo.innerHTML =
                "<div><p>" +
                filteredLaunch[0].mission_name +
                "</p></div>";
        });
    });
}