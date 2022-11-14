console.log("hi!")

// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'
// Create an instance of an express application 
const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  console.log("test")
  res.json({ data: "response goes here" })
})

app.get('/sleep/:time', (req, res) => {
  console.log(req.params)
  res.json({ data: "sleeptime" })
})


// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})



const got = require('got')

module.exports = async (isAll) => {
  const response = await got('https://v2.jinrishici.com/one.json')
  const body = JSON.parse(response.body)
  if (isAll) {
    return body.data.origin.content
  } else {
    return body.data.content
  }
}
