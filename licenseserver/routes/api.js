var express = require('express');
var router = express.Router();

/* GET home page. */
// router.post('/writing', function(req, res, next) {
//   res.send({ success: true });
// });

router.get('/writing', function(req, res, next) {
  res.send({
    success: true,
    questions: [
      {
        question: "What is A?",
        answer: "A"
      },
      { 
        question: "What is B?",
        answer: "B"
      }
    ]
   });
});

module.exports = router;
