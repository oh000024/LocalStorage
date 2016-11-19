document.addEventListener("DOMContentLoaded", Init);
let contactList = []; //new MAP():


function saveData() {

	let contact1 = {
		fullname: document.getElementById("fullname").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value
	};

	let ret = searchData(contact1);

	if (-1 != ret.index) {
		contactList.splice(ret.index, 1);

	} else {
		contactList.push(contact1);
	}

	updateAll();
	offModal();
}

function editData(index, contact) {
	contactList[index].fullname = document.getElementById("fullname").value;
	contactList[index].email = document.getElementById("email").value;
	contactList[index].phone = document.getElementById("phone").value;

	updateAll();


	document.querySelector(".buttonSave").removeEventListener("click", editData);
	document.querySelector(".buttonSave").onclick = function () {
		saveData();
	}
	offModal();
}

function cancel() {
	offModal();
}

function addContact() {

	let h2 = document.querySelector("h2").textContent = "Add Contact";
	let fullname = document.getElementById("fullname").value = "";
	let email = document.getElementById("email").value = "";
	let phone = document.getElementById("phone").value = "";

	let fun = function () {
		saveData()
	};

	onModal();
}

function deleteContact(ev) {

	let li = ev.currentTarget.parentElement;
	let nValue = ev.currentTarget.parentElement.childNodes[1].textContent;
	let eValue = ev.currentTarget.parentElement.childNodes[2].textContent;
	let pValue = ev.currentTarget.parentElement.childNodes[3].textContent;

	let contact = {
		fullname: nValue,
		email: eValue,
		phone: pValue
	};

	let retContact = searchData(contact);
	if (NOT_FOUND_DATA != retContact.index) {
		contactList.splice(retContact.index, 1);
		ev.currentTarget.parentElement.parentNode.removeChild(li);
		localStorage
	} else {
		return;
	}

	if (contactList.length > 0) {
		archiveData();
	} else {
		localStorage.clear("oh00024");
	}
};

function editContact(ev) {
	let h2 = document.querySelector("h2").textContent = "Edit Contact";

	let nValue = ev.currentTarget.parentElement.childNodes[1].textContent;
	let eValue = ev.currentTarget.parentElement.childNodes[2].textContent;
	let pValue = ev.currentTarget.parentElement.childNodes[3].textContent;

	let li = ev.currentTarget.parentElement;

	let orgobj = {
		fullname: nValue,
		email: eValue,
		phone: pValue
	};

	let retContact = searchData(orgobj);
	//setting data in modal
	if (NOT_FOUND_DATA != retContact.index) {
		document.getElementById("fullname").value = contactList[retContact.index].fullname;
		document.getElementById("email").value = contactList[retContact.index].email;
		document.getElementById("phone").value = contactList[retContact.index].phone;
	}

	onModal();
	//	var fun = editData(retContact.index,obj);
	document.querySelector(".buttonSave").removeEventListener("click", saveData);
	document.querySelector(".buttonSave").onclick = function () {
		editData(retContact.index, orgobj);
	}
}

function Init() {
	if (!localStorage.getItem(GOBALKEY)) {
		console.log("No contact data: createing content");

		let contact1 = {
			fullname: "Jake Oh",
			email: "Jakeoh@gotmail.com",
			phone: "787-9098"
		};
		contactList.push(contact1);
		archiveData();
	}

	contactList.pop();
	contactList = JSON.parse(localStorage.getItem(GOBALKEY));

	setBtnEvent();
	displayContact();
}