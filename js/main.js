function overlay() {
	el = document.getElementsByClassName("overlay");
	el[0].style.visibility = (el[0].style.visibility == "visible") ? "hidden" : "visible";
}

var contacts = JSON.parse(data);

document.addEventListener("DOMContentLoaded", Init);
let contactList = [];

function addData() {
	//	addContact("jake oh","jakeohcs@gmail.com","asdf-asdf");
	//	
	//	var modaldiv = document.createElement("div");
	//	modaldiv.classList.add("modal");

	//clear out local storage
	//localStorage.clear();	
	//localStorage.removeItem("oh000024");



	// OpenModal();
	overlay();

	//InsertData();

	//InputData();


	let contact1 = {
		fullname: "Jake Oh",
		email: "ohddd@gg.com",
		phne: "234234"
	};


	contactList.push(contact1);
	console.log(contactList);

	//localStorage.setItem("oh000024", JSON.stringify(constactList));
};

function deleteData(event) {

	removeData;

};

function Init() {
	var btFab = document.getElementsByClassName("fab")[0].addEventListener('click', addData);
	//var btDelete = document.getElementsByClassName("delete")[0].addEventListener('click', deleteData);


	if (!localStorage.getItem("oh000024")) {
		console.log("No contact data: createing content");

		//		let contact1 = {
		//			fullname: "Jake Oh",
		//			email: "ohddd@gg.com",
		//			phne: "234234"
		//		};

		//		contactList.push(contact1);
		//		localStorage.setItem("oh000024", JSON.stringify(contactList));
	}

	displayContact();
}

function displayContact() {
	contactList = JSON.parse(localStorage.getItem("oh000024"));

	console.log(contactList);
}