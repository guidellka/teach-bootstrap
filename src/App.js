import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LearnLayout from './page/LearnLayout'
import CodeReact from './page/CodeReact'
import { Col, Container, Row } from 'react-bootstrap'
import LearnComponent from './page/LearnComponent'
import LearnResponsive from './page/LearnResponsive'
import './App.css'
import CodeSkooldio from './page/CodeSkooldio'
import './assets/css/style.css'

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className="nav-link text-light active" aria-current="page">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" alt="" width='25' />
                        </Link>
                        <Link to='/home' className="nav-link text-light" href="#">Home</Link>
                        <Link to='/layout' className="nav-link text-light active" aria-current="page">Layout</Link>
                        <Link to='/responsive' className="nav-link text-light" href="#">Responsive</Link>
                        <Link to='/component' className="nav-link text-light" href="#">Component</Link>
                        <Link to='/code' className="nav-link text-light" href="#">Example(React)</Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={CodeSkooldio}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/layout" component={LearnLayout}/>
                <Route exact path="/component" component={LearnComponent}/>
                <Route exact path="/responsive" component={LearnResponsive}/>
                <Route exact path="/code" component={CodeReact}/>
            </Switch>
        </Router>
    )
}

const Home = () => {
return (
    <Container fluid>
        <Row className='text-center mt-5'>
            <Col className='h1'>Hello Bootstrap</Col>
        </Row>
    </Container>
)
}

export default App
