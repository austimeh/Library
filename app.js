// Get the button element
const navbarBtn = document.querySelector('.navbar__btn');

// Get the navbar links element
const navbarLinks = document.querySelector('.navbar__links');

// Add a click event listener to the button
navbarBtn.addEventListener('click', function() {
  // Toggle the 'change' class on the button
  navbarBtn.classList.toggle('change');
  
  // Toggle the 'navbar__collapse' class on the navbar links
  navbarLinks.classList.toggle('navbar__collapse');
});
