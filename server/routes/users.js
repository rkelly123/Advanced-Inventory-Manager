var express = require('express');
var router = express.Router();

const users = [
  { id: 1, name: 'Stephanie'},
  { id: 2, name: 'Danya' },
  { id: 3, name: 'Ian' }
];

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  const userId = req.params.userId;
  let foundUser = users.find(user => user.id === Number(userId));
  return res.send(foundUser);
});

router.get('/', function(req, res, next) {
  return res.send(users);
});

router.post('/', function(req, res, next) {
  users.push(req.body);

  return res.send(users);
})

module.exports = router;