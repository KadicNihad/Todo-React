import {Container, Row, Col, Card, FloatingLabel, Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useState,useEffect} from 'react';

function Account() {

        const [data, setData] = useState({
            firstName:'',
            lastName:'',
            email:'',
            password:''
        });

    useEffect (() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');

        if(storedEmail || storedPassword || storedFirstName || storedLastName) {
            setData ({
                firstName:storedFirstName || '',
                lastName: storedLastName || '',
                email:storedEmail || '',
                password: storedPassword || ''
            });
        }
    }, []);

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('firstName',data.firstName);
        localStorage.setItem('lastName', data.lastName);
        localStorage.setItem('email',data.email);
        localStorage.setItem('password', data.password);

        alert('Uspjesno izmjenjeno');
    }


    return (
        <Container className='mt-5'>
            <Row className='justify-content-center mt-5'>
                <Col xs={12} xl={8} className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={onHandleSubmit}>
                                <FloatingLabel
                                    controlId="floatingFirstname"
                                    label="First Name"
                                    className='mb-3'>

                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        value={data.firstName}
                                        name='firstName'
                                        onChange={onHandleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingLastName"
                                    label="Last Name"
                                    className='mb-3'>

                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name='lastName'
                                        value={data.lastName}
                                        onChange={onHandleChange}
                                    />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        onChange={onHandleChange}
                                        value={data.password}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingEmail"
                                    label="Email address"
                                    className='mb-3'>
                                    <Form.Control
                                        type="email"
                                        value={data.email}
                                        readOnly
                                        placeholder="Email" />
                                </FloatingLabel>
                                <Button variant='primary' type='submit' className='form-control'>Log In </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Account;