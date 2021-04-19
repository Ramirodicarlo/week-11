const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('This is my port 4000')
});

app.listen(4000, () => {
    console.log(`Server started`)
})

app.post('/register', function (req, res) {
  console.log(req.body)
  const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
  };
  res.json({result:"Success"})
});

app.put('/login', function (req, res) {
  console.log(req.body)
  const registeredUser = {
      email: req.body.email,
      pass: req.body.pass,}
      
  res.json({result:"Success"}) 
});

