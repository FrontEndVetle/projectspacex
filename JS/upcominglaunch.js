//making the API call using fetch to get latest launches
fetch('https://api.spacexdata.com/v3/launches/upcoming')
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
    let missionimg = document.getElementById("gallerySlides");
    for (var i = 0; i < 5; i++) {
        let strDate = launched[i].launch_date_local;
        let newDate = strDate.substr(0, 10);

        missionimg.innerHTML +=
            "<article class='mission'>" +
            "<h2>" +
            launched[i].mission_name +
            "</h2>" +
            "<img src='/images/upcomingselect.jpg'" +
            "' class='gallery-image' alt='image of rocket launch'>" +
            "<h3>LAUNCH date: " +
            newDate +
            "</H3><button>SELECT</button></div>" +
            "  </article>";
    }

    //filter on the selected mission
    document.querySelectorAll(".mission").forEach(item => {
        item.addEventListener("click", function() {
            let filteredLaunch = launched.filter(
                launch => launch.links.mission_name === item.firstChild.src
            );
            let hideFilter = document.querySelector(".slider");
            let missionInfo = document.querySelector(".selected-mission");

            let coreReused = filteredLaunch[0].rocket.first_stage.cores[0].reused;

            let strDate = filteredLaunch[0].launch_date_local;
            let newDate = strDate.replace("T", "<br> LOCAL TIME: ");

            if (coreReused === true) {
                coreReused = "First stage core is reused";

            } else {
                coreReused = "First stage core is not reused"
            }



            //replace existing html with information about selected mission
            hideFilter.innerHTML = "";
            missionInfo.innerHTML =
                "<div class='selected-wrapper'><h1> " +
                filteredLaunch[0].mission_name +
                "</h1>" +
                "<div class='selected_mission-container'><h2>MISSION INFO</H2><br>" +
                "<p>FLIGHT NUMBER: " +
                filteredLaunch[0].flight_number +
                "</p><p>LAUNCH DATE LOCAL: <br>" +
                newDate +
                "</p><p>LAUNCH SITE: " +
                filteredLaunch[0].launch_site.site_name +
                "</p></div>" +
                "<div class='selected_media-container'>" +
                "<img src='/images/upcoming.jpg'" +
                "class='selected-media'" +
                "' alt='image of mission rocket'></div>" +
                "<div class='selected_links-container'><h3>ROCKET INFO</H3><br>" +
                "<p>ROCKET NAME: " +
                filteredLaunch[0].rocket.rocket_name +
                "</p>" +
                "<p>REUSE OF FIRST STAGE:<br>" +
                coreReused +
                "</p>" +
                "<p>WIKIPEDIA ON SPACEX ROCKETS: <br>" +
                "<a href = 'https://en.wikipedia.org/wiki/SpaceX_launch_vehicles" +
                "'>Link to site</a></p>"
            "</div>" +
            "</div>";


        });


    });
}