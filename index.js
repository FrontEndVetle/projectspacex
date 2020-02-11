let nextLaunch;
let latestLaunch;


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
    document.getElementById("nextLaunch").innerHTML =
        "<p>THE NEXT SPACE<B>X</B> LAUNCH IS: <br>" +
        nextLaunch.mission_name +
        " " +
        nextLaunch.launch_date_local +
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
    document.getElementById("latestLaunch").innerHTML =
        "<p>MOST RECENT SPACE<B>X</B> LAUNCH IS: <br>" +
        latestLaunch.mission_name +
        " " +
        latestLaunch.launch_date_local +
        " </p> ";
};