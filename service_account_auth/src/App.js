
import './App.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import React from 'react';
import axios from 'axios'





function App() {
  const { Header, Footer,  Content } = Layout;
const [input,setInput] = React.useState('')
const [textArea,setTextArea] = React.useState('')


const sendRequest = () => {
console.log(textArea)
setTextArea('')
setInput('')
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

                <textarea onChange={(e) => {setTextArea(e.target.value)}}value={textArea}   placeholder="token" tiy rows="15" cols="50"/>

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
