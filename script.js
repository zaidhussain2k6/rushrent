document.addEventListener('DOMContentLoaded', function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    // Show the popup
    cookiePopup.style.display = 'block';

    acceptBtn.addEventListener('click', function() {
        cookiePopup.style.display = 'none';
        // Optionally, set a cookie or local storage to remember the user's choice
    });

    declineBtn.addEventListener('click', function() {
        cookiePopup.style.display = 'none';
        // Optionally, set a cookie or local storage to remember the user's choice
    });
});
