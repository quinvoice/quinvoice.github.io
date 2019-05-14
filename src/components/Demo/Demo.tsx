import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './Demo.scss';

export const Demo: FC = () => {
  return (
    <div className="section section--spacing d-flex justify-content-center demo">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" sm="6" lg={{ offset: 1, size: 4 }} className="text-center">
            <h2>Generate a PDF</h2>
            <p>
              It uses{' '}
              <a href="https://getbootstrap.com" title="Bootstrap" target="blank">
                Bootstrap
              </a>{' '}
              as a template which makes invoices clean, nice and simple. Interactive wizard guides you step by step
              asking for necessary informations, making this process easy and fast.
            </p>
          </Col>
          <Col xs="12" sm="6" lg={{ offset: 1, size: 6 }} className="text-center">
            <img className="demo__gif" src="/img/demo.gif" alt="Demo" />
          </Col>
        </Row>
        <div className="text-center">
          <Button color="warning" size="lg" href="/pdf/Quinvoice.pdf" target="blank" tag="a">
            Open example PDF
          </Button>
        </div>
      </Container>
    </div>
  );
};
