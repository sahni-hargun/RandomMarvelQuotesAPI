var express = require('express'),
    app = express(),
    quotes = ["I am Iron Man", "I dont care", "Just because something works, doesn’t mean it can’t be improved", "Whatever happens tomorrow, you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man", "I can’t control their fear, only my own", "and you know what I see? Losers… I mean like, folks who have lost stuff. And you think life takes more than it gives, but not today. Today it’s giving us something. It is giving us a chance", "It’s an imperfect world but it’s the only one we got", "The price of freedom’s high. Always has been. It’s a price I’m willing to pay", "I still believe in heroes", "I do anything and everything that Mr. Stark requires — including occasionally taking out the trash", "Hulk smash!", "Sir, I’m going to have to ask you to exit the donut", "Does he need CPR? Because I totally know CPR", "I can do this all day", "I’m just a kid from Brooklyn", "That’s my secret, Captain. I’m always angry", "We have a Hulk", "There’s only one God, ma’am, and I’m pretty sure he doesn’t dress like that", "He’s adopted", "Puny god", "I understand that the council has made a decision, but given that it’s a stupid-ass decision, I’ve elected to ignore it", "Before we get started, does anyone want to get out?", "On your left", "I do what he does, just slower", "We are Groot", "You said it yourself, bitch: We’re the Guardians of the Galaxy", "Language", "Ah, she left me. And my mom died too. And my dad got deported. But I got the van!", "So, you like cats?", "Anybody on our side hiding any shocking and fantastic abilities they’d like to disclose? I’m open to suggestions", "Dormammu, I’ve come to bargain", "I’m Mary Poppins, y’all!", "Dude, you’re embarrassing me in front of the wizards", "Get lost, Squidward", "I don't feel so good Mr. Stark", "What master do I serve? What am I supposed to say, Jesus?", "I get emails from a raccoon, so nothing sounds crazy", "That is America’s ass", "Boh"],
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send({quote: quotes[Math.floor(Math.random() * quotes.length)]});
});

app.listen(process.env.PORT || 3000,function(req,res){
console.log("Server Started!!");
})
    
    