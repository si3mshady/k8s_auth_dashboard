
import './App.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import React from 'react';

const { Header, Footer,  Content } = Layout;

function App() {
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
            <input className='content_container_endpoint' type="text" placeholder="endpoint"/>
            </div>


            <div className='content_container_token'>
            <p>Token</p>

            <textarea id="w3review" placeholder="token" name="w3review" rows="15" cols="50"/>

            </div>

            </div>

       
            <Button onClick={()=> {console.log('Boom')}} type='primary' className='form_button'>Load Dashboard</Button>
           

             

      </form>
  
      </Content>
      <Footer>Footer</Footer>
    </Layout>

     </>
  );
}

export default App;
