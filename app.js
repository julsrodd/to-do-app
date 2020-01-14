function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  toDos.push({
    title: newToDoText.value,
    complete: false

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });
    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');
      if (!newToDoText.value) { return; }

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        });

    }

    newToDoText.value = '';

    renderTheUI();
  }

 }

window.onload = function() {
  onReady();

  };
