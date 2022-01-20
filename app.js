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

const sections = document.querySelectorAll('section');

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


// Add class 'active' to section when near top of viewport


function activeSection(section) {

  let secPos = section.getBoundingClientRect();

  if (secPos.top <= 20 && secPos.bottom > 20) {

    removeClass();

    section.classList.add('active');

  }

}



// Scroll to anchor ID using scrollTO event

const navItems = document.querySelectorAll("li");

navItems.forEach((li, i) => {
  li.addEventListener('click',() => {
    removeSelected();
    li.classList.add('active-link');
    removeClass();
    if(sections[i].id === 'section' + (i+1 )){
        sections[i].classList.add("active");
        sections[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
