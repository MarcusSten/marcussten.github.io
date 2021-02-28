let express = require('express');
let app = express();
let Twig = require('twig');
let fs = require('fs');

let NOTES = [];

let saveData = function(){
	let text = JSON.stringify(NOTES);
	fs.writeFileSync("notes.json", text);
};


let loadData = function(){
	let text = fs.readFileSync("notes.json");
	NOTES = JSON.parse(text);
};

loadData();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res){

	res.render('index.twig', {
		notes: NOTES,
	});


});

app.get('/note', function(req, res){

	let id = req.query.id;
	let note = NOTES[id];

	if(note){

	res.render('note.twig',{
		note
	})

	} else {
		res.render('non.twig')
	}
});

app.get('/add', function(req, res){
	res.render('edit.twig');
});

app.post('/add', function(req, res){
	NOTES.push(req.body);
	saveData();
	
	res.redirect('/note?id=' + (NOTES.length - 1))
});

app.listen(8000, function(){
	console.log('Server started on port 8000');
});