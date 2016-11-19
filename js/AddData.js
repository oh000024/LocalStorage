function initReadData(name, email, phone) {

	let ul = document.querySelector("ul");
	let li = document.createElement("li");
	li.classList.add("contact");


	let span = document.createElement("span");
	span.classList.add("delete");

	let h3 = document.createElement("h3");
	h3.textContent = name;

	let pEmail = document.createElement("p");
	pEmail.classList.add("email");
	pEmail.textContent = email;

	let pPhone = document.createElement("p");
	pPhone.classList.add("phone");
	pPhone.textContent = phone;


	li.appendChild(span);
	li.appendChild(h3);
	li.appendChild(pEmail);
	li.appendChild(pPhone);

	ul.appendChild(li);

}

function clearNode() {
	let ul = document.querySelector("ul");
	ul.innerHTML = "";

}

function initReadData(contact) {
	let ul = document.querySelector("ul");
	let li = document.createElement("li");
	li.classList.add("contact");


	let span = document.createElement("span");
	span.classList.add("delete");
	span.addEventListener('click', deleteContact);

	let h3 = document.createElement("h3");
	h3.textContent = contact.fullname;
	h3.addEventListener('click', editContact);

	let pEmail = document.createElement("p");
	pEmail.classList.add("email");
	pEmail.textContent = contact.email;
	pEmail.addEventListener('click', editContact);

	let pPhone = document.createElement("p");
	pPhone.classList.add("phone");
	pPhone.textContent = contact.phone;
	pPhone.addEventListener('click', editContact);

	li.appendChild(span);
	li.appendChild(h3);
	li.appendChild(pEmail);
	li.appendChild(pPhone);

	ul.appendChild(li);

}

function addChildNode(contact) {
	let ul = document.querySelector("ul");
	let li = document.createElement("li");
	li.classList.add("contact");


	let span = document.createElement("span");
	span.classList.add("delete");
	span.addEventListener('click', deleteContact);

	let h3 = document.createElement("h3");
	h3.textContent = contact.fullname;
	h3.addEventListener('click', editContact);

	let pEmail = document.createElement("p");
	pEmail.classList.add("email");
	pEmail.textContent = contact.email;
	pEmail.addEventListener('click', editContact);

	let pPhone = document.createElement("p");
	pPhone.classList.add("phone");
	pPhone.textContent = contact.phone;
	pPhone.addEventListener('click', editContact);

	li.appendChild(span);
	li.appendChild(h3);
	li.appendChild(pEmail);
	li.appendChild(pPhone);

	ul.appendChild(li);
}

function setBtnEvent() {
	let fab = document.querySelector(".fab");
	fab.addEventListener('click', addContact);
	displayContact();

	let btnsave = document.querySelectorAll("input[type=button]");
	btnsave[0].addEventListener('click', saveData);
	btnsave[1].addEventListener('click', cancel);
}