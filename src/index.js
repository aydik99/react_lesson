import User from './user';

const user = new User("Aydemir", "Aliev");
user.sayHi();

document.getElementsByClassName('name')[0].onclick = function() {
	user.displayDate();
}
