const express = require('express')
const path = require('node:path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'dist')))

process.on('SIGINT', () => {
  process.exit(0)
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
