import "./styles.css";
import {Project, myProjects} from "./project-module.js"

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
    const detailsButtons = Array.from(document.getElementsByClassName("details"));
    detailsButtons.forEach(button =>{
        button.addEventListener("click", (eventObj)=> {
            let expandedProject = eventObj.target.parentElement.parentElement;
            let projectName = expandedProject.firstChild.innerHTML;
            console.log(projectName)
            expandedProject.classList.add("expanded-card");
            expandedProject.replaceChildren();
            let projectIndexPos = arr.findIndex(proj=> proj.title == projectName);
            let project = arr[projectIndexPos];
            expandedProject.innerHTML = ` <h3 class="project-name">${project.title}</h3>
            <p>Due Date: ${project.dueDate}</p>
            <p>${project.priority}</p>
            <p>Description: ${project.description}</p>
            <p>Additional Notes: ${project.notes}</p>
            <div class="buttons">
                <button class='complete'>Complete</button>
                <button class='edit'>Edit</button>
                <button class='delete'>Delete</button>
            </div>`;
        });           
});
}

let projectArray = myProjects.getProjects();
populateProjects(projectArray);