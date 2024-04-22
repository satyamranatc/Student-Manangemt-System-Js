let MyForm = document.getElementById("MyForm");
let ListOfData = document.getElementById("ListOfData");

let allStudents = [];

MyForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let Obj = {
        Id: e.target[0].value,
        Name: e.target[1].value,
        Age: e.target[2].value,
        Class: e.target[3].value,
    }
    allStudents.push(Obj);
    console.log(allStudents);
    Display();
})


function Display()
{

ListOfData.innerHTML = ""
allStudents.forEach((e)=>{
    ListOfData.innerHTML += `
    <div class='Card'>
    <h1>${e.Id}</h1>
    <h1>${e.Name}</h1>
    <h1>${e.Age}</h1>
    <h1>${e.Class}</h1>
    </div>`
})
}

