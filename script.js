import { addTask } from "./Componentes/addTask.js";
import { displayTasks } from "./Componentes/readTasks.js";
const btn = document.querySelector('[data-form-btn]');


btn.addEventListener('click',addTask);
displayTasks()

