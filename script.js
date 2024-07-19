document.addEventListener('DOMContentLoaded', () => {
	// Select DOM elements
	const addButton = document.getElementById('add-task');
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

		// Add click event listener to remove button
		removeButton.addEventListener('click', () => {
			taskList.removeChild(listItem);
		});

		// Append remove button and list item to task list
		listItem.appendChild(removeButton);
		taskList.appendChild(listItem);

		// Clear input field
		taskInput.value = '';
	}

	// Add event listeners
	addButton.addEventListener('click', addTask);
	taskInput.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	});
});
