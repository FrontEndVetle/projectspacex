//making the API call using fetch to get latest launches
fetch("https://api.spacexdata.com/v3/launches/past")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunched(json);
    })
    .catch(function(error) {
        alert("could not load content");
    });

//loop through the 5 latest launches
function loopThroughLaunched(launched) {
    launched.reverse();
    let missionimg = document.getElementById("gallerySlides");
    for (var i = 0; i < 5; i++) {
        //change date format
        let strDate = launched[i].launch_date_local;
        let newDate = strDate.substr(0, 10);
        let imagePatch = launched[i].links.mission_patch_small;

        // check if there is an image patch in JSON
        if (imagePatch === null) {
            imagePatch = "/images/upcoming.jpg";
        }

        missionimg.innerHTML +=
            "<section class='launch'>" +
            "<article class='mission'>" +
            "<img src='" +
            imagePatch +
            "' class='gallery-image' alt='image of mission patch'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2>" +
            "<h3>LAUNCHED: " +
            newDate +
            "</H3><button>SELECT</button></div>" +
            "</article>" +
            "<div class='selected-wrapper'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2>" +
            "<div class='selected_mission-container'>" +
            "<h3>MISSION INFO</H3><br>" +
            "<p>ROCKET NAME: " +
            launched[i].rocket.rocket_name +
            "</p><p>LAUNCH DATE LOCAL: <br>" +
            newDate +
            "</p><p>LAUNCH SITE: " +
            launched[i].launch_site.site_name +
            "</p><div class='missionObjectiveTrigger'><p><button>OBJECTIVE</button></div>" +
            "<div style='display:none' class='mission-objective'><p>" +
            launched[i].details +
            "</P></div></div>" +
            "<div class='selected_media-container'><iframe width='560' height='315' " +
            "class='selected-media' frameborder='0' " +
            "src='https://www.youtube.com/embed/" +
            launched[i].links.youtube_id +
            "' alt='video of launch'></iframe></div>" +
            "<div class='selected_links-container'><h3>LINKS</H3><br>" +
            "<p>WIKIPEDIA PAGE:  <br><a href='" +
            launched[i].links.wikipedia +
            "'>link to site</a></P><p>VIEW ON YOUTUBE: </br><a href='" +
            launched[i].links.video_link +
            "'>link to site</a></P><p>ARTICLE: </br><a href='" +
            launched[i].links.article_link +
            "'>link to site</a></P>" +
            "</div>" +
            "</div>" +
            "</section>";
    }

    const select = document.querySelectorAll(".launch");
    let hideFilter = document.querySelector(".slider");

    select.forEach(function(launch) {
        launch.addEventListener("click", function() {
            launch.children[1].style.display = "block";
            hideFilter.style.display = "none";
            const node = launch.children[1];
            document.querySelector(".selected-mission").appendChild(node);
        });
    });

    ////trigger more objective information on and off
    let toggle = document.querySelectorAll(".missionObjectiveTrigger");
    for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener("click", function() {
            console.log(this.nextElementSibling);
            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block";
            }
        });
    }
}