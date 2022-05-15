const generateTeam = team => {

    const generateManager = manager => {
       return `
       <div class="card" style="width: 18rem;">
       <div class="card-body">
         <h4 class="card-title text-decoration-underline text-center">${manager.getRole()}</h4>
         <p class="card-text">Name: ${manager.getName()}</p>
         <p class="card-text">Id: ${manager.getId()}</p>
         <a href="mailto:${manager.getEmail()}" class="card-text text-decoration-none">${manager.getEmail()}</a>
         <br>
         <br>
         <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
       </div>
     </div>
        `
    }

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title text-decoration-underline text-center">${engineer.getRole()}</h4>
          <p class="card-text">Name: ${engineer.getName()}</p>
          <p class="card-text">Id: ${engineer.getId()}</p>
          <a href="mailto:${engineer.getEmail()}" class="card-text text-decoration-none">${engineer.getEmail()}</a>
          <br>
          <br>
          <a href="https://github.com/${engineer.getGithub()}" class="card-text text-reset text-decoration-none">Github: ${engineer.getGithub()}</a>
        </div>
      </div>
         `
     }

     const generateIntern = intern =>{
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title text-decoration-underline text-center">${intern.getRole()}</h4>
          <p class="card-text">Name: ${intern.getName()}</p>
          <p class="card-text">Id: ${intern.getId()}</p>
          <a href="mailto:${intern.getEmail()}" class="card-text text-decoration-none">${intern.getEmail()}</a>
          <br>
          <br>
          <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
      </div>
         `
     }

     const finalHTML = [];

     finalHTML.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));

     finalHTML.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""));

     finalHTML.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""));

     return finalHTML.join("")

}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel=stylesheet" href="./style.css" />
        <title>Team Profile</title>
    </head>
    <body>
      <header>
        <h1 class="text-center text-info bg-danger">
          Team Profile
        </h1>  
      </header>

        <div class="d-flex justify-content-around">
            ${generateTeam(templateData)}
        </div>    
    </body>
    </html>
    `;
}