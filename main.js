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
  for (i = 0; i < userData.length; i++) {
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
  return Date.now(); // this returns a timestamp in milliseconds since 1970.
}

//colorwheel page

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
  for (i = 0; i < 4; i++) {
    squares[i].className = "red-square";
    document.querySelector('#paintBigSquares').classList.remove("hidden");
  }
} //small bug here
