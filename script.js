const container = document.getElementById("mainContent");
const textIn = document.getElementById("textIn");
textIn.focus();
const btn = document.getElementById("button-addon2");
btn.addEventListener("click", () => {
	if (validate()) {
		createElements();
	}
});

function createElements() {
	let check = document.createElement("input");
	check.setAttribute("type", "checkbox");
	check.classList.add("form-check-input");

	let task = document.createElement("p");
	task.innerText = textIn.value;

	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("fa-regular", "fa-trash-can", "btn", "btn-danger");
	deleteBtn.addEventListener("click", (e) => {
		deleteElements(e);
	});

	let elementRow = document.createElement("div"); // row
	elementRow.classList.add("todo");

	elementRow.appendChild(check);
	elementRow.appendChild(task);
	elementRow.appendChild(deleteBtn);

	container.appendChild(elementRow);
	textIn.value = "";
	textIn.focus();
}

function deleteElements(e) {
	let event = e.target;
	let father = event.parentElement;
	console.log(father);
	father.remove();
	textIn.focus();
}

function validate() {
	let b = false;

	if (textIn.value != "") {
		b = !b;
	}
	errorStyle(b);
	return b;
}

function errorStyle(b) {
	if (b) {
		textIn.classList.remove("is-invalid");
	} else {
		textIn.classList.add("is-invalid");
	}
}
