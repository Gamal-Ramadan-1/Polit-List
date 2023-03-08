import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Head.scss'
function Head(props) {
    return (
        <Row className='my-5 py-5'>
            <Col sm="12">
                <h1 className='text-center text-capitalize'>{props.title}</h1>
            </Col>
            <Col sm="12">
                <p className='text-center mb-0 mt-3 text-uppercase'>{props.subTitle}</p>
            </Col>
        </Row>
    )
}

export default Head