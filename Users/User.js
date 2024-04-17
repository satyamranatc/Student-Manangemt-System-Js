let ListOfData = document.getElementById("ListOfData");

let Students = [
    {
        Id: 1,
        Name: "Harsh",
        Age: 23,
        Class: 10,
        Section: "A"
    },
    {
        Id: 2,
        Name: "Ajay",
        Age: 23,
        Class: 10,
        Section: "A"
    },
    {
        Id: 3,
        Name: "Jaya",
        Age: 23,
        Class: 10,
        Section: "A"
    },
    {
        Id: 4,
        Name: "Mohan",
        Age: 23,
        Class: 10,
        Section: "A"
    },
    {
        Id: 5,
        Name: "Naman",
        Age: 23,
        Class: 10,
        Section: "A"
    },
]

function DisplayData()
{
    Students.map((e)=>{
        ListOfData.innerHTML += `
        
        <div class="Card">
        <h2>Id:${e.Id} - Name:${e.Name}</h2>
        <h3>Age:${e.Age}</h3>

        <span>
          <h3>Class:${e.Class}</h3>
          <h3>Section:${e.Section}</h3>
        </span>
      </div>
        
        `
    })
}

DisplayData()