const Tasks = []; 

const inputtask = document.body.querySelector("#tache");

const addbutton = document.body.querySelector("#ajouBtn"); 

addbutton.addEventListener("click", clickhandle);

function clickhandle() {
   
    if (inputtask.value.trim() === "") { // Using .trim() is also good practice
        alert("Merci de me donner une tache");
        return;
    }

    const ullist = document.querySelector("#taskList");
    
    // Create the new list item
    const tache = document.createElement("li");
    
    // 2. Kept the value
    tache.innerText = inputtask.value; 

    // 4. FIXED: Correctly append the child
    ullist.appendChild(tache); 
    
    // 3. Pushing the task (if you need to track it in an array)
    Tasks.push(tache.innerText); // Store the text content, not the element itself

    // Create the 'done' button
    const btndonne = document.createElement("button");
    btndonne.textContent = "done";
    
    // Add a space or separator before the button for readability
    tache.appendChild(document.createTextNode(" ")); 
    tache.appendChild(btndonne);

    // Add click listener to the 'done' button
    btndonne.addEventListener("click", () => {
        // Toggle the 'done' class for styling
        tache.classList.toggle("done"); 
    });
    
    // 6. IMPROVEMENT: Clear the input field
    inputtask.value = "";
    
    // Set focus back to the input field
    inputtask.focus(); 
}


