document.addEventListener("DOMContentLoaded", Init);
let contactList = []; //new MAP():


function saveData(index, org) {

	let contact1 = {
		fullname: document.getElementById("fullname").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value
	};

	// Input data is null then return
	if (0 == contact1.fullname.length ||contact1.email.length || contact1.phone.length) {
		alert("Value is Empty, Try it again");
		return;
	}
	
	// Index is -1 means add mode
	if(NOT_FOUND_DATA == index){
		// reading new data and push.
		contactList.push(contact1);
	}
	else{
		contactList[index].fullname = contact1.fullname;
		contactList[index].email = contact1.email;
		contactList[index].phone = contact1.phone;
	}	

	updateAll();
	offModal();
}

function editData(index, contact) {

	contactList[index].fullname = document.getElementById("fullname").value;
	contactList[index].email = document.getElementById("email").value;
	contactList[index].phone = document.getElementById("phone").value;
	if (0 == contactList[index].fullname.length) {
		alert("Name Value is Empty");
		return;
	}
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

	document.querySelector(".buttonSave").addEventListener('click',function () {
		let contact ={
			fullname:"",
			email:"",
			phone:""
		}
		saveData(-1,contact);

	}

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
	//document.querySelector(".buttonSave").removeEventListener("click", saveData);
	document.querySelector(".buttonSave").addEventListener('click',function () {
		saveData(retContact.index, orgobj);
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
	contactList.slice(0, contactList.length);
	contactList = JSON.parse(localStorage.getItem(GOBALKEY));

	setBtnEvent();
	displayContact();
}