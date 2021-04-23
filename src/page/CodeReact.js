import React from 'react'
import { Card, Col, Container, Row, Button, Dropdown } from 'react-bootstrap'

const CodeReact = () => {
    return (
        <Container fluid>
            <h1 className='ml-5 my-4'>Example React</h1>
            <Row className="mb-2">
                <Col xs={{span: 12}} md={{span: 2, offset: 1}} className="bg-success border">col</Col>
                <Col xs={{span: 12}} md={{span: 4, offset: 1}} className=" bg-success border">col</Col>
                <Col xs={{span: 12}} md={{span: 2, offset: 1}} className=" bg-success border">col</Col>
            </Row>
            <Row className='mb-5'>
                <Col className="bg-danger border">col</Col>
                <Col className="bg-danger border">col</Col>
            </Row>
            <Row>
                <Col xs={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={{offset:3,size:6}} xl={{offset:0,size:4}}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CodeReact
