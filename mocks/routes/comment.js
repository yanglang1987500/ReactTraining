var express = require('express');
var router = express.Router();
var fs = require("fs");
var guid = require('guid');

const file = './routes/data/comment.json';

router.get('/comment/list', function (req, res, next) {
  const result = JSON.parse(fs.readFileSync(file));
  setTimeout(function(){
    res.json(result);
  }, 500);
});

router.post('/comment/remove/:id', function (req, res, next) {
  const id = req.params.id;
  const result = fs.readFileSync(file);
  let list = JSON.parse(result);
  list = list.filter(item => item.id !== id);
  fs.writeFileSync(file, JSON.stringify(list));
  res.json({ success: true });
});


router.post('/comment/add', function (req, res, next) {
  var author = req.body.author;
  var content = req.body.content;
  const result = fs.readFileSync(file);
  let list = JSON.parse(result);
  list.push({ id: guid.raw().replace(/-/gi,''), author: author, content: content, time: new Date().getTime() });
  fs.writeFileSync(file, JSON.stringify(list));
  setTimeout(function(){
    res.json({ success: true });
  }, 500);
});

module.exports = router;