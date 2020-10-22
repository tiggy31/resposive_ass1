const express = require('express');
var cors = require('cors')
const app = express();
const port = 8080;

app.use(cors())

let quizObj = {
  totalQuestions: 4,
  successMessage: "Congratulation!",
  questionArr: [
    {
      id:0,
      title:"Select All the Strings",
      additionalInfo:'Click on the boxes that are strings. Remember that the easiest way to recognize a string is to check if it is surrounded by " or \'.',
      totalQuestions:4,
      nextQuestionId:1,
      possibleAnswers: [
        {
          "image": "/assets/photo-17.jpg",
          "text": "true",
          "type": "boolean",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-16.jpg",
          "text": "43",
          "type": "number",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-15.jpg",
          "text": "'4 Girls'",
          "type": "string",
          "isCorrect": true
        },
        {
          "image": "/assets/photo-14.jpg",
          "text": '"School Bus"',
          "type": "string",
          "isCorrect": true
        }
      ]
    },
    {
      id:1,
      title:"Find the Integers",
      additionalInfo:'Integers are whole numbers. This means it is one number that doesn\'t include decimals',
      totalQuestions:4,
      nextQuestionId:2,
      possibleAnswers: [
        {
          "image": "/assets/photo-01.jpg",
          "text": "'car'",
          "type": "string",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-12.jpg",
          "text": "13",
          "type": "number",
          "isCorrect": true
        },
        {
          "image": "/assets/photo-03.jpg",
          "text": "'bowling'",
          "type": "string",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-04.jpg",
          "text": "8",
          "type": "number",
          "isCorrect": true
        }
      ]
    },
    {
      id:2,
      title:"Which of these are booleans?",
      additionalInfo:'Boolean are named after George Boole. Simply put, a boolean is a true or false value.',
      totalQuestions:4,
      nextQuestionId: 3,
      possibleAnswers: [
        {
          "image": "/assets/photo-05.jpg",
          "text": "true",
          "type": "boolean",
          "isCorrect": true
        },
        {
          "image": "/assets/photo-06.jpg",
          "text": '"This is true."',
          "type": "string",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-07.jpg",
          "text": "4,453",
          "type": "number",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-08.jpg",
          "text": "false",
          "type": "boolean",
          "isCorrect": true
        }
      ]
    },
    {
      id:3,
      title:"Again with strings!",
      additionalInfo:'Remeber strings are letters and symbols surrounded by single or double quotations.',
      totalQuestions:4,
      nextQuestionId: 0,
      possibleAnswers: [
        {
          "image": "/assets/photo-09.jpg",
          "text": "6",
          "type": "number",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-10.jpg",
          "text": "'It's show time!'",
          "type": "string",
          "isCorrect": true
        },
        {
          "image": "/assets/photo-11.jpg",
          "text": "8",
          "type": "number",
          "isCorrect": false
        },
        {
          "image": "/assets/photo-02.jpg",
          "text": "'mini house'",
          "type": "string",
          "isCorrect": true
        }
      ]
    }
  ]
}

app.get('/problems', (req, res) => {
  res.json(quizObj);
})

app.get('/checkanswer/:id', (req, res) => {
  let id = req.params.id;
  let answers = req.query.answers.split(",");
  let solutionArr = questionArr[id].possibleAnswers.map((answer)=>answer.isCorrect.toString());

  for(let i in answers){
    if(answers[i] !== solutionArr[i]){
      res.json({result:false});
      return;
    }
  }

  res.json({result:true});
  return;
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
