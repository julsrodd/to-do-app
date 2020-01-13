function onReady(){
  let toDos = [];
  let toDoId = 1;
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText')
  const TODO_LIST = document.getElementById('toDoList')

  ADD_TODO_FORM.addEventListener('submit', (event) => {
   event.preventDefault();

    let title = NEW_TODO_TEXT.value;
    let todoObj = {
      name: title,
      id: toDoId
    }

    toDoId++;
    toDos.push(todoObj);

    let newLi = document.createElement('li'); //<li></li>
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      //console.log(event);
      //this parentElement represents the buttons <li> parent
      TODO_LIST.removeChild(this.parentElement);


    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
 };

window.onload = function() {
  onReady();

  };
