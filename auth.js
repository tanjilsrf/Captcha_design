const firebaseConfig = {
  apiKey: "AIzaSyAiD0Gxxhm9CkfzFYoYrGBNSvKAQCI5sNQ",
  authDomain: "datacollection-725cc.firebaseapp.com",
  databaseURL: "https://datacollection-725cc-default-rtdb.firebaseio.com",
  projectId: "datacollection-725cc",
  storageBucket: "datacollection-725cc.appspot.com",
  messagingSenderId: "174232717585",
  appId: "1:174232717585:web:cb350dccae6e83ff8d24b0"
};

firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("form");

// Function to handle form submission for the index page
function submitFormIndex(e) {
  e.preventDefault();

  // Retrieve form values
  const name = getElementVal("name");
  const email = getElementVal("email");
  const age = getElementVal("age");
  const question10 = getElementVal("question10");

  // Validate input fields
  if (!name || !email || !age) {
    showAlert("Please fill out all required fields");
    return;
  }

  // Retrieve time spent on the page
  const entryTime = localStorage.getItem('entryTimeIndex');
  const timeSpent = calculateTimeSpent(entryTime);

  // Save form data to Firebase
  saveData('index', { name, email, age, question10, timeSpent });

  // Clean up local storage
  // localStorage.removeItem('entryTime');

  // Show success alert and redirect
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha1.html', 1000);
}

// Function to handle form submission for the captcha1 page
function submitFormCaptcha1(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer1 = getElementVal("captcha-answer1");
  const hardnessQuestion1 = getElementVal("hardness-question1");

  // Retrieve time spent on the page
  const entryTime1 = localStorage.getItem('entryTimeCaptcha1');
  const timeSpent1 = calculateTimeSpent(entryTime1);

  // Save form data to Firebase
  saveData('captcha1', { captchaAnswer1, hardnessQuestion1, timeSpent1 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha1');

  // Show success alert and redirect
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha2.html', 1000);
}

// Function to handle form submission for the captcha2 page
function submitFormCaptcha2(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer2 = getElementVal("captcha-answer2");
  const hardnessQuestion2 = getElementVal("hardness-question2");

  // Retrieve time spent on the page
  const entryTime2 = localStorage.getItem('entryTimeCaptcha2');
  const timeSpent2 = calculateTimeSpent(entryTime2);

  // Save form data to Firebase
  saveData('captcha2', { captchaAnswer2, hardnessQuestion2, timeSpent2 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha2');

  // Show success alert and redirect to final page
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha3.html', 1000);
}

// Function to handle form submission for the captcha2 page
function submitFormCaptcha3(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer3 = getElementVal("captcha-answer3");
  const hardnessQuestion3 = getElementVal("hardness-question3");

  // Retrieve time spent on the page
  const entryTime3 = localStorage.getItem('entryTimeCaptcha3');
  const timeSpent3 = calculateTimeSpent(entryTime3);

  // Save form data to Firebase
  saveData('captcha3', { captchaAnswer3, hardnessQuestion3, timeSpent3 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha2');

  // Show success alert and redirect to final page
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha4.html', 1000);
}


// Function to handle form submission for the captcha2 page
function submitFormCaptcha4(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer4= getElementVal("captcha-answer4");
  const hardnessQuestion4 = getElementVal("hardness-question4");

  // Retrieve time spent on the page
  const entryTime4 = localStorage.getItem('entryTimeCaptcha4');
  const timeSpent4 = calculateTimeSpent(entryTime4);

  // Save form data to Firebase
  saveData('captcha4', { captchaAnswer4, hardnessQuestion4, timeSpent4 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha2');

  // Show success alert and redirect to final page
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha5.html', 1000);
}

// Function to handle form submission for the captcha2 page
function submitFormCaptcha5(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer5= getElementVal("captcha-answer5");
  const hardnessQuestion5 = getElementVal("hardness-question5");

  // Retrieve time spent on the page
  const entryTime5 = localStorage.getItem('entryTimeCaptcha5');
  const timeSpent5 = calculateTimeSpent(entryTime5);

  // Save form data to Firebase
  saveData('captcha5', { captchaAnswer5, hardnessQuestion5, timeSpent5 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha2');

  // Show success alert and redirect to final page
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'captcha6.html', 1000);
}

// Function to handle form submission for the captcha2 page
function submitFormCaptcha6(e) {
  e.preventDefault();

  // Retrieve form values
  const captchaAnswer6= getElementVal("captcha-answer6");
  const hardnessQuestion6 = getElementVal("hardness-question6");

  // Retrieve time spent on the page
  const entryTime6 = localStorage.getItem('entryTimeCaptcha6');
  const timeSpent6 = calculateTimeSpent(entryTime6);

  // Save form data to Firebase
  saveData('captcha6', { captchaAnswer6, hardnessQuestion6, timeSpent6 });

  // Clean up local storage
  // localStorage.removeItem('entryTimeCaptcha2');

  // Show success alert and redirect to final page
  showAlert("Data saved successfully!");
  setTimeout(() => window.location.href = 'final.html', 1000);
}


// Function to calculate time spent on the page
const calculateTimeSpent = (entryTime) => {
  if (!entryTime) return 0; // If no entry time is found, return 0 seconds
  const currentTime = new Date().getTime();
  return Math.floor((currentTime - entryTime) / 1000); // Time in seconds
};

// Function to get the value of an element by ID
const getElementVal = (id) => {
  return document.getElementById(id) ? document.getElementById(id).value : '';
};

// Function to save form data to Firebase
const saveData = (page, data) => {
  const path = `formData/${page}`;
  const formDataDB = firebase.database().ref(path);
  const newEntry = formDataDB.push();
  newEntry.set(data, function (error) {
    if (error) {
      showAlert("Data could not be saved: " + error.message);
    } else {
      showAlert("Data saved successfully!");
    }
  });
};

// Function to show an alert message (optional)
const showAlert = (message) => {
  const alertElement = document.querySelector(".alert");
  if (alertElement) {
    alertElement.textContent = message;
    alertElement.style.display = "block";

    // Hide the alert after 3 seconds
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 3000);
  }
};
