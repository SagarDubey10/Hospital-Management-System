console.log("script loaded");
document.addEventListener('DOMContentLoaded', function() {
    const signupLink = document.getElementById('signupLink');
    const signupForm = document.getElementById('signupForm');
    const greetingMessage = document.getElementById('greeting');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Signup link clicked');
        // Redirect to the signup page or display the signup form dynamically
        console.log('Redirecting to signup page...');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(signupForm);
        const email = formData.get('email');
        const password = formData.get('password');
        const accountType = formData.get('accountType');

        // Perform form submission/validation or AJAX request here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Account Type:', accountType);

        // Redirect based on account type
        if (accountType === 'patient') {
            window.location.href = 'patient_login.html'; // Replace with actual patient login page
        } else if (accountType === 'doctor') {
            window.location.href = 'doctor_login.html'; // Replace with actual doctor login page
        }
    });

    // Update greeting message and instructions based on selected account type
 // Update greeting message and instructions based on selected account type
const accountSelection = document.querySelectorAll('input[name="accountType"]');
accountSelection.forEach(function(input) {
    input.addEventListener('change', function() {
        if (this.value === 'patient') {
            greetingMessage.textContent = 'Hello Patient!';
        } else if (this.value === 'doctor') {
            greetingMessage.textContent = 'Hello Doctor!';
        } else {
            greetingMessage.textContent = ''; // Clear the greeting message if no selection is made
        }
    });
});
});