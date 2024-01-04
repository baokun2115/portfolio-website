// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form data
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Send form data to server
  // Replace the URL with your server endpoint
  fetch('https://example.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle server response
      console.log(data);
      alert('Message sent successfully');
      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch((error) => {
      console.error(error);
      alert('An error occurred. Please try again later');
    });
}

// Add event listener to form submit button
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
