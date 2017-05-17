//Holds questions for the rehab category
var rehab1 = {category: "rehab", difficulty: "easy", questionDescription: "Panners Disease of the elbow occurs in what age group?", answer: "Young", optionOne: "Old", optionTwo: "Middle Aged", optionThree: "None of These"};
var rehab2 = {category: "rehab", difficulty: "easy", questionDescription: "What is another name for “joint mice”?", answer: "Osteochondritis Dissecans", optionOne: "Myositis Ossificans", optionTwo: "Swelling", optionThree: "Osteochondritis Myositis Ossificans"};
var rehabList = [rehab1, rehab2];

//Holds questions for the other category
var other1 = {category: "other", difficulty: "easy", questionDescription: "Muscles that flex the knee include all of the following except?", answer: "Tensor Fascia Latae", optionOne: "Biceps Femoris", optionTwo: "Sartorius", optionThree: "Gracilis"};
var other2 = {category: "other", difficulty: "easy", questionDescription: "The vastus medialis provides a _____ pull on the patella when contracting concentrically.", answer: "Superomedial", optionOne: "Superolateral", optionTwo: "Superior", optionThree: "Inferomedial"};
var otherList = [other1, other2];

//Holds questions for the evaluation category
var evaluation1 = {category: "evaluation", difficulty: "easy", questionDescription: "Which of the following is NOT a postural deviation that can be viewed from the lateral view?", answer: "Internal Tibial Rotation", optionOne: "Dorisflexed Talocrural Join", optionTwo: "Increased Thoracic Kyphosis", optionThree: "Forward Head Posture"};
var evaluation2 = {category: "evaluation", difficulty: "easy", questionDescription: "How many vertebrae comprise the spinal column from cervical through sacrum?", answer: "33", optionOne: "23", optionTwo: "30", optionThree: "35"};
var evaluationList = [evaluation1, evaluation2];

//Holds questions for the care category
var care1 = {category: "care", difficulty: "easy", questionDescription: "When performing 2-person CPR, what is the correct compression-to-breath-ratio?", answer: "30:2", optionOne: "15:1", optionTwo: "5:1", optionThree: "5:2"};
var care2 = {category: "care", difficulty: "easy", questionDescription: "When transporting an athlete off the field by manual conveyance, it is most convenient to do this with how many athletic trainers?", answer: "2", optionOne: "1", optionTwo: "3", optionThree: "4"};
var careList = [care1, care2];

var question;

//Creates a 20 second timer and displays it on the HTML
var secondsLeft = 20;
var interval = setInterval(function () {
    document.getElementById('timerHolder').innerHTML = --secondsLeft;
    if (secondsLeft <= 0)
    {
        clearInterval(interval);
        noGuess();
    }
}, 1000);

//Retrieves a question from the list based on the category. 
function getQuestion() {
    //Holds the value for the question selection and 
    var category = localStorage.getItem("category");
    questionList = window[category + "List"];
    var qMin = 0;
    var qMax = (questionList.length - 1);
    var questionNumber = getRandomInt(qMin, qMax);
    question = questionList[questionNumber];
    
    inputQuestion(question);
}

//Takes in the question information and displays it on the HTML
function inputQuestion(iq) {
    var categoryName = localStorage.getItem("categoryName");
    document.getElementById("categoryHolder").innerHTML = categoryName;
    document.getElementById("questionHolder").innerHTML = iq.questionDescription;

    var questionPlacement = ["holderTL", "holderTR", "holderBL", "holderBR"];
    var numHolder;

    numHolder = getRandomInt(0, questionPlacement.length - 1);
    document.getElementById(questionPlacement[numHolder]).value = iq.answer;
    questionPlacement.splice(numHolder, 1);

    numHolder = getRandomInt(0, questionPlacement.length - 1);
    document.getElementById(questionPlacement[numHolder]).value = iq.optionOne;
    questionPlacement.splice(numHolder, 1);

    numHolder = getRandomInt(0, questionPlacement.length - 1);
    document.getElementById(questionPlacement[numHolder]).value = iq.optionTwo;
    questionPlacement.splice(numHolder, 1);

    numHolder = 0;
    document.getElementById(questionPlacement[numHolder]).value = iq.optionThree;
}

//Retrieves a random integer between the min and the max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Checks if the answer guessed is correct or not and displays the results accordingly
function guessQuestion(answer) {
    clearInterval(interval);
    document.getElementById("returnHolder").style.display = "block";
    lockButtons();

    if (document.getElementById(answer).value === question.answer) {
        document.getElementById(answer).style.background = "green";
        document.getElementById("response").innerHTML = "You answered correctly! +10 points!";
    } else {
        document.getElementById(answer).style.background = "red";
        document.getElementById("response").innerHTML = "You answered incorrectly.";
    }
}

//If a user doesn't guess in the amount of time it locks the buttons and reds all choices
function noGuess() {
    document.getElementById("returnHolder").style.display = "block";
    lockButtons();
    document.getElementById("holderTL").style.background = "red";
    document.getElementById("holderTR").style.background = "red";
    document.getElementById("holderBL").style.background = "red";
    document.getElementById("holderBR").style.background = "red";
    document.getElementById("response").innerHTML = "You ran out of time to answer.";
}

//Locks the buttons from being clicked again
function lockButtons() {
    document.getElementById("holderTL").disabled = true;
    document.getElementById("holderTR").disabled = true;
    document.getElementById("holderBL").disabled = true;
    document.getElementById("holderBR").disabled = true;
}