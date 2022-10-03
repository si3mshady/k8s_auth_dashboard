const  https = require('https');
const axios = require('axios')
const fs = require('fs')



const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImtmY1VSTHJ5MFB0Wmdsc25lNG0xaUtlcEJ0RmhGUXQwRWJNQ2dXamN5WUEifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjY0ODQzMDg0LCJpYXQiOjE2NjQ4Mzk0ODQsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJkZWZhdWx0Iiwic2VydmljZWFjY291bnQiOnsibmFtZSI6ImRlZmF1bHQiLCJ1aWQiOiJhNTk0YmEyNi0wYmJmLTQ4OTItOWMxNy1hNzFlYzNhMGE0ZTEifX0sIm5iZiI6MTY2NDgzOTQ4NCwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmRlZmF1bHQ6ZGVmYXVsdCJ9.WUYJ6EOBPnR8xGwmlaYJknMWbhLq-OfvU4iMoOXFvfyI9vFip_lPbQ8kCmTMigITL1141qCIn_J99romHJdV6e3BEglLzLDYDYO22FlkohtaP9aRZTe8hA_iqQDef23o25IPqH8-dLOeL1daN9y1ZfGTkTG0M6mSxulVt-FtoOWTSpVjNkOE_du_JWDVj9YtBwjfstxZm6Nrb9Sl_yJMdL45AzoUkT8RERAWZSYyYiKh0QjfVULwiY61Z9nPdu822sbqO9GccO7ANQE74-YCgLAVxEuKEnfih8Km-gEaLZv4p1dbXlLesPQezgdLJFp3t8Lj-ZK0folUTrm4hgqZQA'
const header = {Authorization : `Bearer ${token}`}


const sendRequest = async () => {

    const httpsAgent = new https.Agent( {
  
      rejectUnauthorized: false
  
     
    
    })
    // kubectl config view | grep http

    try {
        result = await axios.get('https://127.0.0.1:54852/apis', { httpsAgent:  httpsAgent, headers: header });
    console.log(result.data)
    } catch (error) {
        console.log(error)
    }



  
  }

  sendRequest()



//   $ curl https://127.0.0.1:54852/apis/apps/v1/ --header "Authorization: Bearer $JWT_TOKEN_DEFAULT_DEFAULT"
// {
//   "kind": "APIResourceList",
//   "apiVersion": "v1",
//   "groupVersion": "apps/v1",
//   "resources": [...]
// }