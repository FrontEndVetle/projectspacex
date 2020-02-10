let nextLaunch;


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
        "<p>THE NEXT LAUNCH IS: <br>" +
        nextLaunch.mission_name +
        " " +
        nextLaunch.launch_date_local +
        " </p> ";
};