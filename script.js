document.addEventListener('DOMContentLoaded', toDoFunc);

function toDoFunc() {
	// Select DOM elements
	const addButton = document.getElementById('add-task-btn');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	// Function to add a task
	function addTask() {
		const taskText = taskInput.value.trim();

		if (taskText === '') {
			alert('Please enter a task');
			return;
		}

		// Create list item and remove button
		const listItem = document.createElement('li');
		listItem.textContent = taskText;

		const removeButton = document.createElement('button');
		removeButton.textContent = 'Remove';
		removeButton.classList.add('remove-btn');

		// Remove task function
		removeButton.onclick = function () {
			taskList.removeChild(listItem);
		};

		// Append elements to the DOM
		listItem.appendChild(removeButton);
		taskList.appendChild(listItem);

		// Clear input field
		taskInput.value = '';
	}

	// Event listeners
	addButton.addEventListener('click', addTask);
	taskInput.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Initial task (optional)
	addTask(); // Uncomment to add an initial task
}
