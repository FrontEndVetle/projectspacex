//making the API call using fetch to get latest launches
fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunched(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function loopThroughLaunched(launched) {
    launched.reverse();
    let missionimg = document.getElementById("gallerySlides");
    for (var i = 0; i < 5; i++) {
        missionimg.innerHTML +=
            "<article class='mission'>" +
            "<img src='" +
            launched[i].links.mission_patch_small +
            "' class='gallery-image' alt='image of mission rocket'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2><h3>LAUNCHED: " +
            launched[i].launch_year +
            "</H3><button>SELECT</button></div>" +
            "  </article>";
    }

    document.querySelectorAll(".mission").forEach(item => {
        item.addEventListener("click", function() {
            var filteredLaunch = launched.filter(
                launch => launch.links.mission_patch_small === item.firstChild.src
            );
            var hideFilter = document.querySelector(".slider");
            let missionInfo = document.querySelector(".selected-mission");
            hideFilter.innerHTML = "";
            missionInfo.innerHTML =
                "<div class='selected-wrapper'><h1> " +
                filteredLaunch[0].mission_name +
                "</h1>" +
                "<div class='selected_mission-container'><h2>MISSION INFO</H2><br>" +
                "<p>ROCKET NAME: </P>" +
                filteredLaunch[0].rocket.rocket_name +
                "<p>LAUNCH DATE LOCAL: </P>" +
                filteredLaunch[0].launch_date_local +
                "<p>LAUNCH SITE: </P>" +
                filteredLaunch[0].launch_site.site_name +
                "<p>DETAILS: </P>" +
                filteredLaunch[0].details +
                "</div>" +
                "<div class='selected_links-container'><img src='" +
                filteredLaunch[0].links.flickr_images[0] +
                " alt = 'image of mission rocket'></div>" +
                "<div class='selected_mission-container'><h3>MISSION INFO</H3><br>" +
                "<p>WIKIPEDIA PAGE:  </P>" +
                filteredLaunch[0].links.wikipedia +
                "<p>YOUTUBE LAUNCH VIDEO: </P>" +
                filteredLaunch[0].links.video_link +
                "<p>ARTICLE: </P>" +
                filteredLaunch[0].links.article_link +
                "<p>DETAILS: </P>" +
                "</div>"
            "</div>";
        });
    });
}