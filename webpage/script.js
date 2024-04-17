document.getElementById('contact-button').addEventListener('click', function() {
    // Modify the email address to your own email
    var emailAddress = 'eneskaanafacan35@gmail.com';
    var subject = 'Inquiry from Portfolio Website';

    // Open the default email client with pre-filled email
    window.location.href = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
});
