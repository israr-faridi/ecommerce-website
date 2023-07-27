
// Toggle the active class on the nav when the hamburger icon is clicked
document.addEventListener('DOMContentLoaded', function() {
  const hambar = document.querySelector('.hambar');
  const close = document.querySelector('.close');
  const nav = document.querySelector('.nav');
  const control = document.querySelector('.nav_control');
  const container = document.querySelector('.nav_container');
  

  const icon = document.querySelector('.nav_right_icon');

  hambar.addEventListener('click', function() {
      nav.classList.add('active');
      hambar.style.display = 'none';
      close.style.display = 'block';
      icon.style.display='none';
      control.style.height='100vh';
      control.style.backgroundColor='#f5f5f5';
      container.style.backgroundColor='#f5f5f5';
  });

  close.addEventListener('click', function() {
      nav.classList.remove('active');
      hambar.style.display = 'block';
      close.style.display = 'none';
      icon.style.display='block';
      control.style.height='auto';
      control.style.backgroundColor='none';
      container.style.backgroundColor='#ffff';
  });
});

