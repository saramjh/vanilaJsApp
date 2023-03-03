const loginForm = document.querySelector("form")
const loginInput = loginForm.querySelector("#login-input")
const loginBtn = loginForm.querySelector("#login-Btn")
const greeting = document.querySelector("#greeting")

const logOutBtn = document.createElement("button")
const br = document.createElement("br");

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

function greetings (content,username = "Guest") {
    greeting.innerText = `${content}! ${username}! `
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.appendChild(br);
    greeting.appendChild(logOutBtn);
    logOutBtn.innerHTML = "Log out";
    logOutBtn.style.fontSize = "10px";
    logOutBtn.addEventListener("click",handleLogOutBtn);
}

function handleLoginBtn(event) {
	const username = loginInput.value
	if (username === "") {
		event.preventDefault()
		loginForm.classList.add(HIDDEN_CLASS)
        greetings("type your name")
	} else {
		event.preventDefault()
		loginForm.classList.add(HIDDEN_CLASS)
		localStorage.setItem(USERNAME_KEY, username)
        greetings("Hello",username)
	}
}

function handleLogOutBtn(event){
    event.preventDefault();
    localStorage.removeItem("username");
    logOutBtn.classList.toggle(HIDDEN_CLASS);
    loginForm.classList.toggle(HIDDEN_CLASS);
    greeting.classList.toggle(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername !== null) {
    loginForm.classList.add(HIDDEN_CLASS)
    greetings("Nice to see you again!",savedUsername)
} else {
    loginForm.classList.remove(HIDDEN_CLASS)
    loginBtn.addEventListener("click", handleLoginBtn)
}
