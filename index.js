const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({

    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
});

const menuQuestion = [{
    name: "menu",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "View all employees",
        "View allcompany roles",
        "View all company departments",
        "Add an employee",
        "Add a company role",
        "Add a company department",
        "Update an employee role",
    ]
}];

const addEmployeeQuestion = [
    {
        name: "employee firstname",
        type: "input",
        message: "What is the employee's first name?",
    },
    {
        name: "employee lastname",
        type: "input",
        message: "What is the employee's last name?",
    },
    {
        name: "employee role",
        type: "list",
        message: "What is the employee's role?",
        choices: [
            "Sales Lead",
            "Salesperson",
            "Software Engineer",
            "Lead Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead"
        ],
    },
    {
        name: "employee superior",
        type: "list",
        message: "Who is the employee's manager?",
        choices: [employeeList(), "None"],
    },
];

const addRoleQuestion = [
    {
        name: "role tittle",
        type: "input",
        message: "What is the role title?",
    },
    {
        name: "role salary",
        type: "input",
        message: "What is the salary for the role?",
    },
    {
        name: "role department",
        type: "list",
        message: "What department of the role is belong to?",
        choices: [
            "Sales",
            "Engineering",
            "Finance",
            "Legal"
        ]
    },
];

const addDeptQuestion = [
    {
        name: "deptname",
        type: "input",
        message: "What is the name of the department?",
    },
    {
        name: "deptid",
        type: "list",
        message: "What is the department?",
        choices: [
            "Sales",
            "Engineering",
            "Finance",
            "Legal"
        ]
    }
];

