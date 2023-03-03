const toDoForm = document.getElementById("todo-form")
const toDoInput = document.getElementById("todo-input-text")
const toDoList = document.getElementById("todo-list")
const localStorageToDos = JSON.parse(localStorage.getItem("toDos"))

let toDos = []

function postToDo(value) {
	const li = document.createElement("li")
	li.classList.add(value.id)
	const checkBox = document.createElement("input")
	checkBox.type = "checkbox"
	const span = document.createElement("span")
	span.innerText = " " + value.text + " "
	span.classList.add("align-middle")
	const btn = document.createElement("input")
	btn.type = "button"
	btn.value = "X"

	toDoList.appendChild(li)
	li.appendChild(checkBox)
	li.appendChild(span)
	li.appendChild(btn)

	btn.addEventListener("click", deleteTodo)
}

function deleteTodo() {
    this.parentNode.remove()
	deleteLocalStorageToDos(this.parentNode.classList.value)
	saveToDos(toDos)
}

function deleteLocalStorageToDos(value) { 
    toDos = localStorageToDos.filter((item) => {return item.id !== parseInt(value)})
}

function saveToDos(value) {
	localStorage.setItem("toDos", JSON.stringify(value))
}

function loadToDos() {
	toDos = localStorageToDos
	toDos.forEach(postToDo)
}

function handleToDoSubmit(e) {
	e.preventDefault()
	const newToDo = {
		id: Date.now(),
		text: toDoInput.value,
	}
	toDos.push(newToDo)
	postToDo(newToDo)
	toDoInput.value = ""
	saveToDos(toDos)
}

if (localStorageToDos) {
	loadToDos()
	toDoForm.addEventListener("submit", handleToDoSubmit)
} else {
	toDoForm.addEventListener("submit", handleToDoSubmit)
}
