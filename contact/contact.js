function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
}
document.getElementById('form1').addEventListener('submit', handleSubmit);
