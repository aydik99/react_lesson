import './user.css';
export default class User
{
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHi(){
		document.getElementsByClassName('name')[0].innerHTML = 'Имя разработчика -'+`${this.firstName} ${this.lastName}`;
	}

	displayDate()
	{
		document.getElementsByClassName('date')[0].innerHTML = new Date();
	}
}