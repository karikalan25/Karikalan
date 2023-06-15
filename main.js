const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    frame:false,
    webPreferences: {
      // Set your Content Security Policy here
      // For example, to allow only local file and scripts:
      
    }
  });

  // Load your app's main HTML file here
  mainWindow.loadFile('./home/index.html');

});

//student validation
function validateForm_student(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

  // Perform validation (e.g., check if the input is not empty)
  if (rollNumber === "20bcs001" && password === "student") {
    // Validation successful, open another HTML file
    window.location.href = "../student details/student-details.html";
  } else {
    // Validation failed, display an error message or take appropriate action
    alert("roll number or password is incorrect");
  }
}

//student admin validation
function validateForm_studentadmin(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

  // Perform validation (e.g., check if the input is not empty)
  if (rollNumber === "20bcs002" && password === "faculty") {
    // Validation successful, open another HTML file
    window.location.href = "../student details/student-details.html";
  } else {
    // Validation failed, display an error message or take appropriate action
    alert("roll number or password is incorrect");
  }
}

//faculty validation
function validateForm_faculty(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var rollNumber = document.getElementById("rollnumber").value;
  var password = document.getElementById("password").value;

  // Perform validation (e.g., check if the input is not empty)
  if (rollNumber === "admin" && password === "admin123") {
    // Validation successful, open another HTML file
    window.location.href = "../faculty details/faculty-details.html";
  } else {
    // Validation failed, display an error message or take appropriate action
    alert("roll number or password is incorrect");
  }
}

//admin validation
function validateForm_admin(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var rollNumber = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform validation 
  if (rollNumber === "20bcs000" && password === "madara") {
    // Validation successful, open another HTML file
    window.location.href = "../admin details/admin-details.html";
  } else {
    // Validation failed, display an error message or take appropriate action
    alert("username or password is incorrect");
  }
}

//change password
function change_password(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var current_password = document.getElementById("curr-password").value;
  var new_password = document.getElementById("new-password").value;
  var conform_password = document.getElementById("conf-password").value;

  // Perform validation 
  if (current_password != "" && new_password != "" && conform_password != "") {
    // Validation successful, open another HTML file
    if(new_password === conform_password) {
      alert("password changed");
    }
    else {
      alert("new password not matched");
    }
  } else {
    // Validation failed, display an error message or take appropriate action
    alert("fill all the field");
  }
}

//money added 
function added(event) {
  var money = document.getElementById('add').value;
  if(money > 0) {
    alert("money added");
    window.location.href("../admin details/admin-details.html");
  }
}

//admin update
function admin_update(event,value) {
  console.log("button clicked",value);
  localStorage.setItem(value,"display");
}

function add(event,value) {
  //const buttonValue = event.target.value;
  console.log("Clicked button value:", value);

  // Create a new list item
  const label = document.createElement('label');
  label.setAttribute('id',value);
  label.textContent = value;

  // Create a new input element
  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('id',value+'inp');

  //Create a break tag
  const break_tag = document.createElement('br');
  // Append the list item and input to the cart list
  const cartList = document.getElementById('cart-list');
  cartList.appendChild(label);
  cartList.appendChild(input);
  cartList.appendChild(break_tag);
}

//final bill
/*const form = document.getElementById('cart-list'); 
const name='',value='';
*/function final_submit(event) {
  // Retrieve the form element from source.html
  const form = document.getElementById('cart-list');

  // Retrieve all labels and inputs from the form
  const labels = form.querySelectorAll('label');

  // Create a new document
  const newDocument = document.implementation.createHTMLDocument('../final bill/bill.html');

  // Create a new form element in the new document
  const newForm = newDocument.createElement('form');

  // Loop through the labels and inputs
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const break_tg = document.createElement('br');

    // Clone the label and input elements
    const clonedLabel = label.cloneNode(true);
    const clonedbreak_tg = break_tg.cloneNode(true);

    // Append the cloned label and input to the new form element
    newForm.appendChild(clonedLabel);
    newForm.appendChild(clonedbreak_tg);
}

  // Append the new form to the new document body
  newDocument.body.appendChild(newForm);

  // Convert the new document to HTML
  const targetHTML = newDocument.documentElement.outerHTML;

  // Save the targetHTML to a new HTML file (target.html)
  const downloadLink = document.createElement('a');
  downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(targetHTML);
  downloadLink.download = 'target.html';
  downloadLink.click();

  window.location.href = "../final bill/target.html"
  
}


function visible_morning(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_1.style.display = 'flex';
  div_2.style.display = 'none';
  div_3.style.display = 'none';
}

function visible_lunch(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_2.style.display = 'flex';
  div_1.style.display = 'none';
  div_3.style.display = 'none';
}

function visible_snacks(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_3.style.display = 'flex';
  div_1.style.display = 'none';
  div_2.style.display = 'none';
}
//back from food menu
function back(event) {
  const div_1 = document.getElementById('breakfast');
  const div_2 = document.getElementById('lunch');
  const div_3 = document.getElementById('snacks');
  div_1.style.display = 'none';
  div_2.style.display = 'none';
  div_3.style.display = 'none';
}
