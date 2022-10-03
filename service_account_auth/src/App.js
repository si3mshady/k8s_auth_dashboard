
import './App.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import https from 'https'
import axios from 'axios'
import fs from 'fs'



function App() {
  const { Header, Footer,  Content } = Layout;
const [input,setInput] = React.useState('')
const [token,setTextArea] = React.useState('')





xx

// const httpsAgent = new https.Agent(options)

const sendRequest = async () => {

  const httpsAgent = new https.Agent( {

    rejectUnauthorized: false

   
  
  })
  // kubectl config view | grep http
  const result = await axios.get('https://myserver.internal.net:9443', { httpsAgent });
  console.log(result)

}

  return (
    <> 
    
    <Layout>
      <Header className='header'>
        <div className='header_container'>

       <p>Kubernetes Dashboard</p> 
        </div>
      </Header>
      <Content style={{backgroundColor:"rgba(1,43,54,255)"}}>
      <form className='content_container'>

            <div className='content_container_a'>


            <div className='content_container_endpoint'>

                <p>Endpoint</p>
                <input onChange={(e) => {setInput(e.target.value)}} value={input} className='content_container_endpoint' type="text" placeholder="endpoint"/>
                </div>


                <div className='content_container_token'>
                <p>Token</p>

                <textarea onChange={(e) => {setTextArea(e.target.value)}}value={token}   placeholder="token" tiy rows="15" cols="50"/>

            </div>

            </div>

       
            <Button onClick={()=> {sendRequest()}} type='primary' className='form_button'>Load Dashboard</Button>
           

      </form>
  
      </Content>
      <Footer>Footer</Footer>
    </Layout>

     </>
  );
}

export default App;
