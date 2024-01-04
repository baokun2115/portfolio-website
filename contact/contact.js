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
  console.log(
    `Your name is ${name} and email is ${email} and your message ${message}`
  );
}

// Add event listener to form submit button
document.getElementById('form1').addEventListener('submit', handleSubmit);
