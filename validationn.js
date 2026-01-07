
function validateForm() {

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let course = document.getElementById("course").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // First Name
    if (fname === "") {
        alert("First name is required");
        return false;
    }

    // Last Name
    if (lname === "") {
        alert("Last name is required");
        return false;
    }

    // Course
    if (course === "") {
        alert("Please select a course");
        return false;
    }

    // Phone number
    if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    // Gender
    let gender = document.getElementsByName("gender");
    let selected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        alert("Please select gender");
        return false;
    }

    // Address
    if (address === "") {
        alert("Address is required");
        return false;
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    // Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
