import React from 'react';
import { Col, NavItem, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col>
                <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg' alt='unknown person image'/>
            </Col>
            <Col>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;