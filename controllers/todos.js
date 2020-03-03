const Todo = require('../config/database');
module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}
function create(req,res) {
    req.body.done = false;
    console.log(req.body);
    
    Todo.create(req.body);
    res.redirect('/')
};
function index(req, res) {
    res.render('index', {todos: Todo.getAll()});
}

function deleteOne(req,res){
    Todo.deleteOne(req.params.id); //deleting by index
    res.redirect('/');
}

function show(req,res){
    res.render('show',{todo: Todo.getOne(req.params.id), idx: req.params.id});
    
}

function update(req,res){
    Todo.update(req.params.id, req.body);
    res.redirect('/')

}
