(async function () {
  const response = await fetch("./data.json");
  const emps = await response.json();

  const emp_list = document.querySelector(".employee-names--list");
  const emp_info_list = document.querySelector(".employee-info--list");
  const add_emp_form = document.querySelector('.employeeForm');

  let selectedEmployeeId = emps.employees[0].employee_id;
  let selected_Employee = emps.employees[0];

  // Add Employee Logic
  add_emp_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form_data = new FormData(add_emp_form);
    const empData = Object.fromEntries(form_data.entries());
    empData.employee_id = emps.employees.length ? emps.employees[emps.employees.length - 1].employee_id + 1 : 1;
    emps.employees.push(empData);
    displayEmployees();
    add_emp_form.reset();
  });

  // Select Employee Logic
  emp_list.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== parseInt(e.target.id, 10)) {
      selectedEmployeeId = parseInt(e.target.id, 10);
      selected_Employee = emps.employees.find(
        (emp) => emp.employee_id === selectedEmployeeId
      );
      displayEmployees();
      displayEmployeeDetails();
    }

    // Removing employee from list
    if (e.target.tagName === 'I') {
      const employeeIdToRemove = parseInt(e.target.parentNode.id, 10);
      emps.employees = emps.employees.filter(emp => emp.employee_id !== employeeIdToRemove);
      if (selectedEmployeeId === employeeIdToRemove) {
        selectedEmployeeId = emps.employees[0]?.employee_id || -1;
        selected_Employee = emps.employees[0] || {};
        displayEmployeeDetails();
      }
      displayEmployees();
    }
  });

  // Display employee list
  const displayEmployees = () => {
    emp_list.innerHTML = "";
    emps.employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employee-names--item");

      if (selectedEmployeeId === emp.employee_id) {
        employee.classList.add("selected");
        selected_Employee = emp;
      }
      employee.setAttribute("id", emp.employee_id);
      employee.innerHTML = `${emp.first_name} ${emp.last_name} <i class="delete-emp">❌</i>`;
      emp_list.append(employee);
    });
  };

  // Display employee details
  const displayEmployeeDetails = () => {
    emp_info_list.innerHTML = `
      <img src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png" alt="${selected_Employee.first_name} ${selected_Employee.last_name}" />
      <span class="emp-details-single">${selected_Employee.first_name} ${selected_Employee.last_name}</span>
      <span>${selected_Employee.email}</span><br>
      <span>${selected_Employee.phone}</span><br>
      <span>${selected_Employee.hire_date}</span><br>
      <span>Department ID: ${selected_Employee.department_id}</span><br>
      <span>Role ID: ${selected_Employee.role_id}</span><br>
      <span>Salary: ${selected_Employee.salary}</span><br>
    `;
  };

  if (selected_Employee) displayEmployeeDetails();
  displayEmployees();
})();
