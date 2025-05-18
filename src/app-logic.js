export {
  getClass,
  openNewProjectForm,
  populateProjects
};

function AssignDeleteProjectsButton(button, div) {
  button.addEventListener("click", () => {
    div.replaceChildren();
  });
}

function getClass(className) {
  return Array.from(document.getElementsByClassName(className));
}

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

function expandDescription(buttonsArray, objArray) {
  buttonsArray.forEach((button) => {
    button.addEventListener("click", (eventObj) => {
      let expandedProject = eventObj.target.parentElement.parentElement;
      let projectName = expandedProject.firstChild.innerHTML;
      expandedProject.classList.add("expanded-card");
      expandedProject.replaceChildren();
      let projectIndexPos = objArray.findIndex(
        (proj) => proj.title == projectName,
      );
      let project = objArray[projectIndexPos];
      expandedProject.innerHTML = `<h3 class="project-name">${project.title}</h3>
            <p>Due Date: ${project.dueDate}</p>
            <p>${project.priority}</p>
            <p>Description: ${project.description}</p>
            <p>Additional Notes: ${project.notes}</p>
            <div class="buttons">
                <button class='complete'>Complete</button>
                <button class='delete'>Delete</button>
            </div>`;
      let deleteProjectBtn = expandedProject.getElementsByClassName("delete")[0];
      deleteProjectBtn.addEventListener("click", ()=>{
        let projectToDelete = expandedProject.firstChild.innerHTML;
        let projectToDeleteIndexPos = objArray.findIndex(
          (proj) => proj.title == projectToDelete,
        );
        if (projectToDeleteIndexPos > -1) { 
          objArray.splice(projectToDeleteIndexPos, 1);
        }
        populateProjects(objArray)
    });
  });
  });
}

function openNewProjectForm() {
  const projectsSection = document.querySelector(".projects");
  projectsSection.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">New Project</h2>
                <div class="form-wrapper">
                    <form class="project-form" action="#">
                        <label class="form-label" for="title">Project title:</label>
                        <input class="form-input" type="text" id="title" required>
                        <label class="form-label" for="due-date">Due Date:</label>
                        <input class="form-input" type="text" id="due-date" required>
                        <select class="form-input" id="urgency" name="urgency">
                            <option value="very-urgent">Very Urgent</option>
                            <option value="urgent">Urgent</option>
                            <option value="less-urgent">Somewhat Urgent</option>
                            <option value="not-urgent">Not Urgent</option>
                        </select>
                        <label class="form-label" for="description">Description:</label>
                        <input class="form-input" type="text" id="description" name="description" required>
                        <label for="notes">Additional Notes:</label>
                        <textarea id="notes" class="form-input" name="notes" rows="4" cols="75"></textarea>

                        <button type="button" class="btn-submit">Submit</button>
                        <button type="button" class="btn-close">Close</button>
                    </form>
                </div>    
            </div>`;
}