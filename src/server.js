const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors({origin  : 'http://localhost:5173'}))

app.get('/api/init', (req, res) => {
    return res.status(200).json({       
        message: 'Hello World!'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
