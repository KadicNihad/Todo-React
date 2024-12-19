import {Container, Row, Col, Card, FloatingLabel, Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {



        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');


        if(data.email === storedEmail && data.password === storedPassword){
            alert('Podaci su tacni');
        }else {
            alert('Podaci nisu tacni');
        }

    }

    return (
        <Container className='mt-5'>
            <Row className='justify-content-center mt-5'>
                <Col xs={12} xl={8} className='mt-5'>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb3">

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "Email je obavezan",
                                            pattern: {
                                                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                                message: "Unesite validan email",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-danger">{errors.email.message}</p>
                                    )}
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register('password', {
                                            required:'Unesite lozinku',
                                            minLength: {
                                                value:6,
                                                message: 'Password mora imate minimalno 6 karaktera',
                                        },
                                        })}
                                    />
                                    {errors.password && (
                                        <p className='text-danger'>{errors.password.message}</p>
                                    )}
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

export default Login;