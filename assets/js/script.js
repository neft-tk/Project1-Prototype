// Main Page Variables
let submitButton = $('#submitBtn');
let firstName = $('#first_name');
let userMotivator = $('#motivator');
let userInfo = {};

// Hobby Page Variables
let userNameHere = $('#userNameHere');



submitButton.on('click', function() {
    console.log("clicked");


    let userInfo ={
        name: firstName.val(),
        motivator: userMotivator.val()
    };

    localStorage.setItem("User", JSON.stringify(userInfo));

    window.location.assign("file:///C:/Users/Erik/code/Project1-Prototype/pages/hobby.html");

});

function loadUserData() {
    let loadUser = JSON.parse(localStorage.getItem("User"));
    console.log(loadUser.name);
    document.querySelector('#userNameHere').textContent = "Welcome, " + loadUser.name;
};

    
loadUserData();

// When the submit button is clicked, your name and motivator are saved
// submitButton.addEventListener('click', saveUserInfo());

