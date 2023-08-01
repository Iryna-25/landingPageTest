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

let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
let currentLoginBtn = 0;
showLoginBtn(currentLoginBtn);





function showLoginBtn(step) {
  // This function will display the specified tab of the form ...
  const LoginBtn = document.getElementsByClassName("container-login");
  // const arrowRight = document.getElementsByClassName("arrow-right");
  LoginBtn[step].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (step == 0) {
    document.getElementById("logBtn").style.display = "none";
  } else {
    document.getElementById("logBtn").style.display = "inline";
  }
  if (step == (LoginBtn.length - 1)) {
    document.getElementById("logBtn").innerHTML = "Start now";
    document.getElementById("logBtn").style.background = 'linear-gradient(45deg, #4caf50, #3cd342)';
    document.getElementById("logBtn").style.boxShadow = '0 0 15px #3cd342';
  } else {
    document.getElementById("logBtn").innerHTML = "Next step";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(stepLogin)
}

function nextLoginBtn(step) {
  // This function will figure out which tab to display
  const LoginBtn = document.getElementsByClassName("container-login");
  // Exit the function if any field in the current tab is invalid:
  if (step == 1 && !validateForm()) return false;
  // Hide the current tab:
  LoginBtn[currentLoginBtn].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentLoginBtn = currentLoginBtn + step;
  // if you have reached the end of the form... :
  if (currentLoginBtn >= LoginBtn.length) {
    //...the form gets submitted:
    document.getElementById("container").submit();
    return false;
  }
  // Otherwise, display the correct tab:
}


const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const logBtn = document.getElementById("logBtn");
const errorEmailLogin = document.getElementById("errorEmailLogin");
const errorPasswordLogin = document.getElementById("errorPasswordLogin");

function showLogin() {
  var x = document.getElementById("container-login");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    document.getElementById("logBtn").style.color = '#e22a32';
  } else {
    x.style.visibility = "hidden";
    logBtn.style.color = '#e22a32';
  }
}


// logBtn.addEventListener("click", function () {
//   const email = emailField.value;
//   const password = passwordField.value;
  
//   if (!validateEmail(email) ) {
//     errorEmailLogin.innerHTML = "Please enter a valid email address";
//     errorEmailLogin.style.background = '#e22a32';
//   }
//   if (!validatePassword(password)) {
//     errorPasswordLogin.innerHTML = "Please enter a password";
//     errorPasswordLogin.style.background = '#e22a32';
//   }
//   // if (!validatePassword(password) && validatePassword(password)) {
//   //   errorEmailLogin.innerHTML = " ";
//   //   errorPasswordLogin.innerHTML = " ";

//   // }
// });

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^[0-9a-zA-Z!@#$%^&*]{7,}$/;
  return re.test(String(password));
}



function showTab(step) {
  // This function will display the specified tab of the form ...
  const tab = document.getElementsByClassName("tab");
  // const arrowRight = document.getElementsByClassName("arrow-right");
  tab[step].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (step == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (step == (tab.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Start now";
    document.getElementById("nextBtn").style.background = 'linear-gradient(45deg, #4caf50, #3cd342)';
    document.getElementById("nextBtn").style.boxShadow = '0 0 15px #3cd342';
  } else {
    document.getElementById("nextBtn").innerHTML = "Next step";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(step)
}

function nextPrev(step) {
  // This function will figure out which tab to display
  const tab = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (step == 1 && !validateForm()) return false;
  // Hide the current tab:
  tab[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + step;
  // if you have reached the end of the form... :
  if (currentTab >= tab.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  let tabClass, inputTag, i, valid = true;
  tabClass = document.getElementsByClassName("tab");
  inputTag = tabClass[currentTab].getElementsByTagName("input");

  const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const validatePassword = (inputPassword)=> inputPassword.value.match(/^[0-9a-zA-Z!@#$%^&*]{7,}$/);
  const validateLocation = (inputLocation)=> inputLocation.value.match(/^[0-9a-zA-Z!@#$%^&*, ]{2,} [0-9]{5,}$/);

  for (i = 0; i < inputTag.length; i++) {
    if (inputTag[i].id == "emailForm" && !validateEmail(emailForm)) {
      document.getElementById("errorEmailForm").innerHTML = "Please enter a valid email address";
      document.getElementById("errorEmailForm").style.background = '#e22a32';
      valid = false;
    }

    if (inputTag[i].id == "passwordForm" && !validatePassword(passwordForm)) {
      document.getElementById("errorPasswordForm").innerHTML = "Please enter a password to secure your account";
      document.getElementById("errorPasswordForm").style.background = '#e22a32';
      valid = false;
    }

    if (inputTag[i].id == "text" && !validateLocation(text)) {
      document.getElementById("errorLocationForm").innerHTML = "Enter your postal code to find local matches";
      document.getElementById("errorLocationForm").style.background = '#e22a32';
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(step) {
  // This function removes the "active" class of all steps...
  let i, tab = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    tab[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  tab[step].className += " active";
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

