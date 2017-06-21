var userData=[];

var userNameEl=document.querySelector('#userName');
var passWordEl=document.querySelector('#passWord');

function signUp(){
  if (!validateTask(userNameEl.value)) {
		return;
	}
  var newUser={id:getTimeStamp()};
  newUser.name=userNameEl.value;
  newUser.password=passWordEl.value;
  userData.push(newUser);
  alert("Thank you for signing up! Please log in to start your colorful journey!");
  resetInput();
}

function logIn(){
  for(i>0;i<userData.length;i++){
    if (userData[i].name===userNameEl.value){
      if (userData[i].password===passWordEl.value){
      return logInYes();
    } else {alert("wrong password")}
    else{
    alert("no username found")
  }}
}}

function logInYes(){
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
  passWordEl.value="";
}
//without Login or signUp the user cannot click on two pages







function getTimeStamp() {
	return Date.now(); // this returns a timestamp in milliseconds since 1970.
}
