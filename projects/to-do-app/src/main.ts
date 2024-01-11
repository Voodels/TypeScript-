import './style.css'

interface Todo {
  title: string,
  isCompleted: boolean,
  readonly id: string,
}

const todos: Array<Todo> = [];

const todosContainer = document.querySelector('.todoContainer') as HTMLDivElement;
const todoInput = document.getElementById('iptodo') as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: ((Math.random() * 1000)).toString(),
  }
  todos.push(todo);
  todoInput.value = '';
  renderTodos(todos);
}

const generateTodoItem = (
  title: string,
  isCompleted: boolean,
  id: string
) => {
  const tododiv = document.createElement('div');
  tododiv.className = 'todo';

  // creating a checkbox
  const checkbox: HTMLInputElement = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.className = "isCompleted";
  checkbox.checked = isCompleted;

  //  
  checkbox.onchange = () => {
    p.className = checkbox.checked ? 'textCut' : '';
    todos.find(itm => {
      if (itm.id == id) {
        itm.isCompleted = checkbox.checked
      } else {

      }
    })


  }

  // creating a p tag
  const p: HTMLParagraphElement = document.createElement('p');
  p.innerText = title;
  p.className = isCompleted ? "textcut" : ""
  if (checkbox.checked == true) {
    p.className += "isCompleted";
  }

  // creating a delete button
  const deleteBtn: HTMLButtonElement = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'deleteBtn';
  // adding event listener to the delete button
  deleteBtn.onclick = () => {
    console.log(id);
    const idx = todos.findIndex(it => it.id == id)
    todos.splice(idx, 1);
    renderTodos(todos)
  }

  //appending all the elements to the todo div
  tododiv.append(checkbox, p, deleteBtn);
  todosContainer.append(tododiv);
}

const renderTodos = (todos: Todo[]) => {
  todosContainer.innerHTML = '';//clearing the container, so that we can render the updated todos list again 
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  })
}