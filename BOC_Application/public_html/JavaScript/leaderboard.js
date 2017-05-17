//Users created for testing purposes
var user1 = {username: "sgcox2017", points: 500};
var user2 = {username: "rjauker2017", points: 300};
var user3 = {username: "aenamenye2018", points: 220};
var user4 = {username: "mtcurry2017", points: 100};
var user5 = {username: "csreinhold2019", points: 50};
var users = [user5, user4, user3, user2, user1];

//Inserts users from the array list into the table as individual rows. The row inserted are the column names
function getLeaderboard() {
    var leaderTable = document.getElementById("leaderTable");
    for (i = 0; i < users.length; ++i) {
        var row = leaderTable.insertRow(0);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = users[i].username;
        cell2.innerHTML = users[i].points;
    }
    
    var row = leaderTable.insertRow(0)
    
    var header1 = row.insertCell(0);
    var header2 = row.insertCell(1);

    header1.innerHTML = "Username";
    header2.innerHTML = "Points";
}