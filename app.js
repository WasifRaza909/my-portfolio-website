const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('section');

// Navbar Height
const navHeight = navbar.getBoundingClientRect().height;

navLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href').slice(1);

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');

      if (sectionId === href) {
        const sectionIdPosition = section.getBoundingClientRect().top;

        window.scrollBy(0, sectionIdPosition - navHeight);
      }
    });
  })
);

// Changing opacity for navbar

const homeSection = document.getElementById('home');
const navBottom = document.querySelector('.navbar-bottom');

window.addEventListener('scroll', () => {
  const homeSectionPosition = homeSection.getBoundingClientRect().top;
  console.log(homeSectionPosition);
  if (homeSectionPosition < 4) {
    navBottom.style.opacity = '0.8';
    navBottom.style.transition = 'all 200ms ease-in-out';
  } else {
    navBottom.style.opacity = '1';
  }
});

// Get Year
function getYear() {
  const year = new Date().getFullYear();

  document.querySelector('#year').textContent = year;
}

getYear();
