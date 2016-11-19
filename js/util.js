const GOBALKEY = "oh000024";
const NOT_FOUND_DATA = -1;
const SAVEMODE = 1;
const EDITMODE = 2;

function sortContact() {
	contactList.sort(function compare(a, b) {
		if (a.fullname < b.fullname)
			return -1;
		else if (a.fullname === b.fullname)
			return 0;
		return 1;
	});
}

function searchData(contactvalue) {
	for (let i = 0; i < contactList.length; i++) {
		if ((contactList[i].fullname == contactvalue.fullname) && (contactList[i].email == contactvalue.email) && (contactList[i].phone == contactvalue.phone)) {
			return {
				contact: contactList[i],
				index: i
			};
		}
	}
	return {
		contact: null,
		index: -1
	}
}

function updateAll() {
	archiveData();
	displayContact();
}

function clearNode() {
	let ul = document.querySelector("ul");
	ul.innerHTML = "";
}

function archiveData() {
	localStorage.setItem(GOBALKEY, JSON.stringify(contactList));
}

function displayContact() {
	clearNode();
	sortContact();
	contactList.forEach(addChildNode);
}

function offModal() {
	document.querySelector(".overlay").style.display = "none";
	document.querySelector(".modal").style.display = "none";
};

function onModal() {
	document.querySelector(".overlay").style.display = "block";
	document.querySelector(".modal").style.display = "block";
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
	let btn = document.querySelector(".buttonSave");
	btn.addEventListener("click", saveData);
	document.querySelector(".buttonCancel").addEventListener("click", cancel);
	document.querySelector(".fab").addEventListener("click", addContact);

}