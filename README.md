# Employee_Management_System
# Employee Management System

## Overview

The Employee Management System is a simple web application designed to manage employee data. It allows users to add, view, and delete employee records. The system fetches initial data from a JSON file and dynamically updates the displayed employee list and details.

## Features

- Fetch and display a list of employees from a JSON file.
- Add new employees to the list.
- Select and view detailed information about an employee.
- Delete employees from the list.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

To run this project locally, you need a web browser and a local server to serve the JSON file.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/Employee_Management_System.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Employee_Management_System
    ```

3. **Serve the project locally:**

    You can use any local server to serve the project. Here are a couple of options:

    - **Using Python (version 3.x):**

        ```sh
        python -m http.server
        ```

    - **Using VS Code Live Server Extension:**

        Install the Live Server extension in VS Code and click on "Go Live".

### Usage

1. Open your web browser and navigate to `http://localhost:8000` (or the port number provided by your local server).
2. You will see a list of employees fetched from `src/data.json`.
3. Use the form to add new employees.
4. Click on an employee's name to view their details.
5. Click the delete icon (❌) next to an employee's name to remove them from the list.

## Project Structure

```plaintext
Employee_Management_System/
├── src/
│   ├── data.json
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── README.md
└── .gitignore
