import {Container,Row,Col} from 'react-bootstrap';
function Footer () {
    return(
        <div className='text-dark bg-info py-1'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='col-8'>
                        <p>Copyright © 2024 Nihad Kadic. Built with Docusaurus.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;