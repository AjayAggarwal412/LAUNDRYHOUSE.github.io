function validateForm() {
    var p = document.forms["myForm"]["fname"].value;
    var q = document.forms["myForm"]["Phone"].value;
    var r = document.forms["myForm"]["date"].value;
    var s = document.forms["myForm"]["Email"].value;
    var t = document.forms["myForm"]["address"].value;
    var phoneNum = phone.replace(/[^\d]/g, '');

    if (p == "") {
        alert("Name must be filled out");
        return false;
    }

    if (q == "" && phoneNum.length < 11) {
        alert("Phone number must be filled out");
        return false;

    }

    if (r == "") {
        alert("Pickup date must be filled out");
        return false;
    }

    if (s == "") {
        alert("Email id must be filled out");
        return false;
    }

    if (t == "") {
        alert("Address must be filled out");
        return false;
    }
}