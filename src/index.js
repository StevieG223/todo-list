import "./styles.css";
import {Project, myProjects} from "./project-module.js"
import {AssignDeleteProjectsButton, getClass, expandDescription, openNewProjectForm} from "./app-logic.js"

function populateProjects(arr){
    const projectsSection = document.querySelector(".projects");
    projectsSection.replaceChildren();
    arr.forEach(project => {
        let projectEntry = document.createElement('div');
        projectEntry.classList.add("project-card");
        projectEntry.innerHTML = `<h3 class="project-name">${project.title}</h3>
                    <p>${project.priority}</p>
                    <div class="buttons">
                        <button class='details'>Details</button>
                    </div>`;
        projectsSection.appendChild(projectEntry);
    });
    const detailsButtons = getClass("details");
    expandDescription(detailsButtons, arr);

    const clearAllButton = getClass("clear-all");
    const projectsDisplay = getClass("projects");
    AssignDeleteProjectsButton(clearAllButton[0], projectsDisplay[0]);

    const newProjectButton = getClass("new-project");
    newProjectButton[0].addEventListener("click", openNewProjectForm);

};
let projectArray = myProjects.getProjects();
populateProjects(projectArray);