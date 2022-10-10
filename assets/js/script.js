// Main Page Variables
let submitButton = $('#submitBtn');
let firstName = $('#first_name');
let userMotivator = $('#motivator');
let userInfo = {};

// Hobby Page Variables
let userNameHere = $('#userNameHere');
let taskButton = $('#taskBtn');
let listedTasks = $('#taskList');


// Stores the user's info locally and then changes the page to the main hobby tracker page
submitButton.on('click', function() {
    console.log("clicked");


    let userInfo ={
        name: firstName.val(),
        motivator: userMotivator.val()
    };

    localStorage.setItem("User", JSON.stringify(userInfo));

    window.location.assign("file:///C:/Users/Erik/code/Project1-Prototype/pages/hobby.html");

});


// On page load inserts a welcome message for the user based on the name they stored locally
function loadUserData() {
    let loadUser = JSON.parse(localStorage.getItem("User"));
    console.log(loadUser.name);
    document.querySelector('#userNameHere').textContent = "Welcome, " + loadUser.name;
};

// Launches welcome statement
loadUserData();


// TODO: Create a card for task(s)
function createCard() {
    console.log("taskbutton clicked");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");


    div.setAttribute("class", "task container z-depth-3");
    h3.innerText = tas
    
    
    listedTasks.append(div);
    

};

// Modal function
$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
});

// Launches the modal window
function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
};



// TODO: grabbing an option from the modal

// Creates an object that CURRENTLY locally stores the most recent input value
function createTask() {

    let taskDetails = {
        taskName: document.querySelector(''),
        exp: document.querySelector('#difficultySelect').value,
        subtasks: document.querySelector('#subtaskSelect').value
    };

    localStorage.setItem("Task", JSON.stringify(taskDetails));
  
    console.log(taskDetails);

    createCard();
};