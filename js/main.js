document.addEventListener("DOMContentLoaded", Init);
let contactList = []; //new MAP():
var formMoad = "";

function saveData() {

	let contact1 = {
		fullname: document.getElementById("fullname").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value
	};

	// Input data is null then return
	if (0 == contact1.fullname.length || 0 == contact1.email.length || 0 == contact1.phone.length) {
		alert("Value is Empty, Try it again");
		return;
	}

	// Index is -1 means add mode
	let retobj = searchData(contact1);
	if (NOT_FOUND_DATA == retobj.index) {
		// reading new data and push.
		contactList.push(contact1);
	} else {
		contactList[retobj.index].fullname = contact1.fullname;
		contactList[retobj.index].email = contact1.email;
		contactList[retobj.index].phone = contact1.phone;
	}

	updateAll();
	offModal();
}
//
//function editData(index, contact) {
//
//	contactList[index].fullname = document.getElementById("fullname").value;
//	contactList[index].email = document.getElementById("email").value;
//	contactList[index].phone = document.getElementById("phone").value;
//	if (0 == contactList[index].fullname.length) {
//		alert("Name Value is Empty");
//		return;
//	}
//	updateAll();
//
//	document.querySelector(".buttonSave").removeEventListener("click", editData);
//	document.querySelector(".buttonSave").onclick = function () {
//		saveData();
//	}
//	offModal();
//}

function cancel() {
	offModal();
}
//
//function save() {
//	let contact = {
//			fullname: document.getElementById("fullname").value,
//			email: document.getElementById("email").value,
//			phone: document.getElementById("phone").value
//		}
//		// Input data is null then return
//	if (0 == contact.fullname.length || 0 == contact.email.length || 0 == contact.phone.length) {
//		alert("Value is Empty, Try it again");
//		return;
//	}
//	if (formMoad === ADDFORM) {
//		contactList.push(contact);
//	} else {
//		let retContact = searchData(contact);
//		//Show a found data in modal
//		if (NOT_FOUND_DATA != retContact.index) {
//			document.getElementById("fullname").value = contactList[retContact.index].fullname;
//			document.getElementById("email").value = contactList[retContact.index].email;
//			document.getElementById("phone").value = contactList[retContact.index].phone;
//		}
//	}
//	updateAll();
//	offModal();
//	//document.querySelector(".buttonSave").removeEventListener('click', save);
//
//}

function addContact() {

	let h2 = document.querySelector("h2").textContent = "Add Contact";
	document.getElementById("fullname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";

//	document.querySelector(".buttonSave").addEventListener('click', function save() {
//
//		let contact = {
//				fullname: document.getElementById("fullname").value,
//				email: document.getElementById("email").value,
//				phone: document.getElementById("phone").value
//			}
//			// Input data is null then return
//		if (0 == contact.fullname.length || 0 == contact.email.length || 0 == contact.phone.length) {
//			alert("Value is Empty, Try it again");
//			document.querySelector(".buttonSave").removeEventListener('click', save);
//			return;
//		}
//		contactList.push(contact);
//		updateAll();
//		offModal();
//		document.querySelector(".buttonSave").removeEventListener('click', save);
//
//	});
//
//	formMoad = ADDFORM;
	onModal();
}

function deleteContact(ev) {

	let li = ev.currentTarget.parentElement;
	let nValue = ev.currentTarget.parentElement.childNodes[1].textContent;
	let eValue = ev.currentTarget.parentElement.childNodes[2].textContent;
	let pValue = ev.currentTarget.parentElement.childNodes[3].textContent;
	
	ev.currentTarget.parentElement.childNodes[0].removeEventListener("click",deleteContact);
	ev.currentTarget.parentElement.childNodes[1].removeEventListener("click",deleteContact);
	ev.currentTarget.parentElement.childNodes[2].removeEventListener("click",deleteContact);
	ev.currentTarget.parentElement.childNodes[3].removeEventListener("click",deleteContact);

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

	let orgobj = {
		fullname: ev.currentTarget.parentElement.childNodes[1].textContent,
		email: ev.currentTarget.parentElement.childNodes[2].textContent,
		phone: ev.currentTarget.parentElement.childNodes[3].textContent
	};
//
	let retContact = searchData(orgobj);
	//Show a found data in modal
	if (NOT_FOUND_DATA != retContact.index) {
		document.getElementById("fullname").value = contactList[retContact.index].fullname;
		document.getElementById("email").value = contactList[retContact.index].email;
		document.getElementById("phone").value = contactList[retContact.index].phone;
	} 
	//else {
//		offModal();
//		return;
//	}
//
//	onModal();
//	document.querySelector(".buttonSave").addEventListener('click', function edit() {
//
//		if (0 == document.getElementById("fullname").value.length) {
//			alert("Value is Empty");
//			offModal();
//			document.querySelector(".buttonSave").removeEventListener('click', edit);
//			return;
//		}
//		contactList[retContact.index].fullname = document.getElementById("fullname").value;
//		contactList[retContact.index].email = document.getElementById("email").value;
//		contactList[retContact.index].phone = document.getElementById("phone").value;
//
//		updateAll();
//		offModal();
//		document.querySelector(".buttonSave").removeEventListener('click', edit);
//	});
	formMoad = EDITFORM;
	
	onModal();
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