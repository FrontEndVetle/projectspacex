//making the API call using fetch to get latest launches
fetch("https://api.spacexdata.com/v3/launches/upcoming")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loopThroughLaunched(json);
    })
    .catch(function(error) {
        alert("could not load content");
    });

function loopThroughLaunched(launched) {
    let missionSection = document.getElementById("gallerySlides");
    for (var i = 0; i < 5; i++) {
        let strDate = launched[i].launch_date_local;
        let newDate = strDate.substr(0, 10);
        let coreReused = launched[i].rocket.first_stage.cores[0].reused;

        let strDateTime = launched[i].launch_date_local;
        let newDateTime = strDateTime.replace("T", "<br> LOCAL TIME: ");

        if (coreReused === true) {
            coreReused = "First stage core is reused";
        } else {
            coreReused = "First stage core is not reused";
        }

        missionSection.innerHTML +=
            "<section class='launch'>" +
            "<article class='mission'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2>" +
            "<img src='/images/upcomingselect.jpg'" +
            "' class='gallery-image' alt='image of rocket launch'>" +
            "<h3>LAUNCH date: " +
            newDate +
            "</H3><button>SELECT</button></div>" +
            "  </article>" +
            "<div class='selected-wrapper'><h2> " +
            launched[i].mission_name +
            "</h2>" +
            "<div class='selected_mission-container'><h3>MISSION INFO</H3><br>" +
            "<p>FLIGHT NUMBER: " +
            launched[i].flight_number +
            "</p><p>LAUNCH DATE LOCAL: <br>" +
            newDateTime +
            "</p><p>LAUNCH SITE: " +
            launched[i].launch_site.site_name +
            "</p></div>" +
            "<div class='selected_media-container'>" +
            "<img src='/images/upcoming.jpg'" +
            "class='selected-media'" +
            "' alt='image of mission rocket'></div>" +
            "<div class='selected_links-container'><h3>ROCKET INFO</H3><br>" +
            "<p>ROCKET NAME: " +
            launched[i].rocket.rocket_name +
            "</p>" +
            "<p>REUSE OF FIRST STAGE:<br>" +
            coreReused +
            "</p>" +
            "<p>WIKIPEDIA ON SPACEX ROCKETS: <br>" +
            "<a href = 'https://en.wikipedia.org/wiki/SpaceX_launch_vehicles" +
            "'>Link to site</a></p>" +
            "</div>" +
            "</div>"; +
        "</section>";
    }

    //replace existing html with information about selected mission

    const select = document.querySelectorAll(".launch");
    let hideFilter = document.querySelector(".slider");

    select.forEach(function(launch) {
        launch.addEventListener("click", function() {
            launch.children[1].style.display = "block";
            hideFilter.style.display = "none";
            const node = launch.children[1];
            document.getElementById("selectedMission").appendChild(node);
        });
    });
}