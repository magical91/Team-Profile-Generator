const generateTeam = team => {

    const generateManager = manager => {
       return `
       <div class="card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${manager.getRole()}</h5>
         <p class="card-text">${manager.getName()}</p>
         <p class="card-text">${manager.getId()}</p>
         <p class="card-text">${manager.getEmail()}</p>
         <p class="card-text">${manager.getOfficeNumber()}</p
       </div>
     </div>
        `
    }

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getRole()}</h5>
          <p class="card-text">${engineer.getName()}</p>
          <p class="card-text">${engineer.getId()}</p>
          <p class="card-text">${engineer.getEmail()}</p>
          <p class="card-text">${engineer.getGithub()}</p>
        </div>
      </div>
         `
     }

     const generateIntern = intern =>{
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getRole()}</h5>
          <p class="card-text">${intern.getName()}</p>
          <p class="card-text">${intern.getId()}</p>
          <p class="card-text">${intern.getEmail()}</p>
          <p class="card-text">${intern.getSchool()}</p>
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
        <title>Document</title>
    </head>
    <body>
        ${generateTeam(templateData)}
    </body>
    </html>
    `;
}