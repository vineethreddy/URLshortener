var express = require('express');
var router = express.Router();
var bson = require('bson');


// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost:27017/nodetest1', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var mynewmap = new Schema({
    oldurl: String,
    newurl: String
    
});

// Mongoose Model definition
var User = mongoose.model('users', mynewmap);



function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



			
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ejs' });
});

router.post('/post',function(req,res,next){
	var db = req.db;
	var collection = db.get("mymap");
	var addon = makeid();
	
	console.log(addon);
	console.log(collections);
	var newUser = User({
		oldurl:"watever",
		newurl:"localhost/"+addon
	});
	newUser.save(function(err) {
  		if (err) throw err;

  		console.log('User created!');
	});
	/*collection.insert({
        "actualURL" : req.body.URL,
        "shortenedURL" : req.body.URL;
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            //res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            //res.redirect("userlist");
        }
    });*/
	res.end("localhost/"+addon);
});




module.exports = router;
