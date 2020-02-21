fetch("https://api.spacexdata.com/v3/launches/next")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let data = json;
        nextLaunch = data;
        nextLaunchIs(json);
    })
    .catch(function(error) {
        console.log(error);
    });



function nextLaunchIs() {
    let strDate = nextLaunch.launch_date_local;
    let newDate = strDate.replace("T", "<br> LOCAL TIME: ");
    document.getElementById("nextLaunch").innerHTML =
        "<h1>THE NEXT SPACE<B>X</B> LAUNCH IS:</h1> <p> <br> " +
        " MISSION: " +
        nextLaunch.mission_name +
        "<br> DATE: " +
        newDate +
        " </p> ";
};





fetch("https://api.spacexdata.com/v3/launches/latest")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let data = json;
        latestLaunch = data;
        latestLaunchIs(json);
    })
    .catch(function(error) {
        console.log(error);
    });



function latestLaunchIs() {
    let strDate = latestLaunch.launch_date_local;
    let newDate = strDate.replace("T", "<br> LOCAL TIME: ");
    document.getElementById("latestLaunch").innerHTML =
        "<h2>THE LATEST SPACE<B>X</B> LAUNCH WAS: </h2><p><br>" +
        " MISSION: " +
        latestLaunch.mission_name +
        "<br> DATE: " +
        newDate +
        " </p> ";
};