// Node modules
const inquirer = require('inquirer');

// Link to page creation
const generateHTML = require('./src/generateHTML');

// Create empty Object to to store the answers
const teamArray = {
    manager: {},
    engineers: [],
    interns: [],
};
// Start Inquirer Prompts to store the Manager Data
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name: '
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter manager employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email address: '
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager office number: '
        }
    ]).then(manager => {
        // Push Manager Data to the Object/Array
        teamArray.manager = manager;
        //Run the Inquirer Prompts for the Employees

        addEmployee();
    });
}
// Funtion to continue Inquirer Prompts to store the Employee Data
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select an employee role:',
            choices: ['Engineer', 'Intern', 'Finish building team']
        }
    ]).then(answer => {
        if (answer.role === 'Engineer') {
            addEngineer();
        } else if (answer.role === 'Intern') {
            addIntern();
        } else {
            // Once all Data is captured run the generateHTML module
            generateHTML(teamArray);
            
            
            
        }
    });
}
// Start Inquirer Prompts to store the Engineer Data
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name: '
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter engineer employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email address: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub username: '
        },
        {
            type: 'input',
            name: 'githubUrl',
            message: 'Enter engineer GitHub URL: '
        }
    ]).then(engineer => {
        teamArray.engineers.push(engineer);
        addEmployee();
    });
}
// Start Inquirer Prompts to store the Intern Data
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern name: '
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter intern employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school: '
        }
    ]).then(intern => {
        teamArray.interns.push(intern);
        addEmployee();
    });
}

// Run the Inquirer Prompts to start the App
addManager();


