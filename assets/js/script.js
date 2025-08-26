// Simple navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  if (mainNav.style.display === 'flex') {
    mainNav.style.display = 'none';
  } 
  else 
  {
    mainNav.style.display = 'flex';
  }
}
);