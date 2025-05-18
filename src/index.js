import "./styles.css";
import {
  myProjects, 
  Project, 
} from "./project-module.js";
import {
  AssignDeleteProjectsButton,
  getClass,
  expandDescription,
  openNewProjectForm,
} from "./app-logic.js";

function populateProjects(arr) {
  const projectsSection = document.querySelector(".projects");
  projectsSection.replaceChildren();
  arr.forEach((project) => {
    let projectEntry = document.createElement("div");
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
}


const newProjectButton = getClass("new-project");
newProjectButton[0].addEventListener("click", ()=> {
   openNewProjectForm();
   let submitButton = document.getElementsByClassName("btn-submit")[0];
   submitButton.addEventListener("click", ()=>{
    let newProjectData = Array.from(document.querySelector(".project-form")).reduce((acc, input)=>({...acc, [input.id]: input.value }), 
    {});
    myProjects.addProject(
      new Project(newProjectData.title, 
      newProjectData.description,
      newProjectData["due-date"],
      newProjectData.urgency,
      newProjectData.notes)
    );
    let projectsSection = document.querySelector(".projects");
    projectsSection.replaceChildren();
    populateProjects(projectArray);
   });
   let closeButton = document.getElementsByClassName("btn-close")[0];
   closeButton.addEventListener("click", ()=>{
    let projectsSection = document.querySelector(".projects");
    projectsSection.replaceChildren();
    populateProjects(projectArray);
   });
});

let projectArray = myProjects.getProjects();
populateProjects(projectArray);