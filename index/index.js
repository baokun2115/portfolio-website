function handleClickAbout() {
  const about = document.getElementById('about-me-heading');
  about.style.color = 'red';
  setTimeout(() => {
    about.style.color = 'black';
  }, 1500);
}
document
  .getElementById('about-click')
  .addEventListener('click', handleClickAbout);
