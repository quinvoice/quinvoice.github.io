import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Advantages.scss';

export const Advantages: FC = () => {
  return (
    <div className="section section--spacing advantages">
      <Container className="text-center">
        <h2>Why do you want to use it?</h2>
        <Row className="align-items-center advantage">
          <Col xs="12" sm="3">
            <img src="/img/lock.svg" alt="Secure" />
          </Col>
          <Col xs="12" sm={{ offset: 1, size: 8 }}>
            <h3>Secure</h3>
            <p>
              You don't even need the Internet connection to generate an invoice, also it doesn't gather any
              informations about you. It's an Open Source software which means, you can check the source to be sure that
              it's safe.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center advantage">
          <Col xs="12" sm="8">
            <h3>CLI tool</h3>
            <p>
              If you are a geek like me, it's definitelly something for you! Terminal applications don't have to follow
              the stereotypes about beeing ugly and having almost no positive user experience. This one is beautifull
              and what's most important has emojis{' '}
              <span role="img" aria-label="hearth">
                ❤️
              </span>
              .
            </p>
          </Col>
          <Col xs="12" sm={{ offset: 1, size: 3 }}>
            <img src="/img/terminal.svg" alt="Terminal" />
          </Col>
        </Row>
        <Row className="align-items-center advantage">
          <Col xs="12" sm="3">
            <img src="/img/number.svg" alt="Autonumeration" />
          </Col>
          <Col xs="12" sm={{ offset: 1, size: 8 }}>
            <h3>Autonumeration</h3>
            <p>
              You don't have to remember your last invoice number - it remembers it for you and sets as a default number
              when generating new one. Easy and simple. But you don't need to use the suggestet one, it's always up to
              you what number it will be.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center advantage">
          <Col xs="12" sm="8">
            <h3>Templating</h3>
            <p>
              The most annoying thing in creating invoices is filling the companies data. You are always wondering if
              you don't made any mistake especially if the amount and bank account are proper :). What's more, when you
              issue the same invoice every month it's better to have a template and change only the data - smart!
            </p>
          </Col>
          <Col xs="12" sm={{ offset: 1, size: 3 }}>
            <img src="/img/template.svg" alt="Templating" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
