const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send("This is the server in port"+ port);
  }) 
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

app.post('/register', (req, res) => {
  res.json({ 
    result:"Success"
  })
})

app.put('/login', (req, res) => {
  res.json({ 
    result:"Success"
  })
})