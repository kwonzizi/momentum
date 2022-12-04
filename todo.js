const toDoForm = document.getElementById("todo-Form");
const toDoInput = toDoForm.querySelector("#todo-Form input");
const toDoList = document.getElementById("todo-List");

let toDos = []; 
const ToDOS_KEY ="todos";

function savedTOdo(){
    localStorage.setItem(ToDOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
   

    const li = event.target.parentElement;
    
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    

    savedTOdo();

}

function paintTodo(newTodo) {
    const li = document.createElement("ol");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    
    
    button.innerText = "✏️";
    
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span); 
    li.appendChild(button);
    
    toDoList.appendChild(li);

    
    
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), 
                        
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    savedTOdo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(ToDOS_KEY) 
                                               

if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    toDos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
