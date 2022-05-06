const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArr = [];

const DIST_DIR = path.resolve(__dirname, "dist");
const DIST_PATH = path.join(DIST_DIR, "index.html");



const promptManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your name?(Required)',
      validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log("Please enter your name!")
            return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is your employee ID?(Required)',
      validate: employeeIdInput => {
        if (employeeIdInput) {
            return true;
        } else {
            console.log("Please enter your Employee ID!")
            return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?(Required)',
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please enter your email!")
            return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?(Required)',
      validate: officeNumberInput => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log("Please enter your office number!")
            return false;
        }
      } 
    }
  ])
  .then(managerInput => {
    let { managerName, employeeId, email, officeNumber } = managerInput;
    let manager = new Manager (managerName, employeeId, email, officeNumber);

    employeeArr.push(manager);
    console.log(manager.name + ' added')
    addEmployee()
  })
};


const addEmployee = () => {
  return inquirer.prompt ([
    {
      type: "list",
      name: "employeeOption",
      message: "What would you like to do?",
      choices: ["Add Another Employee", "I'm Finished"],
    }
  ])
  .then(chosenOption => {
    if (chosenOption.employeeOption === 'Add Another Employee') {
      return employeeQuestions();
    } else {
      return buildTeam();
    }
  });
};


const employeeQuestions = () => {
  return inquirer.prompt ([
    {
      type: "list",
      name: "employeeType",
      message: "Who would you like to add?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "employeeName",
      message: "Enter the employee's name:",
      validate: employeeNameInput => {
        if (employeeNameInput) {
            return true;
        } else {
            console.log("Please enter employee's name!")
            return false;
        }
      } 
    },
    {
      type: "input",
      name: "employeeID",
      message: "Enter the employee's ID",
      validate: employeeIdInput => {
        if (employeeIdInput) {
            return true;
        } else {
            console.log("Please enter employee's ID!")
            return false;
        }
      } 
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "Enter the employee's email",
      validate: employeeEmail => {
        if (employeeEmail) {
            return true;
        } else {
            console.log("Please enter employee's email!")
            return false;
        }
      } 
    },
    {
      type: "input",
      name: "employeeGithub",
      message: "Enter the employee's github username",
      when: (answer) => answer.employeeType === "Engineer",
      validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log("Please enter employee's github!")
            return false;
        }
      } 
    },
    {
      type: "input",
      name: "employeeSchool",
      message: "Enter the employee's school",
      when: (answer) => answer.employeeType === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log("Please enter employee's school!")
            return false;
        }
      } 
    }
  ])
  .then((answer) => {

    switch(answer.employeeType) {
      case "Engineer":
      const engineer = new Engineer(answer.employeeName, answer.employeeID, answer.employeeEmail, answer.employeeGithub)
      employeeArr.push(engineer)
      break;

      case "Intern":
        const intern = new Intern(answer.employeeName, answer.employeeID, answer.employeeEmail, answer.employeeSchool)
        employeeArr.push(intern)
      break;
    }

    addEmployee()
  })
};


promptManager()


  function buildTeam(){
    if(!fs.existsSync(DIST_DIR)){
      fs.mkdirSync(DIST_DIR)
    }
    const pageHTML = generatePage(employeeArr);



    fs.writeFileSync(DIST_PATH, pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Page created! Checkout index.html in this directory to see it!")

    })
  }