var express = require('express');
var router = express.Router();
const queries = require('../mongo/queries');

router.get('/', async function (req, res, next) {
  const items = await queries.getAllItems({})
  return res.send(items);
});

router.post('/', async function (req, res, next) {
  await queries.addItem(req.body);

  return res.send(req.body);
})

router.put('/', async function (req, res, next) {
  await queries.updateItem(req.body);

  return res.send(req.body);
})

router.delete('/:itemId', async function (req, res, next) {
  await queries.deleteItem(req.params.itemId)

  return res.send(req.params.itemId);
})

module.exports = router;