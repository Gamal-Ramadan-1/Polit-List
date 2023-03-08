import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Head from '../HeaderOfSections/Head'
import './Categories.scss'
import mixitup from "mixitup";
const Categories = () => {
    let containerEl = document.querySelector('.catigories');
    let mixer;
    if (containerEl === true) {
        mixer = mixitup(containerEl);
    }
    const controllCategories = [
        {
            id: 1,
            icon: "fa-solid fa-house",
            NameCategory: 'home',
            dataFilter: 'Home'
        },
        {
            id: 2,
            icon: "fa-solid fa-burger",
            NameCategory: 'food & life',
            dataFilter: 'Food'
        },
        {
            id: 3,
            icon: "fa-solid fa-car",
            NameCategory: 'car',
            dataFilter: 'Car'
        },
        {
            id: 4,
            icon: "fa-solid fa-bag-shopping",
            NameCategory: 'shopping',
            dataFilter: 'Shopping'
        },
        {
            id: 5,
            icon: "fa-solid fa-earth-americas",
            NameCategory: 'traviling',
            dataFilter: 'Traviling'
        },
    ]
    return (
        <section>
            <Container>
                <Head title="popular categories" subTitle="check them out" />
                <Row className='content mb-5'>
                    <Col lg="3" md="12" sm="12">
                        <Row>
                            {
                                controllCategories.map((i) => {
                                    return (
                                        <Col lg='12' md='12' sm='12' key={i.id} className="p-0" data-filter={"." + i.dataFilter}>
                                            <a className='d-flex align-items-center'>
                                                <i className={i.icon}></i>
                                                <h5 className='text-capitalize mx-3'>{i.NameCategory}</h5>
                                            </a>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>

                    <Col lg="9" md="12" sm="12" className="p-0">
                        <div className='catigories'>
                            {
                                controllCategories.map((i) => {
                                    return (
                                        <h1 className={'mix ' + i.dataFilter} key={i.id} data-order={i.id}>{i.NameCategory}</h1>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
export default Categories