/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = document.getElementById("navbar__list");

const sections = [...document.querySelectorAll('section')];

const fragment = document.createDocumentFragment();

for (section of sections) {

  const navItem = document.createElement('li');

  const anchor = document.createElement('a');

  navItem.appendChild(anchor);

  anchor.textContent = section.getAttribute('data-nav');

  const sectionId = section.getAttribute('id');

  anchor.setAttribute('href',`#${sectionId}`);

  anchor.classList.add('menu__link');

  fragment.appendChild(navItem);

}

navBar.appendChild(fragment);

const openIcon = document.createElement('span');
const newItem = document.createElement('div');
newItem.classList.add('top');
openIcon.setAttribute('onclick', 'openNav()');
openIcon.classList.add('mobile');
openIcon.innerHTML = '&#9776;';
newItem.appendChild(openIcon);
navBar.before(newItem);

const sideNav = document.createElement('div');
sideNav.setAttribute('id', 'side');
sideNav.classList.add('side-nav');
for(section of sections) {
  const anc = document.createElement('a');
  anc.textContent = section.getAttribute('data-nav');
  const secId = section.getAttribute('id');
  anc.setAttribute('href', `#${secId}`);
  anc.classList.add('sidenav-link');
  sideNav.appendChild(anc);
}
const hdr = document.querySelector('.page__header');
hdr.before(sideNav);

const firstLink = document.querySelector('div .sidenav-link');
const closeIcon = document.createElement('a');
closeIcon.setAttribute('href', 'javascript:void(0)');
closeIcon.setAttribute('onclick', 'closeNav()');
closeIcon.classList.add('closebtn');
closeIcon.innerHTML = '&times;';
firstLink.before(closeIcon);

function openNav() {
  document.getElementById('side').style.width = '250px';
  newItem.style.display = 'none';
}

function closeNav() {
  document.getElementById('side').style.width = '0';
  newItem.style.display = 'block';
}

// Add class 'active' to section when near top of viewport


function activeSection() {
  sections.forEach(section =>{
    const secTop = section.getBoundingClientRect().top;
    if(secTop >= 0 && secTop <= 300) {
      section.classList.add('active');
    }else{
      section.classList.remove('active');
    }
  });
}

window.addEventListener('srcoll', activeSection);

window.addEventListener('scroll', () =>{
  const observer = new IntersectionObserver(callBack, options);
  sections.forEach(section =>{
    observer.observe(section);
  });
});

const callBack = entries =>{
  if(entries[0].isIntersecting) {
    entries[0].target.classList.add('active');
  }else{
    entries[0].target.classList.remove('active');
  }
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.65
};

const navItems = document.querySelectorAll("li");

navItems.forEach((li, i) => {
  li.addEventListener('click',(event) => {
    event.preventDefault();
    removeSelected();
    removeClass();
    if(sections[i].id === 'section' + (i+1 )){
      li.classList.add('active-link');
      sections[i].classList.add("active");
    }
  });
});

// Scroll to anchor ID using scrollTO event

const navLinks = document.querySelectorAll("#navbar__list a");

navLinks.forEach((link) => {

    link.addEventListener('click', (event) => {
        event.preventDefault();  
        const id = link.getAttribute('href');

        // get the reference to the corresponding section
        const targetSection = document.querySelector(id);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    });

});

function removeClass () {
  sections.forEach((section, i) => {
    section.classList.remove('active');
  });
};

function removeSelected () {
  navItems.forEach((item, i) => {
    item.classList.remove('active-link');
  });

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
