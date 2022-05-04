const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')

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
      message: 'What is your Employee ID?(Required)',
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
  ]);
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
      return chosenOption;
    }
  });
};


const employeeQuestions = employeeData => {
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
};


promptManager()
  .then(addEmployee)
  .then(employeeQuestions)
  .then(employeeData => {
    const pageHTML = generatePage(employeeData);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Page created! Checkout index.html in this directory to see it!")

    })
  })