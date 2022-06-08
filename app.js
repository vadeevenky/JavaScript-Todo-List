
// getting class or creating variables
// selectors

var todoList = document.querySelector('.todo-list');
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');

// console.log(todoList);
// console.log(todoInput);
// console.log(todoButton);


// Add EventListeners 

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteList);



// Functions 

function addTodo(event){
    // console.log("clicked from the button");

    // prevent default behaviour
      event.preventDefault();

    
 

    // const  value = todoForm.querySelector(input[type ='text']).value;


    // creating Elements (div,li,button,)
       
    const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');
    // create li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    todoLi.textContent = todoInput.value;

      // append the elements
    todoDiv.appendChild(todoLi);
    

    //creating  CHECK Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    // add className  check mark button
    completedButton.classList.add("complete-btn");
      
    // append completedButton
    todoDiv.appendChild(completedButton);

    //create  trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
 
todoDiv.appendChild(trashButton);
    
todoList.appendChild(todoDiv);


todoInput.value = " ";

 }

 function deleteList(e){
     
//    const item = e.target.parentElement;
//  console.log(item);
//    console.log(item.parentNode);
//    item.parentNode.removeChild(item);

// another logic  for delete
const item = e.target;
console.log(item);
// Delete TODO
if(item.classList[0] === "trash-btn") {
    // console.log(typeof item.classList[0]);
    const todo = item.parentElement;
    // console.log(todo);
    todo.remove();
}
    
 }