// const BASE_URL = 'http://www.mocky.io/v2';


// async function SignUp (payload) {
//   return await fetch (`${BASE_URL}/5dfcef48310000ee0ed2c281`, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-down
//       body: payload
//     }
//   )
// }


// // required
// // pattern

// // function validation(key, value, type) {
// //   switch (key) {
// //     case 'email':
// //       if (value.length < 2) {
// //       }

// //       break;

// //     case 'Name':
// //       break;
// //     case 'Location':
// //       break;

// //     default:
// //       break;
// //   }
// // }


// // pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
// // pattern="[0-9a-zA-Z!@#$%^&*]{7,}"

const currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  let x = document.getElementsByClassName("tab");
  // const arrowRight = document.getElementsByClassName("arrow-right");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Start now";
    document.getElementById("nextBtn").style.background = 'linear-gradient(45deg, #4caf50, #3cd342)';
    document.getElementById("nextBtn").style.boxShadow = '0 0 15px #3cd342';
  } else {
    document.getElementById("nextBtn").innerHTML = "Next step";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("email");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      // y[i].className += " invalid";
      document.getElementById("errorEmail").innerHTML = "Please enter a valid email address";
      document.getElementById("errorEmail").style.background = '#e22a32';
      // and set the current valid status to false:      
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function checkPatern () {
  const elm  = document.getElementById("email")
  

}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// const emailField = document.getElementById("emailField");
// const telField = document.getElementById("telField");
// const buttonEmail = document.getElementById("buttonEmail");
// const buttonTel = document.getElementById("buttonTel");
// const responseEmail = document.getElementById("responseEmail");
// const responseTel = document.getElementById("responseTel");

// buttonEmail.addEventListener("click", function () {
//   const email = emailField.value;
//   if (validateEmail(email)) {
//     responseEmail.innerHTML = "Hiya Cowboy, this email will work for us 🤠";
//   } else {
//     responseEmail.innerHTML = "Sorry, this email is not cool enough 😩";
//   }
// });

// buttonTel.addEventListener("click", function () {
//   const tel=telField.value;
//   if (validateTel(tel)) {
//     responseTel.innerHTML = "Hiya Cowboy, this email will work for us 🤠";
//   } else {
//     responseTel.innerHTML = "Sorry, this email is not cool enough 😩";
//   }
// });

// function validateEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// function validateTel(tel) {
//   const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//   return re.test(String(tel));
// }