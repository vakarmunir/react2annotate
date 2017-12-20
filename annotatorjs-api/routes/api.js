var express = require('express');
var router = express.Router();

var cors = require('cors');
router.use(cors());

/* AnnotationJS API end-points */
router.post('/annotations', function(req, res, next) {
  res.json( {msg: req.body} );  
});

module.exports = router;
