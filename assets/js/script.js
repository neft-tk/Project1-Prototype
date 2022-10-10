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

    
loadUserData();



taskButton.on('click', function() {
    console.log("taskbutton clicked");
    let div = document.createElement("div");
    div.setAttribute("class", "container");
    
    listedTasks.append(div);
    

});


$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
});

function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
};

// TODO: grabbing an option from the modal

function createTask() {

    let taskDetails = {
        exp: document.querySelector('#difficultySelect').value,
        subtasks: document.querySelector('#subtaskSelect').value
    };


    // function getDifficultyOption() {
    //     selectElement = document.querySelector('#difficultySelect');
    //     output = selectElement.options[selectElement.selectedIndex].value;
    //     taskDetails.exp.textContent = output;
    // };

    // function getSubTasksOption() {
    //     selectElement = document.querySelector('#subtaskSelect');
    //     output = selectElement.options[selectElement.selectedIndex].value;
    //     taskDetails.subtasks.textContent = output;
    // };

    localStorage.setItem("Task", JSON.stringify(taskDetails));

    // getDifficultyOption();
    // getSubTasksOption();   
    console.log(taskDetails);
};