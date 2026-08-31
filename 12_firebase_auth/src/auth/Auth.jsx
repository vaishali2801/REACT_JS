import { useState } from 'react';
import { Container,Row,Col,Card,Form,Button } from 'react-bootstrap';

const Auth = () => {
    const [isLogin,setIsLogin]=useState(true);
    const [authData,setAuthData]= useState({
        email:"",
        password:""
    });

    const handleChange = (field,e)=>{
        setAuthData((prev)=>{
            return{
                ...prev,
                [field]:e.target.value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setAuthData({email:"",password:""})
    }
    return (
        <div className='bg-dark'>
            <Container>
                <Row className='w-100 justify-content-center'>
                    <Col xs="auto">
                        <Form className='d-flex justify-content-center align-items-center' onSubmit={handleSubmit} style={{height:"100vh"}}>
                            <Card className='p-3 gap-3' style={{width:"360px"}}>
                                <h1 className='text-center'>{isLogin ? "Login" :"Sign In"}</h1>
                                <Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type='email' placeholder='enter your email' value={authData.email} onChange={(e)=>handleChange("email",e)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type='password' placeholder='enter your password' value={authData.password} onChange={(e)=>handleChange("password",e)}></Form.Control>
                                </Form.Group>
                                <Button type='submit' variant='primary'>{isLogin ? "Login" : "Sign In"}</Button>
                                <Button type='submit' variant='success' onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "new user? Sign In" : "already user ? Login"}</Button>
                            </Card>
                        </Form>
                    
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Auth
