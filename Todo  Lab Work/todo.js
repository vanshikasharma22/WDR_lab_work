// Initialize empty array to store tasks
let task_array = [];

// Add a task to the list
// trigggerred when user click add task
function addtask() {
    //  fetch value d=from input field and remove extra space
  const data = document.getElementById("task").value.trim();
 // check input is not empty
  if (data !== "") {
    // clear previous created array
    document.getElementById("error_msg").innerText = "";
    // use the current array as length
    const task_index = task_array.length;
    // Push the task into our array
    task_array.push(data);
    // display task on screen
    displayTask(data, task_index);
  } else {
    // show error message if user tried to enter empty task
    document.getElementById("error_msg").innerText = "Blank text not allowed";
  }
   // Reset input task
  document.getElementById("task").value = "";
}

// Display task in the list
function displayTask(task_data, index) {
    // create li element for task
  const listitem = document.createElement("li");
  // for giving unique Id like list-1 , list-2
  listitem.id = "list-" + index;
  //create a span to hold task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = task_data;
  taskSpan.classList.add("task-text");

  // Mark as completed Complete button 
  const complete_button = document.createElement("button");
  complete_button.id = "complete-" + index;
  complete_button.textContent = "Mark As Complete";
  complete_button.classList.add("complete-btn");
 // when the  button is clicked
  complete_button.onclick = function () {
    // get the button's ID
    const btn_id = this.id;
    // extract the index by slplit by -
    const data = btn_id.split("-");
    // find the corresponding list item
    const li_id = "list-" + data[1];
    // get the desired li
    const listItem = document.getElementById(li_id);
  // chnage text colour of task to green
    listItem.querySelector(".task-text").style.color = "green";
    // update button
    this.textContent = "Completed";
    // to disable button
    this.disabled = true;
    // add class for disbale buttton
    this.classList.add("disabled-btn");
  };

  // Delete button
  const delete_button = document.createElement("button");
  delete_button.id = "delete-" + index;
  delete_button.textContent = "Delete";
  delete_button.classList.add("delete-btn");

  delete_button.onclick = function () {
    // get the id of the button
    const btn_id = this.id;
    // extract task index from button id
    const data = btn_id.split("-");
    // create the list itme id
    const li_id = "list-" + data[1];
    // delete the task from array
    delete task_array[data[1]];
    // remove the list from display 
    document.getElementById(li_id).remove();
    // print the updated task array into console
    console.log(task_array);
  };
 // append item to list
  listitem.appendChild(taskSpan);
  listitem.appendChild(complete_button);
  listitem.appendChild(delete_button);
 // Append the new li into ul ----> tasklist
  document.getElementById("tasklist").appendChild(listitem);
}
