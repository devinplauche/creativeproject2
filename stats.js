
document.getElementById('playersubmit').addEventListener("click", function(event) {
  event.preventDefault();
    let playerName = document.getElementById('playername').value;
    if (playerName === "") {
      playerName = "No Player"; // default
    }
    let theStats = "<tr>";

    var table = document.getElementById("mytable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);
    //theStats += "<td>" + playerName + "</td>";
    const url = "https://www.balldontlie.io/api/v1/players?search=" + playerName;

    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        var cell1 = row.insertCell(0);
        cell1.innerHTML = json.data[0].first_name + " " + json.data[0].last_name;
        //document.getElementById("td1").innerHTML = json.data[0].first_name + " " + json.data[0].last_name; // copy list of names to local array here


        var url2 ="https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + json.data[0].id;




        fetch(url2)
          .then(function(response) {
            return response.json();
          }).then(function(json1) {
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(3);
            cell2.innerHTML = json1.data[0].pts;
            cell3.innerHTML = json1.data[0].reb;
            cell4.innerHTML = json1.data[0].fg_pct;
            cell5.innerHTML = json1.data[0].ast;

            //document.getElementById("td2").innerHTML = json1.data[0].pts;
            //document.getElementById("td3").innerHTML = json1.data[0].reb;
            //document.getElementById("td4").innerHTML = json1.data[0].ast;
            //document.getElementById("td5").innerHTML = json1.data[0].fg_pct;

            //document.getElementById("mytable").innerHTML =  theStats;
          });
        });

});
