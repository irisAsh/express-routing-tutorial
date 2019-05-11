var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.send('home');
});

router.get('/root_?one', function(req, res, next) {
  res.send('root one');
});

router.get('/root_+two', function(req, res, next) {
  res.send('root two');
});

router.get('/root_*three', function(req, res, next) {
  res.send('root three');
});

router.get('/root_(twenty_)?four', function(req, res, next) {
  res.send('root four');
});

router.get(/^root_.*_five$/, function(req, res, next) {
  res.send('root five');
});

router.get('/artists/:artistId/musics', function(req, res, next) {
  res.send(req.params);
});

router.get('/artists/:artistId/musics/:from-:to', function(req, res, next) {
  res.send(req.params);
});

router.get('/artists/:artistId/musics/:unit.:genru', function(req, res, next) {
  res.send(req.params);
});

router.get('/artists/:artistId/musics/:musicId(\\d+)', function(req, res, next) {
  res.send(req.params);
});

module.exports = router;
