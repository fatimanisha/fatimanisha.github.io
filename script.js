function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
    } else {
      sidenav.style.width = "250px";
    }
  }

  function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    sidenav.style.width = "0";
  }





function fadeCardsIn() {
  const cards = document.querySelectorAll('.achievements-section .card');
  const windowHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight) {
      card.classList.add('fade-in');
    }
  });
}

function handleScroll() {
  fadeCardsIn();
  fadeInElements();
  fadeProjectsIn();
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();

function fadeInElements() {
  var skills = document.querySelectorAll('.skills .work');
  var productionElements = document.querySelectorAll('.production-image, .production-content, .view-projects-btn');

  skills.forEach(function (skill) {
    if (isInViewport(skill)) {
      skill.classList.add('fade-in');
    }
  });

  productionElements.forEach(function (element) {
    if (isInViewport(element)) {
      element.style.opacity = 1;
    }
  });
}

document.addEventListener('scroll', function () {
  fadeInElements();
});

fadeInElements();

function fadeProjectsIn() {
  const projects = document.querySelectorAll('.project');
  const windowHeight = window.innerHeight;

  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < windowHeight) {
      project.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeProjectsIn);
window.addEventListener('resize', fadeProjectsIn);
fadeProjectsIn();

document.addEventListener('DOMContentLoaded', function () {
  var certificationsLink = document.querySelector('#certifications-link');

  certificationsLink.addEventListener('click', function (event) {
    event.preventDefault();

    var certificationsSection = document.querySelector('#certification');

    window.scrollTo({
      top: certificationsSection.offsetTop,
      behavior: 'smooth'
    });
  });
});


  // Skills and Production Section
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fadeInElements() {
    var skills = document.querySelectorAll('.skills .work');
    var productionElements = document.querySelectorAll('.production-image, .production-content, .view-projects-btn');

    skills.forEach(function(skill) {
      if (isInViewport(skill)) {
        skill.classList.add('fade-in');
      }
    });

    productionElements.forEach(function(element) {
      if (isInViewport(element)) {
        element.style.opacity = 1;
      }
    });
  }

  document.addEventListener('scroll', function() {
    fadeInElements();
  });

  fadeInElements();
    
    //project section
