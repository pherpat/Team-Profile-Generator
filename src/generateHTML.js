const fs = require('fs');


function generateHTML(teamArray){
  
//console.log(teamArray);
    
//const myJSON = JSON.stringify(teamArray);

let managerCard = `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h4>${teamArray.manager.name}</h4>
            <i class="fa-solid fa-mug-hot"></i><h5>Manager</h5>
        </div>

        <div class="card-body">
            <p class="id">ID: ${teamArray.manager.employeeId}</p>
            <p class="email">Email: <a href="mailto:${teamArray.manager.email}">${teamArray.manager.email}</a></p>
            <p class="office">Office Number: ${teamArray.manager.officeNumber}</p>
        </div>

    </div>
</div>
    `;

    const engineerElements = [];
    const engineers = teamArray.engineers;
    for (let i = 0; i < engineers.length; i++) {
      const engineer = engineers[i];
      const name = engineer.name;
      const employeeId = engineer.employeeId;
      const email = engineer.email;
      const github = engineer.github;
    
      const engineerElement = `
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>${name}</h4>
              <i class="fa-solid fa-glasses"></i><h5>Engineer</h5>
          </div>

          <div class="card-body">
              <p class="id">ID: ${employeeId}</p>
              <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
              <p class="school">GitHub: ${github}</p>
          </div>
  </div>
</div>
      `;
      engineerElements.push(engineerElement);

    }
    let engineersHTML = engineerElements.join('');
  
  ///////////////////////////////////
    const internElements = [];
    const interns = teamArray.interns;
    for (let i = 0; i < interns.length; i++) {
      const intern = interns[i];
      const name = intern.name;
      const employeeId = intern.employeeId;
      const email = intern.email;
      const school = intern.school;
    
      const internElement = `
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>${name}</h4>
              <i class="fa-solid fa-user-graduate"></i><h5>Intern</h5>
          </div>

          <div class="card-body">
              <p class="id">ID: ${employeeId}</p>
              <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
              <p class="school">School: ${school}</p>
          </div>
  </div>
</div>
      `;
      internElements.push(internElement);

    }
    let internsHTML = internElements.join('');

/////////////////////////////////////

const mainContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- icons -->
    <script src="https://kit.fontawesome.com/acb810cf38.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
<div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3 team-heading jumbotron bg-info text-white">
        <h1 class="text-center">My Team</h1>
      </div>
    </div>
  </div>
</header>
<main>
<div class="container">
            <div class="row justify-content-center" id="team-cards">
            ${managerCard}${engineersHTML}${internsHTML}
            </div>
</div>
        
</main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>`;
const content = mainContent;
    

fs.writeFile('dist/index.html', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });


/////////////////////

};


/////////////////////

 module.exports = generateHTML; 
 //module.exports = generatePAGE; 

    