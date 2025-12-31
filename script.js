const userInput = document.getElementById('task-input');
const addBtn = document.getElementById('btn-add');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
  console.log('addBtn clicked');

  const taskText = userInput.value;
  console.log(taskText);

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const itemList = document.createElement('li');

  const textSpan = document.createElement('span');
  textSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';

  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(itemList);
  });

  itemList.appendChild(textSpan);
  itemList.appendChild(deleteBtn);

  taskList.appendChild(itemList);
  // taskList.appendChild(itemList);
  userInput.value = '';

  deleteBtn.classList.add('delete-btn');
});

userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addBtn.click();
  }
})