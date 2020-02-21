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
            "' class='gallery-image' alt='image of mission patch'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2><h3>LAUNCHED: " +
            launched[i].launch_year +
            "</H3><button>SELECT</button></div>" +
            "  </article>";
    }

    //filter on the selected mission
    document.querySelectorAll(".mission").forEach(item => {
        item.addEventListener("click", function() {
            let filteredLaunch = launched.filter(
                launch => launch.links.mission_patch_small === item.firstChild.src
            );
            let hideFilter = document.querySelector(".slider");
            let missionInfo = document.querySelector(".selected-mission");

            /* let imageUrl = filteredLaunch[0].links.flickr_images[0];


             if image is not yet available or missing change to mission patch
             if (imageUrl === undefined) {
                 imageUrl = filteredLaunch[0].links.mission_patch;
             }*/

            //replace existing html with information about selected mission
            hideFilter.innerHTML = "";
            missionInfo.innerHTML =
                "<div class='selected-wrapper'><h1> " +
                filteredLaunch[0].mission_name +
                "</h1>" +
                "<div class='selected_mission-container'><h2>MISSION INFO</H2><br>" +
                "<p>ROCKET NAME: " +
                filteredLaunch[0].rocket.rocket_name +
                "</p><p>LAUNCH DATE LOCAL: <br>" +
                filteredLaunch[0].launch_date_local +
                "</p><p>LAUNCH SITE: " +
                filteredLaunch[0].launch_site.site_name +
                "</p><div id='missionObjectiveTrigger'><p><button>OBJECTIVE</button></div>" +
                "<div id='missionObjectiveInfo' style='display:none' class='mission-objective'><p>" +
                filteredLaunch[0].details +
                "</P></div></div>" +
                "<div class='selected_media-container'><iframe width='560' height='315' " +
                "class='selected-media' frameborder='0' " +
                "src='https://www.youtube.com/embed/" +
                filteredLaunch[0].links.youtube_id +
                "' alt='image of mission rocket'></iframe></div>" +
                "<div class='selected_links-container'><h3>LINKS</H3><br>" +
                "<p>WIKIPEDIA PAGE:  <br><a href='" +
                filteredLaunch[0].links.wikipedia +
                "'>link to site</a></P><p>VIEW ON YOUTUBE: </br><a href='" +
                filteredLaunch[0].links.video_link +
                "'>link to site</a></P><p>ARTICLE: </br><a href='" +
                filteredLaunch[0].links.article_link +
                "'>link to site</a></P>" +
                "</div>"
            "</div>";
            //trigger more objective information on and off
            document.getElementById('missionObjectiveTrigger').addEventListener('click', function() {

                var toggleInfo = document.getElementById("missionObjectiveInfo");
                if (toggleInfo.style.display === "block") {
                    toggleInfo.style.display = "none";
                } else {
                    toggleInfo.style.display = "block";
                }
            });
        });


    });
}