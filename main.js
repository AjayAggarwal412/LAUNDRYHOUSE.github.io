var firebaseConfig = {
    apiKey: "AIzaSyA-zQ6b-GDHXPKZ-IIcBGqtAr0c403QnLM",
    authDomain: "laundry-9c3d5.firebaseapp.com",
    databaseURL: "https://laundry-9c3d5.firebaseio.com",
    projectId: "laundry-9c3d5",
    storageBucket: "laundry-9c3d5.appspot.com",
    messagingSenderId: "354951288293",
    appId: "1:354951288293:web:72155e5f5e6f63ce184b0c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var fname = getInputVal('fname');
    var phone = getInputVal('phone');
    var date = getInputVal('date');
    var Email = getInputVal('Email');
    var address = getInputVal('address');

    // Save message
    saveMessage(fname, phone, date, Email, address);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 4000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, phone, date, Email, address) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        phone: phone,
        date: date,
        Email: Email,
        address: address
    });
}