import "./styles.css";
import {Project, myProjects} from "./project-module.js"

function populateProjects(arr){
    const projectsSection = document.querySelector(".projects");
    projectsSection.replaceChildren();
    arr.forEach(project => {
        let projectEntry = document.createElement('div');
        projectEntry.classList.add("project-card");
        projectEntry.innerHTML = `<h3 class="project-name">${project.title}</h3>
                    <p>Due Date: ${project.dueDate}</p>
                    <p>${project.priority}</p>
                    <p>Desciption: ${project.description}</p>
                    <div class="buttons">
                        <button>Complete</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>`;
        projectsSection.appendChild(projectEntry);
    });
}

let projectArray = myProjects.getProjects();
console.log(projectArray);
populateProjects(projectArray);