import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ContactItem from './ContactItem';

const SearchBox = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Form.Label>검색</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col lg={10}>
                    <Form.Control type='text' placeholder='이름을 입력해주세요.'/>
                </Col>
                <Col lg={2}>
                    <Button type='submit'>찾기</Button>
                </Col>
            </Row>
        </div>
    );
};

export default SearchBox;