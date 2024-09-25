document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Form data validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    }

    if (valid) {
        // If validation passes, send data via AJAX
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});