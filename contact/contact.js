document.getElementById('form1').addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  var name = document.getElementById('name').value;

  alert(name);
}
