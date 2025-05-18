import "./styles.css";
import {
  myProjects, 
  Project, 
} from "./project-module.js";
import {
  getClass,
  openNewProjectForm,
  populateProjects,
} from "./app-logic.js";



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