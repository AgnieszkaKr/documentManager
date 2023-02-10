// Import packages/modules
const express = require('express')
const app = express()
const fs = require('fs')

// Start/create server
const port = 4000
app.listen(port, () => {
   console.log(`Server running on port: ${port}`)
})