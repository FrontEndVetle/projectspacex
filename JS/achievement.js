fetch("https://api.spacexdata.com/v3/history")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(JSON)
        loopThroughHistory(json);
    })
    .catch(function(error) {
        console.log(error);
    });


function loopThroughHistory(history) {
    let achivement = document.getElementById("historyTimeline");
    for (var i = 0; i < history.length; i++) {
        let strDate = history[i].event_date_utc;
        let newDate = strDate.substr(0, 10);

        achivement.innerHTML +=
            "<li><div>" +
            "<div class='achivement-date'><p>" +
            newDate +
            "</p></div>" +
            "<h3>" +
            history[i].title +
            "</h3><p>" +
            history[i].details +
            "</p>" +
            "</div>" +
            "</li>";


    }
}