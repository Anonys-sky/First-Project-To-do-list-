const inputBox = document.getElementById("TextBox");

inputBox.addEventListener("keypress", function(event)  // event listener for enter key
{
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
const listContainer = document.getElementById("list-container"); // store HTML element through id into variable
function addTask() // defines addtask which runs when Add is clicked
{  
    if(inputBox.value ===''){ 
        alert("Type something! The cat needs input!"); // if no type anything then alert
    } else {
        let li = document.createElement("li"); // create li element
        li.innerHTML = inputBox.value; // put input into li
        listContainer.appendChild(li); // add li to ul ( make it seen on page)

        let span = document.createElement("span"); // create span element
        span.innerHTML = "\u00d7"; // x symbol to delete task
        li.appendChild(span); // add span to li

}
inputBox.value = ""; // clear input box after adding task
saveData();
}
listContainer.addEventListener("click", function(e) // event listener for listcontainer
{
    if(e.target.tagName === "LI") // if li is clicked
        {
        e.target.classList.toggle("checked");
        saveData()

    } else if(e.target.tagName === "SPAN") // if span which is x is clicked
        {
        e.target.parentElement.remove(); // remove the task (li)
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // save list so its not gone when refresh

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); // shows prev task when page loads

//Show current time on top
function showTime() {
  const timeDisplay = document.getElementById("timeDisplay");
  const now = new Date();

//Format time 
  const timeString = now.toLocaleTimeString(); 

  timeDisplay.textContent = timeString; // Update time display
}

// Run immediately and update every second
showTime();
setInterval(showTime, 1000);