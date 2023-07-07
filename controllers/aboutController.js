const About = require("../models/abouts");

async function getAbout(req, res, next) {
	await res.sendFile("about.html", {
		root: "S:/downs/fsss-main/fsss-main/public/about",
	});
}


async function contact(req, res) {
	let messages = new About({
        name: req.body.name,
		email: req.body.email,
		message: req.body.message,
	}); 
    
    if(!req.body.message){
        res.status(400).send(body);
    }
    else{
        messages = await messages.save();
        let body = {
            message: "contact sent",
        };
        res.status(200).send(body);
    }
}



module.exports = { getAbout, contact };