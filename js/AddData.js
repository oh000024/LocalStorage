//
//      <li class="contact">
//        <span class="delete"></span>
//        <h3>Poe Dameron</h3>
//        <p class="email">poe.dameron@resistance.org</p>
//        <p class="phone">613-842-6363</p>
//      </li>

function addContact(name, email,phone)
{
	name = "Jake Oh";
	email = "abcf@gmail.com";
	phone = "12341234-q1234";
	
	let ul = document.querySelector("ul");
	let li = document.createElement("li");
	li.classList.add("contact");

	
	let span = document.createElement("span");
	span.classList.add("delete");
	
	let h3 = document.createElement("h3");
	h3.textContent="Jake Oh";
	
	let pEmail = document.createElement("p");
	pEmail.classList.add("email");
	pEmail.textContent= email;
	
	let pPhone = document.createElement("p");
	pPhone.classList.add("phone");
	pPhone.textContent=phone;
	
	
	li.appendChild(span);
	li.appendChild(h3);
	li.appendChild(pEmail);
	li.appendChild(pPhone);
	
	ul.appendChild(li);
	
	
	
}