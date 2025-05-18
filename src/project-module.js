export { Project, myProjects };
class Project {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

function intializeProjects(arr) {
  function addProject(project) {
    arr.push(project);
  }
  const getProjects = () => arr;
  return { getProjects, addProject };
}

const myProjects = intializeProjects([]);
let firstProject = new Project(
  "Update PowerPoints",
  "update your PowerPoints for spring classes",
  "Jan 13, 2025",
  "medium",
  "remember to alter dates and update project descriptions on slides.",
);
myProjects.addProject(firstProject);
let secondProject = new Project(
  "Update syllabus",
  "update your 110 and 111 syllabi",
  "Jan 10, 2025",
  "urgent",
  "update project descriptions and calendar.",
);
myProjects.addProject(secondProject);
