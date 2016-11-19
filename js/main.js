const GOBALKEY = "oh000024";
const NOT_FOUND_DATA = -1;
document.addEventListener("DOMContentLoaded", Init);
let contactList = []; //new MAP():

function sortContact() {
	contactList.sort(function compare(a, b) {
		if (a.fullname < b.fullname)
			return -1;
		else if (a.fullname === b.fullname)
			return 0;
		return 1;
	});
}

function searchData(fullname, email, phone) {
	contactList.find(function (item) {

		if ((item.fullname === fullname) && (item.email === email) && (item.phone === phone)) {
			return item;

		} else
			return null;
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

function saveData() {

	let namevalue = document.getElementById("fullname");
	let emailvalue = document.getElementById("email");
	let phonevalue = document.getElementById("phone");

	let contact1 = {
		fullname: namevalue.value,
		email: emailvalue.value,
		phone: phonevalue.value
	};

	let ret = searchData(contact1);
	if (-1 != ret.index) {
		contactList.splice(ret.index, 1);

	} else {
		contactList.push(contact1);
	}


	displayContact();
	archiveData();
	flipInputModal();

}

function cancel() {
	flipInputModal();
}

function addContact() {

	flipInputModal();
	let btnsave = document.querySelectorAll("input[type=button]");
	btnsave[0].addEventListener('click', saveData);
	btnsave[1].addEventListener('click', cancel);
	let btnsave = document.querySelectorAll("input[type=button]");
	//btnsave[0].addEventListener('click',editData);

//	btnsave[0].removeEventListener('click',editData);
//	btnsave[0].addEventListener('click', saveData);	
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

function editData(index,contact) {
	console.log(index);

}

function editContact(ev) {

	let nValue = ev.currentTarget.parentElement.childNodes[1].textContent;
	let eValue = ev.currentTarget.parentElement.childNodes[2].textContent;
	let pValue = ev.currentTarget.parentElement.childNodes[3].textContent;

	let obj = {
		fullname: nValue,
		email: eValue,
		phone: pValue
	};

	let retContact = searchData(obj);

	if (NOT_FOUND_DATA != retContact.index) {
		document.getElementById("fullname").value = contactList[retContact.index].fullname;
		document.getElementById("email").value = contactList[retContact.index].email;
		document.getElementById("phone").value = contactList[retContact.index].phone;
	}

	let btnsave = document.querySelectorAll("input[type=button]");
	//btnsave[0].addEventListener('click',editData);

//	btnsave[0].removeEventListener('click',saveData);
//	btnsave[0].addEventListener('click', editData);
	flipInputModal();
}

function flipInputModal() {

	el = document.querySelector(".overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
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

	contactList.pop();
	contactList = JSON.parse(localStorage.getItem(GOBALKEY));
	setBtnEvent();

}

function archiveData() {
	localStorage.setItem(GOBALKEY, JSON.stringify(contactList));
}

function displayContact() {

	clearNode();
	sortContact();
	contactList.forEach(addChildNode);
}