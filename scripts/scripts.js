
/* Sign Out Button  */
function signOut(){
  localStorage.removeItem("user"); // remove login data
  alert("Logged out successfully");
  window.location.href = "index.html"; // redirect to login page
}


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
    manageSpinner(true);
    const issueContainer = document.getElementById("issue-card-container");
    issueContainer.innerHTML = "";
    
    issues.forEach(i => {
    
    const issueCardDiv = document.createElement("div");
    
    issueCardDiv.className = "bg-white rounded-xl shadow p-5 space-y-4";

    const priorityColor = i.priority === "high"? "bg-red-100 text-red-500":
     i.priority === "medium"? "bg-yellow-100 text-yellow-600": "bg-gray-100 text-gray-500";


    issueCardDiv.innerHTML = `
    <div id="details-issue-box" class="flex justify-between items-center">
       <img src="./assets/Open-Status.png">
    <span class="px-3 py-1 text-xs rounded-full ${priorityColor}">${i.priority.toUpperCase()}
    </span>
    </div>
    
    <h2 class="font-semibold text-lg md:text-2xl ">${i.title}</h2>
    
    <p class="text-gray-500 text-sm">${i.description}</p>
    
    <div class="flex gap-2">
    ${i.labels?.length ? createElement(i.labels) : ""}
    </div>
    
    <div class="border-t pt-3 text-sm text-gray-500">
    #${i.id || ""} by ${i.author} <br>
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
          <div class="bg-white rounded-xl shadow p-5 space-y-4">
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
    
          <h2 class="font-semibold text-lg md:text-2xl">${issue.title}</h2>
    
          <p class="text-gray-500 text-sm">${issue.description}</p>
    
          <div class="flex gap-2">
            ${issue.labels?.length ? createElement(issue.labels) : ""}
          </div>
    
          <div class="border-t pt-3 text-sm text-gray-500 flex flex-col md:flex-row justify-end gap-2">
            #${issue.id || ""} by ${issue.author}<br>
            ${new Date(issue.createdAt).toLocaleDateString()}

            <span onclick="loadIssueDetails('${issue.id}')" class="btn btn-xs font-semibold text-xs btn-outline">
            View Details
            </span>
          </div>

        `;
    
        issueContainer.appendChild(div);
        
      });
      manageSpinner(false);
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
      manageSpinner(false);
  }


  /* manage spinner while data take time to load*/
const manageSpinner = (status)  => {
    
  if(status === true){
      document.getElementById('spinner').classList.remove('hidden');
      document.getElementById('issue-card-container').classList.add('hidden');

  }
  else{
      document.getElementById('issue-card-container').classList.remove('hidden');
      document.getElementById('spinner').classList.add('hidden');
  }
}


/* Design and code for Modal */

const loadIssueDetails = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
 const res = await fetch(url);
 const details = await res.json();
 displayIssueDetails(details.data);
  
}

/* Modal Section and displaying details of specific word */
const displayIssueDetails = (issue) => {

  if(!issue){
    console.error("Issue not found");
    return;
  }
  const detailsBox = document.getElementById('details-container');

  detailsBox.innerHTML = `
 <div class="bg-white w-11/12 rounded-xl shadow-lg p-8 space-y-6">
     <h2 class=" font-bold text-lg md:text-2xl ">${issue.title || "No Title"}</h2>

    <div class="flex items-center gap-3 text-sm text-gray-500">
      <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
        ${issue.status.toUpperCase()}
      </span>
      <span>Opened by ${issue.author || "Unknown"}</span>
      <span>•</span>
      <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
    </div>

    <div class="flex gap-2">
      ${issue.labels?.length ? createElement(issue.labels) : ""}
    </div>

    <p class="text-gray-600">
      ${issue.description}
    </p>

    <div class="bg-gray-100 rounded-lg p-5 flex justify-between">

      <div>
        <p class="text-gray-500 text-sm">Assignee:</p>
        <p class="font-semibold">${issue.assignee || "Unassigned"}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Priority:</p>
        <span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
        ${issue.priority ? issue.priority.toUpperCase() : "LOW"}
        </span>
      </div>
        
    </div> 
    <div class="flex justify-end">
        <button onclick="closeModal()" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          Close
        </button>
      </div>
  </div>  
  `;

  document.getElementById('word_details_modal').showModal();
};


function closeModal(){
  document.getElementById("word_details_modal").close();
  document.getElementById("details-container").innerHTML = "";
}