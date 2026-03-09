
/* Remove Active status to All buttons */
// const removeActive =() => {
//   const issueCountBtn = document.querySelectorAll('.issue-btn');
//   console.log(issueCountBtn);
//   issueCountBtn.forEach(btn => {
//   btn.classList.remove('tab-active');
//      })

//  }


let allIssues = [];

/* Searching feature */
function searchIssues(){

  const searchInput = document.getElementById("input-search");
  const searchValue = searchInput.value.trim().toLowerCase();

  if(!searchValue){
    issues = allIssues;
    renderIssues();
    updateTotalIssueNumber(issues.length);
    return;
  }

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    .then(res => res.json())
    .then(data => {

      issues = data.data;
      console.log(issues.length);
      
      renderIssues();
      updateTotalIssueNumber(issues.length);

      searchInput.value = "";

    })
    .catch(err => console.error("Search error:", err));

}

/* Add "Enter" key for searching */
document.getElementById("search-id").addEventListener("click", searchIssues);
document.getElementById("input-search").addEventListener("keydown", (e) => {
 if(e.key === "Enter"){
      searchIssues();
    }

});

    let issues = [];
    let currentStatus = "all";

        /* Get All DOM Elements by their Attributes */
      const filerSection = document.getElementById('filtered-section');
      const displayCountJob = document.getElementById("issue-card-container");  




/* Task no-1:  All issues feature need to count */
    function loadAllIssues(){

     fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => {

      issues = data.data;
      allIssues = data.data;
      renderIssues();
      

    });

}



/* Calling Function */
loadAllIssues();


/* Task no-2: Displayed all issues by card*/
const displayissueById = (issues) => {

    const issueContainer = document.getElementById("issue-card-container");
    issueContainer.innerHTML = "";
    
    issues.forEach(i => {
    
    const issueCardDiv = document.createElement("div");
    
    issueCardDiv.className = "allIssue bg-white rounded-xl shadow p-5 space-y-4";

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


  /* Managing all by Render function  */  
    function renderIssues(){

      const issueContainer = document.getElementById("issue-card-container");
      issueContainer.innerHTML = "";
    
      let filteredIssues = issues;
    
      if(currentStatus === "open"){
        filteredIssues = issues.filter(issue => issue.status === "open");
      }
    
      if(currentStatus === "closed"){
        filteredIssues = issues.filter(issue => issue.status === "closed");
      }
    
      updateTotalIssueNumber(filteredIssues.length);
    
      if(filteredIssues.length === 0){
        issueContainer.innerHTML = `
          <div class="hero bg-base-200 min-h-screen py-6 mx-auto">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <h1 class="text-3xl font-bold">No Issues Found</h1>
              </div>
            </div>
          </div>
        `;
        return;
      }
    
      filteredIssues.forEach(issue => {
    
        const div = document.createElement("div");

        const statusBorder =
        issue.status === "open"
          ? "border-t-4 border-green-500"
          : "border-t-4 border-fuchsia-500";
       
          const statusImage =
          issue.status === "open"
          ? "./assets/Open-Status.png"
          : "./assets/Closed-Status.png";


        const priorityColor =
          issue.priority === "high"
          ? "bg-red-100 text-red-500"
          : issue.priority === "medium"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-gray-100 text-gray-500";
    
        div.className = `bg-white rounded-xl shadow p-5 space-y-4 ${statusBorder}`;
    
        div.innerHTML = `
          <div class="flex justify-between items-center">
          <img src="${statusImage}">
            <span class="px-3 py-1 text-xs rounded-full ${priorityColor}">
              ${issue.priority.toUpperCase()}
            </span>
          </div>
    
          <h2 class="font-semibold text-lg">${issue.title}</h2>
    
          <p class="text-gray-500 text-sm">${issue.description}</p>
    
          <div class="flex gap-2">
            ${issue.labels?.length ? createElement(issue.labels) : ""}
          </div>
    
          <div class="border-t pt-3 text-sm text-gray-500">
            #1 by ${issue.author}<br>
            ${new Date(issue.createdAt).toLocaleDateString()}
          </div>
        `;
    
        issueContainer.appendChild(div);
    
      });
    
    }

/* Calling function for all calculation */
    function updateTotalIssueNumber(count){

      const totalIssue = document.getElementById("total-issue");
    
      if(currentStatus === "open"){
        totalIssue.textContent = count + " Open Issues";
      }
      else if(currentStatus === "closed"){
        totalIssue.textContent = count + " Closed Issues";
      }
      else{
        totalIssue.textContent = count + " Issues";
      }
    
    }

    /* Toggle TAB(ALL,OPEN & CLOSED) feature */
    // function filterJobs(status){

    //   currentStatus = status;
    
    //   renderIssues();
    //   removeActive();
   
    // }

    function filterJobs(status) {
      currentStatus = status;
  
      document.querySelectorAll(".issue-btn")
          .forEach(btn => btn.classList.remove("btn-active"));
  
      if (status === "all") {
          document.getElementById("all-issue").classList.add("btn-active");
          
      } else if (status === "open") {
          document.getElementById("open-issue-tab").classList.add("btn-active");
          document.getElementById("all-issue").classList.remove("btn-active");
          document.getElementById("closed-issue-tab").classList.remove("btn-active");

      } else if (status === "closed")
      {
          document.getElementById("closed-issue-tab").classList.add("btn-active");
          document.getElementById("all-issue").classList.remove("btn-active");
          document.getElementById("open-issue-tab").classList.remove("btn-active");
      }
      else {

      }
  
      renderIssues();
  }