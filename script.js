 // Function to create a new todo item
 function createTodoItem(text) {
     const li = document.createElement("li");
     li.innerHTML = `
     <input type="checkbox">
     <span>${text}</span>
     <button class="edit">Edit</button>
     <button class="delete">Delete</button>
     `;

     const checkbox = li.querySelector("input[type=checkbox]");
     const deleteButton = li.querySelector(".delete");
     const editButton = li.querySelector(".edit");
     const todoText = li.querySelector("span");

     checkbox.addEventListener("change", function () {
       if (checkbox.checked) {
         todoText.classList.add("completed");
       } else {
         todoText.classList.remove("completed");
       }
     });

     deleteButton.addEventListener("click", function () {
       li.remove();
     });

     editButton.addEventListener("click", function () {
       const newText = prompt("Enter new text");
       if (newText) {
         todoText.textContent = newText;
       }
     });

     return li;
   }

   // Function to handle form submission
   function handleFormSubmit(event) {
     event.preventDefault();
     const todoInput = document.getElementById("todo-input");
     const todoList = document.getElementById("todo-list");

     const text = todoInput.value.trim();
     if (text) {
       const todoItem = createTodoItem(text);
       todoList.appendChild(todoItem);
       todoInput.value = "";
     }
   }

   // Add form submission event listener
   const todoForm = document.getElementById("todo-form");
   todoForm.addEventListener("submit", handleFormSubmit);
//    todo list code here 

