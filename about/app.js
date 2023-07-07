const handleSubmit3 = (event) => {
	event.preventDefault();
		let response = fetch("http://localhost:3000/about", {
		method: "POST",
		mode: "same-origin",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({
			name: event.target[0].value,
			email: event.target[1].value,
			message: event.target[2].value,
			// keep: event.target[2].value
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if(data.message){
                document.getElementById('test3').innerHTML = "Message Sent";
				//window.location.replace('http://localhost:3000/home')
			}
			else{
				document.getElementById('test3').innerHTML = data.error.message;
			}
		})
		.catch((err) => console.error(err));
};