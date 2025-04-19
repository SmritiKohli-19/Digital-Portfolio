/*Name: SMRITI KOHLI
Section: CST 8285 300_301
File Name: projects.js
Date:March 2nd, 2025
Purpose: This is the javaScript file of my website which enables users to switch between my projects making a slideshow of my projects.*/

const projects = document.querySelectorAll('.project');//This selects all elements on the web page with the class name .project.
const nextBtn = document.getElementById('nextBtn');//This selects the HTML element with the ID nextBtn.
const prevBtn = document.getElementById('prevBtn');//This selects the element with the ID prevBtn

let currentProject = 0;//This initializes currentProject varible to 0.

// Toggles the 'active' class for projects to display only the project at the specified index.
// Adds the 'active' class to the project matching the given index and removes it from others.
function showProject(index) {
    projects.forEach((project, i) => {
        project.classList.toggle('active', i === index);
    });
}

// Displays the project at the current index when the page loads.
// Initially, this will show the first project (index 0).
showProject(currentProject);

/*Adds a click event listener to the "Next" button.
 When clicked, it increments the currentProject index by 1.
The modulo operator (%) ensures the index wraps around to 0 when it reaches the end of the project list.
After updating the index, it calls showProject() to display the corresponding project.*/
nextBtn.addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
});

/*Adds a click event listener to the "Previous" button.
When clicked, it decrements the currentProject index by 1.
Adding projects.length ensures that the result is non-negative (avoiding negative indices).
The modulo operator (%) allows wrapping around to the last project when the index goes below 0.
After updating the index, it calls showProject() to display the corresponding project.*/ 
prevBtn.addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
});