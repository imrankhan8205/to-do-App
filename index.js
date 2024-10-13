// Select elements
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let popup = document.getElementById('popup');

// Function to show pop-up notification
function showPopup() {
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000); // Hide the pop-up after 2 seconds
}

// Add task function
btn.addEventListener("click", function () {
    let taskText = inp.value.trim(); // Trim white spaces
    if (taskText === "") return; // Prevent adding empty tasks

    let items = document.createElement('li');
    items.innerText = taskText;

    // Create delete button for each task
    let delbtn = document.createElement('button');
    delbtn.innerText = '✖'; // Use an icon for delete button
    delbtn.classList.add('delete');
    items.appendChild(delbtn);

    // Add to task list
    ul.appendChild(items);
    inp.value = ""; // Clear input field

    // Show the pop-up notification
    showPopup();
});

// Mark tasks as completed and delete tasks
ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listitems = event.target.parentElement;
        listitems.remove(); // Remove task from list
    } else if (event.target.nodeName === "LI") {
        event.target.classList.toggle('completed'); // Mark task as completed
    }
});
