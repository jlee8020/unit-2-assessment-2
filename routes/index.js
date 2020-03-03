var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index',);
// });
router.get('/', todosCtrl.index);
router.post('/todos', todosCtrl.create)

router.delete('/todos/:id', todosCtrl.delete)
router.get('/todos/:id', todosCtrl.show)
router.put('/todos/:id', todosCtrl.update)
/* GET home page. */


module.exports = router;
