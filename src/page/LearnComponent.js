import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const LearnComponent = () => {
    return (
        <Container fluid>
            <Row className='text-center mt-5'>
                <Col className='h1'>
                    <Link to={{pathname: 'https://getbootstrap.com/docs/5.0/components'}} target="_blank">
                        Bootstrap Components Click !!
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default LearnComponent
