

/* Searching feature */
document.getElementById("search-id").addEventListener("click", () => {

    removeActive();
    
    const searchInput = document.getElementById("input-search");
    const searchValue = searchInput.value.trim().toLowerCase();
    
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then(res => res.json())
    .then(data => {
    
    const issues = data.data;
    
    console.log(issues);
    
    displayLevelWord(issues);
    
    searchInput.value = "";
    
    })
  
    
    });

    /* TAB(ALL,OPEN & CLOSED) feature */



    /* Counting total issues */
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        document.getElementById("total-issue").innerText = data.data.length + ' Issues';
        // console.log(totalIssue);
      });

   /* Counting Total Open issues */


    /* Counting Total Close issues */



/* Task no-1:  All issues feature need to count */
const loadAllIssues = () =>{
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues') // Promise of response
    .then((res) => res.json()) // promise of json data
    .then((data) => displayissueById(data.data)) // log the data

     /* Counting total issues */
     
}


/* Calling Function */
loadAllIssues();


/* Task no-2: Displayed all issues by card*/
const displayissueById = (issues) => {

    const issueContainer = document.getElementById("issue-card-container");
    issueContainer.innerHTML = "";
    
    issues.forEach(i => {
    
    const issueCardDiv = document.createElement("div");
    
    issueCardDiv.className = "bg-white rounded-xl shadow p-5 space-y-4";

    const priorityColor = i.priority === "high"? "bg-red-100 text-red-500":
     i.priority === "medium"? "bg-yellow-100 text-yellow-600": "bg-gray-100 text-gray-500";


    issueCardDiv.innerHTML = `
    <div class="flex justify-between items-center">
       <img src="./assets/Open-Status.png">
    <span class="px-3 py-1 text-xs rounded-full ${priorityColor}">${i.priority.toUpperCase()}
    </span>
    </div>
    
    <h2 class="font-semibold text-lg">${i.title}</h2>
    
    <p class="text-gray-500 text-sm">${i.description}</p>
    
    <div class="flex gap-2">
    ${i.labels?.length ? createElement(i.labels) : ""}
    </div>
    
    <div class="border-t pt-3 text-sm text-gray-500">
    #1 by ${i.author} <br>
    ${new Date(i.createdAt).toLocaleDateString()}
    </div>
    `;
    
    issueContainer.append(issueCardDiv);
    
    });
    };

  
/* Managing Label color */
  function createElement(labels){

    return labels.map(label => {
    
    const labelColor =
    label === "bug"
    ? "bg-red-100  text-red-500"
    : label === "help wanted"
    ? "bg-yellow-100  text-yellow-600"
    : label === "enhancement"
    ? "bg-green-100  text-green-600 "
    : "bg-gray-100  text-gray-500";
    
    return `
    <span class=" px-2 py-1 text-xs font-normal rounded ${labelColor}">${label.toUpperCase()} </span>
    `;
    }).join("");
    
    }