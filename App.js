// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.
const tasks = [];

//Adding Components
const root = document.getElementById("root");

//Heading
const heading = document.createElement("h1");
heading.textContent = "Mini Task-Tracker";
root.appendChild(heading);

//Input
const inputDiv = document.createElement("div");

const inputForm = document.createElement("form");

const inputLabel = document.createElement("label");
inputLabel.for = "task-input";
inputLabel.textContent = "Enter Task to add: ";


const inputBar = document.createElement("input");
inputBar.type = "text";
inputBar.name = "added-task";
inputBar.id = "task-input";

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "ADD";

inputForm.appendChild(inputLabel);
inputForm.appendChild(document.createElement("br"));
inputForm.appendChild(inputBar);
inputForm.appendChild(document.createElement("br"));
inputForm.appendChild(submitButton);

inputDiv.appendChild(inputForm);

root.appendChild(inputDiv);

listDiv = document.createElement("div");
root.appendChild(listDiv);


//Logic Methods
function addTask(title){
    const task = {
        id : undefined,
        name : title,
        isDone : false 
    }

    tasks.push(task);
    task.id = tasks.indexOf(task);
}


function updateList(){

    listDiv.innerHTML = "";

    uList = document.createElement("ul");
    uList.style.listStyleType = "none";

    for(let i = 0; i < tasks.length; i++){
    
        let listItem = document.createElement("li");
        listItem.id = "list" + i;
        let taskName = tasks[i].name;
        /* listItem.innerHTML = `<input type="checkbox" id="box"${i} class="check"/>
                            <label for="box"${i}>${taskName}</label>`;
        const check = document.getElementsByClassName("check")[i];
       // if(checks[i].checked){} */
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "check" + i;
        let checkLabel = document.createElement("label");
        checkLabel.textContent = tasks[i].name;
        checkLabel.htmlFor = "check" + i;

        checkBox.addEventListener("change", () => {
            if(checkBox.checked){
            checkLabel.style.textDecoration = "line-through";
            }
            else{
                checkLabel.style.textDecoration = "none";
            }
        });

        const delButton = document.createElement("button")
        delButton.textContent = "Del";
        delButton.addEventListener("click", () =>{
            console.log(tasks[i].name + " was deleted");
            tasks.splice(i,1);
            listItem.innerHTML = "";
        }); 
        
        listItem.appendChild(checkBox);
        listItem.appendChild(checkLabel);
        listItem.appendChild(delButton);

        uList.appendChild(listItem);
        console.log("" + i)

    }

    listDiv.appendChild(uList);

    root.appendChild(listDiv);
}

function deleteTask(title){

    
    let toDelete = tasks[id];
    tasks.pop(toDelete);
}


//EventListeners
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if(inputBar.value === ""){
        alert("Enter a task");
    }else{
        const input = inputBar.value.trim();
        addTask(input);
        updateList();
    }

    //console.log(tasks[0].name);

    inputBar.value = " ";
});

//styles
document.addEventListener("DOMContentLoaded", () => {
document.body.style.margin = "0";
document.body.style.fontFamily = "Segoe UI, sans-serif";
document.body.style.backgroundColor = "#1e1e1e";
document.body.style.color = "#f0f0f0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "flex-start";
document.body.style.minHeight = "100vh";
document.body.style.paddingTop = "40px";

submitButton.style.padding = "5px";
submitButton.style.marginTop = "5px"
submitButton.style.fontWeight = "bold";
submitButton.style.alignSelf = "center";

root.style.width = "100%";
root.style.maxWidth = "600px";
root.style.padding = "20px";
root.style.boxSizing = "border-box";

heading.style.textAlign = "center";
heading.style.marginBottom = "20px";
heading.style.color = "#ffffff";


});
