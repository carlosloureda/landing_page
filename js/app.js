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

// TIP 1: Add const to function definitions in =>. You are declaring functions or
// variables, always declare the "type"
const setHeader = (header) => {
  const headerMain = document.querySelector(".main__hero");
  const headerMainText = document.createElement("h1");
  headerMain.appendChild(headerMainText).textContent = header;
};

// TIP 3: Put the funciotns and variables declarations on the top of the file
const setSection = (cont, header, a, b) => {
  const sectionHeader = document.createElement("h2");
  const sectionParagraphOne = document.createElement("p");
  const sectionParagraphTwo = document.createElement("p");

  cont.appendChild(sectionHeader).textContent = header;
  cont.appendChild(sectionParagraphOne).textContent = a;
  cont.appendChild(sectionParagraphTwo).textContent = b;
};

setHeader("Natalia's page");

// const containers = document.querySelectorAll(".landing__container");

// IMPROVEMENT 1: As we are recovering containers and adding the data, we are triplicating
// the functions calls. Maybe we can come up with a cleaner way with less code?

// IMPROVEMENT 2: Add this code inside a function for "better documentation"

const buildSections = () => {
  document
    .querySelectorAll(".landing__container")
    .forEach((sectionElm, index) => {
      setSection(
        section,
        `This is Section ${index + 1}`,
        "This is the first paragraph with some information in it.",
        "This is the second paragraph with some information in it."
      );
    });
};

buildSections();

/*setSection(
  containers[0],
  "This is Section 1",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);

setSection(
  containers[1],
  "This is Section 2",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);

setSection(
  containers[2],
  "This is Section 3",
  "This is the first paragraph with some information in it.",
  "This is the second paragraph with some information in it."
);*/

//TIP: 2 try to remove the console.logs
// console.log(containers);

// TIP 3: The comments bellow are there to help you organize the code! And some tips
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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
