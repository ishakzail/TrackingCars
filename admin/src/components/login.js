import React, { useState } from "react";
import { Button,Alert } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Redirect } from "react-router-dom";

const  Login = (props) =>{
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorPassword , setErrorPassword] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  const handleSubmit = async (event)=> {
    setErrorPassword(null)
    setErrorEmail(null)
    const x = event.preventDefault();
    if(!email)
    {
      setErrorEmail('email is required!!!!')
    }
       
    if(!password)
    {
      setErrorPassword('password is required!!!!')
    }
        
        if(email && password){
          
            const form = {
                "email" : email,
                "password" :password
            }
            const res = await axios.post('http://localhost:5000/loginAdmin',form);
            const user = res.data;
            if(user.data)
            {
              console.log(user.data)
              localStorage.setItem('TOKEN', user.data.token);
              props.history.push('/home')
            }
            else
            {
              if(user.error === "email")
              {
                setErrorEmail('Email does not exist !! ');
                 console.log(errorEmail);
              }
               
              if(user.error === "password")
              {
                setErrorPassword('Password is not correct !!');
              }
                
            }
        }
  }

  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Form  onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
   
  </Form.Group>
  {errorEmail && <Alert  variant="danger" >{errorEmail}</Alert>}

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
  </Form.Group>
  {errorPassword && <Alert  variant="danger" >{errorPassword}</Alert>}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  {/* <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
        <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        
  {error && !email && <Alert  variant="danger" >{errorEmail}</Alert>}
 
        <FormGroup controlId="password" bsSize="small">

        <Form.Label>Password</Form.Label>
          <FormControl
          
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
  {error && !password && <Alert  variant="danger" >{errorPassword}</Alert>}
        <Button block bsSize="large"  type="submit">Login</Button>
      </form> */}
  </Card.Body>
</Card>
    // <div className="col-xs-3">
      
    // </div>
  );
}
export default Login;
