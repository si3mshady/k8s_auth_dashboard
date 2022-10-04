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

// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImtmY1VSTHJ5MFB0Wmdsc25lNG0xaUtlcEJ0RmhGUXQwRWJNQ2dXamN5WUEifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjY0ODUwNjY5LCJpYXQiOjE2NjQ4NDcwNjksImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJkZWZhdWx0Iiwic2VydmljZWFjY291bnQiOnsibmFtZSI6ImRlZmF1bHQiLCJ1aWQiOiJhNTk0YmEyNi0wYmJmLTQ4OTItOWMxNy1hNzFlYzNhMGE0ZTEifX0sIm5iZiI6MTY2NDg0NzA2OSwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmRlZmF1bHQ6ZGVmYXVsdCJ9.LhveN5Hu2KT2VnqXf3OZPKqToEvnXAWcWmNJX-8P2MQLD3d9-xoBBZpC5LSUYDOb7HRT-gL7PgIVfaCND8s8htshtlE_iqoRgpG6p5MgJqrpGpHz3PLd1d0vfOu8XsI0WffnHzo1QJ0litvkOOPiDT5aAoZ3IcJpeSdUiOZxJLnyyKQ4fH--2-HWJJTNSdG_pjSvsrE1mdnsUXdQssgakbzlUYEcLsM02FpTEyVF-bKK0VUNh1Dd_f9-53VCTdSTQlvCGlovuWrR8GISaOCo5ugv3zHtONlIUD_qDgB5Qrpa8v1V59RyPEccD6hTggL15LH_B2Bmxoj5y5kgWiOJLg'
// const header = {Authorization : `Bearer ${token}`}


app.post('/token', async (req,res) => {
    
    let token

    // console.log('hello')

    token = req.body.token
    endpoint = req.body.endpoint

    // console.log(token)
    // console.log(endpoint)

    data =  await sendRequest(token,endpoint)
    // console.log(data)
    return res.status(202).send(data)

// }

}
)


const sendRequest = async (token,endpoint='') => {

    // console.log(res.data)

    // token = res.data
    const header = {Authorization : `Bearer ${token}`}

    const httpsAgent = new https.Agent( {
  
        rejectUnauthorized: false

  
    })
  
// 'https://127.0.0.1:54852/apis'
    try {
       const result = await axios.get(endpoint, { httpsAgent:  httpsAgent, headers: header });
    // console.log(result.data)
    return result.data

    } catch (error) {
        console.log(error)
    }



  
  } 


//   sendRequest()
  app.listen(port, () => console.log(`Listening on port : ${port}`))