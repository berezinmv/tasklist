const list = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const isImportantCheckbox = document.getElementById('is-important');
const addTaskButton = document.getElementById('add-task');

function addListItem(text, isImportant) {
    const newListItem = document.createElement('li');

    newListItem.innerText = text;

    if (isImportant) {
        newListItem.classList.add('important');
    }

    list.appendChild(newListItem);
}

addTaskButton.addEventListener('click', function () {
    const text = newTaskInput.value;
    const isImportant = isImportantCheckbox.checked;

    if (!text) {
        return;
    }

    addListItem(text, isImportant);

    newTaskInput.value = '';
    isImportantCheckbox.checked = false;
});
