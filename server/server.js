const  https = require('https');
const axios = require('axios')
const fs = require('fs')
const  express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app=express();
const port = 9000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


app.post('/token', async (req,res) => {
    
    let token

    token = req.body.token
    endpoint = req.body.endpoint
    data =  await sendRequest(token,endpoint)
    return res.status(202).send(data)

}
)


const sendRequest = async (token,endpoint='') => {

    const header = {Authorization : `Bearer ${token}`}

    const httpsAgent = new https.Agent( {
  
        rejectUnauthorized: false

  
    })
  
// 'https://127.0.0.1:54852/apis'
    try {
       const result = await axios.get(endpoint, { httpsAgent:  httpsAgent, headers: header });
    return result.data

    } catch (error) {
        console.log(error)
    }



  
  } 

  app.listen(port, () => console.log(`Listening on port : ${port}`))