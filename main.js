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
  for (i > 0; i < userData.length; i++) {
    if (userData[i].name === userNameEl.value) {
      if (userData[i].password === passWordEl.value) {
        alert("Dear "+userNameEl.value+",your journey just begin!");
        enableNavBar();
      } else {
        alert("wrong password");
        return;
      } else {
        alert("no username found");
        return;
      }
    }
  }
}

function logInYes() {
  console.log(yes);
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
// function enableNavBar() {
//   document.querySelector('#nav2').classList.remove("disabled");
//   document.querySelector('#nav3').classList.remove("disabled");
//   document.querySelector('#nav4').classList.remove("disabled");
//   document.querySelector('#nav5').classList.remove("disabled");
// } this is fancy code, but I'll also need to change the link of the navs, so I used innerHTML in the end.

function enableNavBar() {
  var a;
  a = '<br><li id="nav1"role="presentation" class="active"><a href="#">Get Started</a></li><br><li id="nav2" role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="colorwheel.html" role="button" aria-haspopup="true" aria-expanded="false">Color Wheel <span class="caret"></span></a><ul class="dropdown-menu"><li id="nav3"><a href="colorwheel.html">Primary Color</a></li><li id="nav4"><a href="colorwheel.html">Complementary Color</a></li></ul></li><br><li id="nav5" role="presentation" ><a href="colorcontext.html">Color Context</a></li>';
  document.querySelector('#nav').innerHTML = a;
}

function getTimeStamp() {
  return Date.now(); // this returns a timestamp in milliseconds since 1970.
}
//colorwheel page

//colorcontext page
