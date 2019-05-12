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

router.get(/root_.*_five/, function(req, res, next) {
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

router.get('/handlers/three_callback',
  function(req, res, next) {
    console.log('callback 1');
    next();
  },
  function(req, res, next) {
    console.log('callback 2');
    next();
  },
  function(req, res, next) {
    console.log('callback 3');
    res.send('Three Callback');
  }
);

var callbackOne = function(req, res, next) {
  console.log('array 1');
  next();
};

var callbackTwo = function(req, res, next) {
  console.log('array 2');
  next();
};

var callbackThree = function(req, res, next) {
  console.log('array 3');
  res.send('Array');
};

router.get('/handlers/array', [callbackOne, callbackTwo, callbackThree]);

router.get('/handlers/login_check',
  function(req, res, next) {
    console.log('check');
    var loggedIn = false;
    if (loggedIn) {
      next();
    } else {
      res.redirect('/');
    }
  },
  function(req, res, next) {
    console.log('passed');
    res.send('Login check');
  }
);

module.exports = router;
