const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const hiddenclassname = "hidden";
const usernamekey = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(hiddenclassname);
  localStorage.setItem(usernamekey, loginInput.value);

  paintGreetings();

}
 

function paintGreetings(){
  const username = localStorage.getItem(usernamekey);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(hiddenclassname);
  
}

const savedusername = localStorage.getItem(usernamekey);

if(savedusername === null) {
  loginForm.classList.remove(hiddenclassname)
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  paintGreetings();
}

