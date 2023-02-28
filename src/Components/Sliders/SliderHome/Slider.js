import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Slider.scss'
const Slider = () => {
    return (
        <section className='slider-home'>
            <Container>
                <Row className='align-items-center justify-content-center header'>
                    <p className='text-center col-12 text-light m-0 fw-bold'>OVER 36,500+ ACTIVE LISTINGS</p>
                    <h1 className='text-center col-12 text-light display-3 fw-bolder'>Find Nearby <span className='d-md-inline-block d-block'>Places & Things</span></h1>
                </Row>
                <Row className='bg-light justify-content-center align-items-center rounded mt-5'>
                    <Col lg="3" md="12" sm="12" className='p-0 p-2'>
                        <Form.Select aria-label="Default select example" className='text-capitalize'>
                            <option>all areas</option>
                            <option value="1" className='text-capitalize'>new village</option>
                            <option value="2" className='text-capitalize'>old town</option>
                            <option value="3" className='text-capitalize'>modern city</option>
                        </Form.Select>
                    </Col>
                    <Col lg="3" md="12" sm="12" className='p-0 p-2'>
                        <input className='w-100 bg-light px-3' placeholder='Enter a location' />
                    </Col>
                    <Col lg="3" md="12" sm="12" className='p-0 p-2'>
                        <Form.Select aria-label="Default select example" className='text-capitalize'>
                            <option>price range</option>
                            <option value="1" className='text-capitalize'>$100 - $250</option>
                            <option value="2" className='text-capitalize'>$250 - $500</option>
                            <option value="3" className='text-capitalize'>$500 - $1000</option>
                            <option value="3" className='text-capitalize'>$1000 or more</option>
                        </Form.Select>
                    </Col>
                    <Col lg="3" md="12" sm="12" className='p-0 p-3 search'>
                        <div className='btn text-center text-capitalize d-flex justify-content-center align-items-center flex-wrap'>
                            <i className="fa-solid fa-magnifying-glass mx-2"></i>
                            <h6 className='text-light'>search now</h6>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 justify-content-center align-items-center mx-5 px-5 gy-2'>
                    <Col className='text-center py-3 mx-lg-5 mx-0' lg='auto' md='6' sm='12'>
                        <div className='category text-center'>
                            <i className="fa-solid fa-house-chimney"></i>
                            <p className='m-0 text-capitalize fw-bold text-light'>apartment</p>
                        </div>
                    </Col>
                    <Col className='text-center py-3 mx-lg-5 mx-0' lg='auto' md='6' sm='12'>
                        <div className='category text-center'>
                            <i className="fa-solid fa-burger"></i>
                            <p className='m-0 text-capitalize fw-bold text-light'>food & life</p>
                        </div>
                    </Col>
                    <Col className='text-center py-3 mx-lg-5 mx-0' lg='auto' md='6' sm='12'>
                        <div className='category text-center'>
                            <i className="fa-solid fa-car"></i>
                            <p className='m-0 text-capitalize fw-bold text-light'>cars</p>
                        </div>
                    </Col>
                    <Col className='text-center py-3 mx-lg-5 mx-0' lg='auto' md='6' sm='12'>
                        <div className='category text-center'>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <p className='m-0 text-capitalize fw-bold text-light'>shopping</p>
                        </div>
                    </Col>
                    <Col className='text-center py-3 mx-lg-5 mx-0' lg='auto' md='6' sm='12'>
                        <div className='category text-center'>
                            <i className="fa-solid fa-earth-europe"></i>
                            <p className='m-0 text-capitalize fw-bold text-light'>traveling</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Slider