const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({origin  : 'https://deploy-client-fawn.vercel.app'}))

app.get('/api/init', (req, res) => {
    return res.status(200).json({       
        message: 'Hello World!'
    })
})

app.get('/' , (req, res) => {
    return res.status(200).json({
        message: 'Hello L2'
    })
})

module.exports = app
