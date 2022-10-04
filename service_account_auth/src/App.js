
import './App.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import React from 'react';
// import https from 'https'
import axios from 'axios'
// import fs from 'fs'



function App() {
  const { Header, Footer,  Content } = Layout;
const [endpoint,setEndpoint] = React.useState('')
const [token,setTextArea] = React.useState('')
const [footerData,setFooterData] = React.useState([])


const sendRequest = async () => {
    const header = {Authorization : `Bearer ${token}`}

  
      console.log(token)
    try {
       const result = await axios.post('http://localhost:9000/token', { token: token, endpoint: endpoint });
    // console.log(result.data)
    setFooterData(result.data.groups)

    // setFooterData(result.data.groups)
    } catch (error) {
        console.log(error)
    }

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
                <input onChange={(e) => {setEndpoint(e.target.value)}} value={endpoint} className='content_container_endpoint' type="text" placeholder="endpoint"/>
                </div>


                <div className='content_container_token'>
                <p>Token</p>

                <textarea onChange={(e) => {setTextArea(e.target.value)}}value={token}   placeholder="token" tiy rows="15" cols="50"/>

            </div>

            </div>

       
            <Button onClick={()=> {sendRequest()}} type='primary' className='form_button'>Load Dashboard</Button>
           

      </form>
  
      </Content>
      <Footer>

      <div className='footerContainer'>
      
        {footerData.map((val, i) =>  (  <div key={i} className='footerContainer_row'><p>{val.name}</p></div>))}
        
      </div>
      
      
      </Footer>
    </Layout>

     </>
  );
}

export default App;
