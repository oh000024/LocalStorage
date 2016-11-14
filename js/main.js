

const GOBALKEY = "oh000024";

document.addEventListener("DOMContentLoaded", Init);
let contactList = []; //new MAP():

function searchData(fullname, email, phone) {
	contactList.find(function (item) {

		if((item.fullname===fullname) && ( item.email === email) && (item.phone === phone)){
			return item;
		}
		else
			return nul;
	});
}

function saveData() {
	let namevalue = document.getElementById("fullname");
	let emailvalue = document.getElementById("email");
	let phonevalue = document.getElementById("phone");

	let contact1 = {
		fullname: namevalue.value,
		email: emailvalue.value,
		phone: phonevalue.value
	};

	contactList.push(contact1);
	archiveData();
	flipInputModal();
	displayContact();
}

function cancel() {
	flipInputModal();
}

function deleteData(ev) {

	let name = ev.currentTarget.parentElement.childNodes[1].textContent;

	for (let i = 0; i < contactList.length; i++) {
		if (contactList[i].fullname === name) {
			contactList.splice(i, 1);
			break;
		}
	}
	archiveData();
	displayContact();
};

function editData(ev) {
	flipInputModal();
	//	console.log(ev.parentElement());
	var elementChildren = ev.target.parentNode.children;

	console.trace(elementChildren);
	document.getElementById("fullname").value = elementChildren[1].textContent;
	document.getElementById("email").value = elementChildren[2].textContent;
	document.getElementById("phone").value = elementChildren[3].textContent;
	
	
}

function flipInputModal() {

	el = document.getElementsByClassName("overlay");
	el[0].style.visibility = (el[0].style.visibility == "visible") ? "hidden" : "visible";
};


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
	displayContact();

}

function archiveData() {
	localStorage.setItem(GOBALKEY, JSON.stringify(contactList));
}

function displayContact() {

	clearNode();
	contactList = JSON.parse(localStorage.getItem(GOBALKEY));
	
	contactList.sort(function compare(a, b) {
		if (a.fullname < b.fullname)
			return -1;
		else if (a.fullname === b.fullname)
			return 0;
		return 1;
	});

	contactList.forEach(addContact);
	console.log(contactList);
}