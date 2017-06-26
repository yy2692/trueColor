//index page
var userData = [];

var userNameEl = document.querySelector('#userName');
var passWordEl = document.querySelector('#passWord');

function signUp() {
  if (!validateTask(userNameEl.value)) {
    alert("Please enter a valid username!");
    return;
  }
  if (!validateTask(passWord.value)) {
    alert("Please enter a valid password!");
    return;
  }
  var newUser = {
    id: getTimeStamp()
  };
  newUser.name = userNameEl.value;
  newUser.password = passWordEl.value;
  userData.push(newUser);
  alert("Thank you for signing up " + userNameEl.value + "! Please log in to start your colorful journey!");
  resetInput();
}

function logIn() {
  if (!validateTask(userNameEl.value)) {
    alert("Please enter a valid username!");
    return;
  }
  if (!validateTask(passWord.value)) {
    alert("Please enter a valid password!");
    return;
  }
  var i;
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].name === userNameEl.value) {
      if (userData[i].password === passWordEl.value) {
        alert("Dear " + userNameEl.value + ",your journey just begin!");
        document.querySelector('#logInForm').innerHTML = '<h2 class="text-center">Welcome!</h2>';
        enableNavBar();
        return;
      } else {
        alert("wrong password");
        resetInput();
        return;
      }
    }
  }
  alert("no username found");
  resetInput();
  return;
}

function validateTask(task) {
  if (task !== "") {
    return true;
  } else {
    return false;
  }
}

function resetInput() {
  userNameEl.value = "";
  passWordEl.value = "";
}

function enableNavBar() {
  var a;
  a = '<br><li role="presentation" class="active"><a href="#">Get Started</a></li><br><li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="colorwheel.html" role="button" aria-haspopup="true" aria-expanded="false">Color Wheel <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="colorwheel.html">Color Wheel</a></li><li><a href="colorwheel.html#primary-color">Primary Color</a></li><li><a href="colorwheel.html#complementary-color">Complementary Color</a></li><li><a href="colorwheel.html#quiz">Quiz</a></li></ul></li><br><li role="presentation"><a href="colorcontext.html">Color Context</a></li>';
  document.querySelector('#nav').innerHTML = a;
}

function getTimeStamp() {
  return Date.now();
}

//colorwheel page

var quizData = [{
    id: "q1",
    question: "What is this called?",
    answer: "color wheel"
  },
  {
    id: "q2",
    question: "What is this called?",
    answer: "tertiary colors"
  },
  {
    id: "q3",
    question: "What is red + blue?",
    answer: "purple"
  },
  {
    id: "q4",
    question: "What is yellow + blue?",
    answer: "green"
  },
  {
    id: "q5",
    question: "What is the complementary color of the color on the right?",
    answer: "purple"
  },
  {
    id: "q6",
    question: "What is the complementary color of the color on the right?",
    answer: "red-orange"
  }
]

function quizStart() {
  document.querySelector('#color-wheel').classList.add("hidden");
  document.querySelector('#primary-color').classList.add("hidden");
  document.querySelector('#complementary-color').classList.add("hidden");
  document.querySelector('#quizQuestions').classList.remove("hidden");
}

function getAnswer(q) {
  for (var i = 0; i < 4; i++) {
    if (document.getElementsByName(q)[i].checked) {
      return document.getElementsByName(q)[i].value
    }
  }
  return false;
}

function collectAnswers() {
  var a1 = getAnswer("q1");
  var a2 = getAnswer("q2");
  var a3 = getAnswer("q3");
  var a4 = getAnswer("q4");
  var a5 = getAnswer("q5");
  var a6 = getAnswer("q6");
  return [a1, a2, a3, a4, a5, a6];
}

function checkAnswer(i) {
  var answer = collectAnswers();
  if (quizData[i].answer === answer[i]) {
    return true;
  } else {
    return false;
  }
}

function submitQuiz() {
  var answer = collectAnswers();
  for (var i = 0; i < 6; i++) {
    if (answer[i] === false) {
      alert("please finish all questions!");
      return;
    }
  }
  var html = "";
  for (var i = 0; i < 6; i++) {
    html += `<p>Question ${i}: ${checkAnswer(i)}</p>`;
  }
  document.querySelector("#quizResult").innerHTML = "<h3 class='text-black'>Quiz Result</h3>" + html;
  document.querySelector('#goBack').classList.remove("hidden");
}

function goBack(){
  document.querySelector('#color-wheel').classList.remove("hidden");
  document.querySelector('#primary-color').classList.remove("hidden");
  document.querySelector('#complementary-color').classList.remove("hidden");
  document.querySelector('#quizQuestions').classList.add("hidden");
}

//colorcontext page

function smallPractice() {
  document.querySelector('#colorContextIntro').classList.add("hidden");
  document.querySelector('#smallPractice').classList.remove("hidden");
  document.querySelector('#paintSquares').classList.remove("hidden");
}

function paintSquare() {
  document.querySelector('#squares').classList.remove("hidden");
  document.querySelector('#paintRed').classList.remove("hidden");
}

function paintRed() {
  var squares = document.querySelectorAll('.small-square');
  var i;
  for (var i = 0; i < 4; i++) {
    squares[i].className = "red-square";
    document.querySelector('#paintBigSquares').classList.remove("hidden");
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("color", ev.target.classList);
}

function drop(ev) {
  ev.preventDefault();
  var list = ev.dataTransfer.getData("color");
  var data = list.replace("color-box ", "");
  ev.currentTarget.className = `big-square ${data}`;
}

function difference() {
  document.querySelector('#paintRed').classList.add("hidden");
  document.querySelector('#difference').classList.remove("hidden");
}
