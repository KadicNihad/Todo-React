import {Container, Row, Col, Card, FloatingLabel, Form, Button} from 'react-bootstrap';
function Login () {
    return(
    <Container className='justify-content-center mt-5'>
        <Row  className='justify-content-center mt-5'>
            <Col xs={8}  className='mt-5'>
                <Card >
                    <Card.Body>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" placeholder="Email" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <Button variant='primary' className='form-control'>Log In </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default Login;