document.getElementById('action-btn-cart').addEventListener('click', function(event) {
    var isValid = true;
    var validationMessages = document.getElementById('validation-messages');
    validationMessages.innerHTML = ''; // Clear previous messages

    // Validate the author name
    var authorName = document.getElementById('authorName').value;
    if (authorName.trim() === '') {
        validationMessages.innerHTML += '<p>Author Name is required.</p>';
        isValid = false;
    }

    // Validate the title
    var title = document.getElementById('title').value;
    if (title.trim() === '') {
        validationMessages.innerHTML += '<p>Title is required.</p>';
        isValid = false;
    }

    // Validate the price field
    var price = document.getElementById('subtitle').value;
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
        validationMessages.innerHTML += '<p>Please enter a valid price (e.g., 10 or 10.99).</p>';
        isValid = false;
    }

    // Validate the cover type
    var coverType = document.getElementById('coverType').value;
    if (coverType === '') {
        validationMessages.innerHTML += '<p>Cover Type is required.</p>';
        isValid = false;
    }

    // Validate the description length
    var description = document.getElementById('description').value;
    if (description.length < 20) {
        validationMessages.innerHTML += '<p>Description must be at least 20 characters long.</p>';
        isValid = false;
    }

    // If validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Handle the counter buttons
document.getElementById('minus-btn').addEventListener('click', function() {
    var counter = document.getElementById('counter-value');
    var currentValue = parseInt(counter.textContent);
    if (currentValue > 0) {
        counter.textContent = currentValue - 1;
    }
});

document.getElementById('plus-btn').addEventListener('click', function() {
    var counter = document.getElementById('counter-value');
    var currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
});