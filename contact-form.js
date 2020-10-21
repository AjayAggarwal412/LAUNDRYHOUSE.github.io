var firebaseConfig = {
    apiKey: "AIzaSyAVGmtJEI7TM6lrpkpaStLVhFmddpoDpFM",
    authDomain: "contact-form-c67e4.firebaseapp.com",
    databaseURL: "https://contact-form-c67e4.firebaseio.com",
    projectId: "contact-form-c67e4",
    storageBucket: "contact-form-c67e4.appspot.com",
    messagingSenderId: "1050952901065",
    appId: "1:1050952901065:web:4634b31eeea8a6c91e8818"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Query');

// Listen for form submit
document.getElementById('Contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var Name = getInputVal('Name');
    var Mobile = getInputVal('Mobile');
    var _Email = getInputVal('_Email');
    var Address = getInputVal('Address');

    // Save message
    saveMessage(Name, Mobile, _Email, Address);

    // Show alert
    document.querySelector('._alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('._alert').style.display = 'none';
    }, 4000);

    // Clear form
    document.getElementById('Contact-form').reset();
    
    //get back to top of the page
    window.scrollTo(0, 0);
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(Name, Mobile, _Email, Address) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: Name,
        Mobile: Mobile,
        _Email: _Email,
        Address: Address
    });
}