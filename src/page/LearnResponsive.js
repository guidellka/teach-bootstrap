import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const LearnResponsive = () => {
    return (
        <div className='container-fluid'>
            <div className='ml-4 p-4'>
                <h1>Responsive</h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-3 bg-warning border h5">col-xs-12 col-md-6 col-lg-4</div>
                <div className="col-xs-12 col-md-6 offset-lg-1 col-lg-4 bg-warning border h5">col-xs-12 col-md-6 col-lg-4</div>
                <div className="col-xs-12 col-md-12 offset-lg-1 col-lg-3 bg-warning border h5">col-xs-12 col-md-6 col-lg-4</div>
            </div>
            <div className='row my-5 d-none d-sm-block'>
                <div className='bg-info text-light d-flex justify-content-center align-items-center' style={{height:200}}>
                    <h5>Hidden only on mobile</h5>
                </div>
            </div>
            <div className='row mb-5 d-xl-none'>
                <div className='bg-success text-light vw-100 d-flex justify-content-center align-items-center' style={{height:200}}>
                    <h5>Hidden only on xl</h5>
                </div>
            </div>
        </div>
    )
}

export default LearnResponsive
