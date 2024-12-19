import {Container, Card, Button, Row, Col, Form, FloatingLabel} from 'react-bootstrap';
import {FaEdit,FaTrash} from 'react-icons/fa';

function Tasks() {



    return (
        <Container>
            <Row className='text-center justify-content-center mt-5 '>
                <Col xs={12} xl={8}>
                    <Card>
                        <Card.Body>
                            <Row className='mb-3'>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingTask"
                                        label="Insert Task">

                                        <Form.Control
                                            type="text"
                                            placeholder="addTask"
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col className='col-auto'>
                                    <Button className='btn btn-primary h-100'>Add</Button>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <FloatingLabel
                                        controlId='floatingInput'
                                        label='Search Input'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Search Input'
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <Form.Select aria-label='Default select' className='h-100'>
                                        <option>Status: All</option>
                                        <option value='1'>Complete</option>
                                        <option value='2'>Uncomplete</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <div className='border border-default'>
                                <Row className='p-2 align-items-center'>
                                    <Col className=' float-start col'>
                                        <p className='card-title float-start '>Lorem ipsum Dolor</p>
                                    </Col>
                                    <Col className='col-auto'>
                                        <Button className='btn btn-warning'><FaEdit></FaEdit></Button>
                                        <Button className='btn btn-danger'><FaTrash></FaTrash></Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border border-default'>
                                <Row className='p-2 align-items-center'>
                                    <Col className=' float-start col'>
                                        <p className='card-title float-start '>Lorem ipsum Dolor</p>
                                    </Col>
                                    <Col className='col-auto'>
                                        <Button className='btn btn-warning'><FaEdit></FaEdit></Button>
                                        <Button className='btn btn-danger'><FaTrash></FaTrash></Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border border-default'>
                                <Row className='p-2 align-items-center'>
                                    <Col className=' float-start col'>
                                        <p className='card-title float-start '>Lorem ipsum Dolor</p>
                                    </Col>
                                    <Col className='col-auto justify-content-between'>
                                        <Button className='btn btn-warning'><FaEdit></FaEdit></Button>
                                        <Button className='btn btn-danger'><FaTrash></FaTrash></Button>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                    <p className='text-end'>Total: 999</p>
                </Col>

            </Row>
        </Container>

    )
}

export default Tasks;