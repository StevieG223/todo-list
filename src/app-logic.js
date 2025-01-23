export {AssignDeleteProjectsButton, getClass, expandDescription, openNewProjectForm}

function AssignDeleteProjectsButton(button, div){
    button.addEventListener("click", () =>{
        div.replaceChildren()
    });
}

function getClass(className){
    return Array.from(document.getElementsByClassName(className));
};

function expandDescription(buttonsArray, objArray){
    buttonsArray.forEach(button =>{
        button.addEventListener("click", (eventObj)=> {
            let expandedProject = eventObj.target.parentElement.parentElement;
            let projectName = expandedProject.firstChild.innerHTML;
            expandedProject.classList.add("expanded-card");
            expandedProject.replaceChildren();
            let projectIndexPos = objArray.findIndex(proj=> proj.title == projectName);
            let project = objArray[projectIndexPos];
            expandedProject.innerHTML = `<h3 class="project-name">${project.title}</h3>
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

function openNewProjectForm(){
    const projectsSection = document.querySelector(".projects");
    projectsSection.replaceChildren();
    projectsSection.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">New Project</h2>
                <div class="form-wrapper">
                <form class="form" action="#">
                        <label class="form-label" for="title">Project title:</label>
                        <input class="form-input" type="text" id="title" name="title" required>
                        <label class="form-label" for="due-date">Due Date:</label>
                        <input class="form-input" type="text" id="due-date" name="due-date" required>
                        <select id="urgency" name="urgency">
                            <option value="very-urgent">Very Urgent</option>
                            <option value="urgent">Urgent</option>
                            <option value="less-urgent">Somewhat Urgent</option>
                            <option value="not-urgent">Not Urgent</option>
                        </select>
                        <label class="form-label" for="description">Description:</label>
                        <input class="form-input" type="text" id="description" name="description" required>
                        <label for="notes">Additional Notes:</label>
                        <textarea id="notes" name="notes" rows="4" cols="75"></textarea>

                    <button class="btn-submit" type="submit">Submit</button>
                    <button class="btn-close">Close</button>
                </form>
            </div>
        </div>`    
}