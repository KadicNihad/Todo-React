import {Container,Row,Col,Card} from 'react-bootstrap';
function Login () {
    return(
    <Container className='bg bg-danger'>
        <Row className='jutstify-content-center'>
            <Col>
                <Card>
                    <Card.Body>
                        <input type='text' className='form-control' />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default Login;