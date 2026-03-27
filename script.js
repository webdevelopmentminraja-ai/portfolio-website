let menuIcon = document.querySelector('#menu-icon i');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');

    navbar.classList.toggle('active');
}

// navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            // active navbar 
            navLinks.forEach(Links => {
                Links.classList.remove('active');
document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }

    });
    // header 

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove icon and navbar 

  navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
};

// Project Modal Functionality
function openModal(project) {
  const modal = document.getElementById('projectModal');
  const iframe = document.getElementById('projectIframe');
  
  // Demo project links - Replace with your actual project URLs
  const projectDemos = {
    'portfolio': 'https://your-portfolio-link.vercel.app/',
    // Add more projects here
  };
  
  if (projectDemos[project]) {
    iframe.src = projectDemos[project];
    modal.style.display = 'block';
  } else {
    window.open('https://your-default-project-link.com', '_blank');
  }
}

// Close modal
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = function() {
  modal.style.display = 'none';
  document.getElementById('projectIframe').src = '';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.getElementById('projectIframe').src = '';
  }
}

// Alternative: Open in new tab (if you prefer)
function openProject(url, target = '_blank') {
  window.open(url, target);
}



