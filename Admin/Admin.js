let FromData = document.getElementById("FormData");
let AddDataForm = document.getElementById("AddDataForm")
let FromBtns = document.getElementsByClassName("FormBtns");

let AllStudents = [];


FromBtns[0].addEventListener("click",()=>{
    // Create form element
var form = document.createElement("form");
form.id = "AddDataForm";

// Create input elements
var idInput = document.createElement("input");
idInput.type = "text";
idInput.placeholder = "Id";
form.appendChild(idInput);

form.appendChild(document.createElement("br"));

var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
form.appendChild(nameInput);

form.appendChild(document.createElement("br"));

var ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.placeholder = "Age";
form.appendChild(ageInput);

form.appendChild(document.createElement("br"));

var classInput = document.createElement("input");
classInput.type = "number";
classInput.placeholder = "Class";
form.appendChild(classInput);

form.appendChild(document.createElement("br"));

var sectionInput = document.createElement("input");
sectionInput.type = "text";
sectionInput.placeholder = "Section";
form.appendChild(sectionInput);

form.appendChild(document.createElement("br"));

// Create button element
var addButton = document.createElement("button");
addButton.textContent = "Add Data";
form.appendChild(addButton);

// Append form to the document body
FromData.appendChild(form);

// Add event listener to the button
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let id = idInput.value;
    let name = nameInput.value;
    let age = ageInput.value;
    let class_ = classInput.value;
    let section = sectionInput.value;

    let Student = {
        Id: id,
        Name: name,
        Age: age,
        Class: class_,
        Section: section
    }

    AllStudents.push(Student);

})

})

FromBtns[1].addEventListener("click",()=>{
    FromData.innerHTML = `
    <form>
    <input type="text" placeholder="Id">
    <br>
    <input type="text" placeholder="Name">
    <br>
    <input type="number" placeholder="Class">
    <br>
    <input type="text" placeholder="Section">
    <button>Update Data</button>
    </form>
    
    
    `
})

FromBtns[2].addEventListener("click",()=>{
    FromData.innerHTML = `
    <form>
    <input type="text" placeholder="Id">
    <button>Delete Data</button>
    </form>
    
    
    `
})


