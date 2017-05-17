//Stats created for testing purposes
var stats1 = {username: "sgcox2017", questionID: 4, category: 2, difficulty: "easy", answeredCorrectly: "yes", points: 10};
var stats2 = {username: "sgcox2017", questionID: 2, category: 1, difficulty: "medium", answeredCorrectly: "yes", points: 10};
var stats3 = {username: "sgcox2017", questionID: 5, category: 6, difficulty: "hard", answeredCorrectly: "no", points: 0};
var stats4 = {username: "sgcox2017", questionID: 7, category: 5, difficulty: "easy", answeredCorrectly: "no", points: 0};
var stats = [stats1, stats2, stats3, stats4];

//Retrieves the username and user stats
function getInfo() {
    getUser();
    getStats();
}

//Retrieves the username from local storage and dispalys it on the page
function getUser() {
    var username = localStorage.getItem("username");
    document.getElementById("usernameHolder").innerHTML = "Personal Stats for " + username;
}

//Retrieves the stats from the user and displays them one row at a time. The column headers are added last
function getStats() {
    var statsTable = document.getElementById("statsTable");
    for (i = 0; i < stats.length; ++i) {
        var row = statsTable.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = stats[i].questionID;
        cell2.innerHTML = stats[i].category;
        cell3.innerHTML = stats[i].difficulty;
        cell4.innerHTML = stats[i].answeredCorrectly;
        cell5.innerHTML = stats[i].points;
    }
    
    var row = statsTable.insertRow(0)
    
    var header1 = row.insertCell(0);
    var header2 = row.insertCell(1);
    var header3 = row.insertCell(2);
    var header4 = row.insertCell(3);
    var header5 = row.insertCell(4);

    header1.innerHTML = "Question ID";
    header2.innerHTML = "Category";
    header3.innerHTML = "Difficulty";
    header4.innerHTML = "Answered Correctly";
    header5.innerHTML = "Points";
}