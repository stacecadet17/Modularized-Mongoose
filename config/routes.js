var control = require('../controllers/wolves.js');
module.exports = function(app) {


///////////All of the Routes
app.get('/', function(req, res) {
  res.render('index.ejs', {wolves: wolves}); //display all the wolves by passing the object to the res
});

//create
app.post('/wolves', function(req, res) { //action route to post info for creating a wolf
    res.redirect('/'); //go to to the index which now has saved and displayed the new wolf
  });

//New
app.get('/wolves/new', function(req, res) { //get the html page to add a new wolf
  res.render('new.ejs');
})

//Show
app.get('/wolves/:id', function(req, res) { //route for the specific if of a wolf
  res.render('show.ejs', {wolves: wolves}); //pass the response the object of wolves
});

//Update
app.post('/wolves/:id', function(req, res) { //action route to post new information to update a specific wolf
  res.redirect('/')
})

app.get('/wolves/:id/edit', function(req, res) {
  res.render('edit.ejs', {wolves: wolves}); //pass the wolves object to the edit html
})

//Delete
app.post('/wolves/:id/destroy', function(req, res) {
  res.redirect('/') //now go back to index to reveal the deleted wolf
})

}
