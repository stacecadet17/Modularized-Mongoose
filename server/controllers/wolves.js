
var mongoose = require('mongoose');
module.exports = {

wolves.find({}, function(err, wolves) { //find all instances of wolves that exist
  if(err) { console.log(err);}
});

//create
wolves.create(req.body, function(err, wolves) { //db query to create a new wolf
  if(err) {console.log(err); }
})

//show
wolves.findOne({ _id: req.params.id}, function(err, wolves){ //find JUST THE ONE from the array
  if (err) { console.log(err); }
});

//Update
console.log(req.body);
wolves.update({ _id: req.params.id}, req.body,  function(err, wolves) {
  if (err) { console.log(err); }
})

wolves.findOne({ _id: req.params.id}, function(err, wolves) { //edit the specific ONE param passed to the req
  if (err) { console.log(err); }
});

//delete
wolves.remove({ _id: req.params.id}, function(err, wolves) { //removing the specific param passed in the req
  if (err) { console.log(err); }
});

}
