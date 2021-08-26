module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.set("view options", {layout: false});
    //app.use(express.static('../ui'));
    app.engine('html', require('ejs').renderFile);

    app.get('/', function(req, res) {
        res.render('notes.html');
    });

    app.get('/view', function(req, res) {
        res.render('view.html');
    });

    app.get('/create', function(req, res) {
        res.render('create.html');
    });

    app.get('/edit', function(req, res) {
        res.render('edit.html');
    });

    app.get('/search', function(req, res) {
        res.render('findone.html');
    });

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.post('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}
