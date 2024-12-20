import {Container,Row,Col} from 'react-bootstrap';
function Footer () {
    return(
        <footer className='text-center text-dark bg-info py-1 position-absolute botom-0 w-100'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='col-8'>
                        <p>Copyright © 2024 Nihad Kadic. Built with Docusaurus.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;