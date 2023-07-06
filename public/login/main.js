const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
	loginForm.style.marginLeft = "0%";
	loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
	signupBtn.click();
	return false;
};

const handleSubmit = (event) => {
	event.preventDefault();
	let response = fetch("http://localhost:3000/login", {
		method: "POST",
		mode: "same-origin",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({
			email: event.target[0].value,
			password: event.target[1].value,
			// keep: event.target[2].value
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if(data.message=="Login Successful"){
				window.location.replace('http://localhost:3000/home')
			}
			else{
				document.getElementById('test').innerHTML = "Wrong username or password";
			}
		})
		.catch((err) => console.error(err));
};

const handleSubmit2 = (event) => {
	event.preventDefault();
		let response = fetch("http://localhost:3000/signup", {
		method: "POST",
		mode: "same-origin",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({
			name: event.target[0].value,
			email: event.target[1].value,
			password: event.target[2].value,
			confirmPassword: event.target[3].value,
			// keep: event.target[2].value
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if(data.message){
				console.log('success');
				window.location.replace('http://localhost:3000/home')
			}
			else{
				document.getElementById('test2').innerHTML = data.error.message;
			}
		})
		.catch((err) => console.error(err));
};


