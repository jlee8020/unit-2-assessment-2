const todos = [];
module.exports={
    getAll,
    create,
    deleteOne,
    getOne,
    update
};
 function getAll(){
     return todos;
 };
 function create(todo) {
    todos.push(todo);
 };
 function deleteOne(todoIdx){
     todos.splice(todoIdx, 1);
 }
function getOne(todoIdx) {
    return todos[todoIdx];
};
function update(todoIdx, todo){
    todos[todoIdx] = todo;
};