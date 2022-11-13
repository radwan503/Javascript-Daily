



const saveIssue = (e) => {
   e.preventDefault();
   const issueDesc = document.getElementById('issueDescInput').value;
   const issueSeverityInput = document.getElementById('issueSeverityInput').value;
   const issueAssainToInput = document.getElementById('issueAssainToInput').value;
   const issueId = chance.guid();
   const issueStatus = 'open';

   const issue = {
      id: issueId,
      description: issueDesc,
      severity: issueSeverityInput,
      assignTo: issueAssainToInput,
      issueStatus: issueStatus
   }

   if (localStorage.getItem('issues') == null) {
      const issues = [];
      issues.push(issue);
      localStorage.setItem('issues', JSON.stringify(issues));
   } else {
      const issues = JSON.parse(localStorage.getItem('issues'))
      issues.push(issue);
      localStorage.setItem('issues', JSON.stringify(issues));
   }

   document.getElementById('issueInputForm').reset();

   fetchIssue();



}
document.getElementById('issueInputForm').addEventListener('submit', saveIssue)


const fetchIssue = () => {

   const issues = JSON.parse(localStorage.getItem('issues'));
   const issueList = document.getElementById('issueList')

   issueList.innerHTML = " ";

   for (let i = 0; i < issues.length; i++) {
      const id = issues[i].id;
      const desc = issues[i].desc;
      const severity = issues[i].severity;
      const assignTo = issues[i].assignTo;
      const status = issues[i].status;

      issueList.innerHTML = `
         <div class="card w-75">
            <div class="card-body">
            <h5 class="card-title">Issue ID ${id}</h5>
            <p><span class="badge rounded-pill bg-primary">${status}</span></p>
            <p class="card-text"> ${desc}</p>
            <p class="card-text"><i class="bi bi-alarm"></i> ${severity}</p>
            <p class="card-text"><i class="bi bi-people-fill"></i> ${assignTo}</p>
            
            <a href="#" onClick="setStatsuClose(${id})" class="btn btn-warning">Close</a>
            <a href="#" onClick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
            </div>
         </div>
      
      `
   }



}
