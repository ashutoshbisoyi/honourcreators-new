import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TestimonialData from '../../../data/TestimonialData';
import Image from 'next/image';
const Clients = () => {
  return (
    <section>
      <Container>
        <h2>
          Our Proud <span>Customers</span>
        </h2>
        <hr className='mb-5' />
        <Row>
          {TestimonialData.map((value, index) => {
            return (
              <Col md={2} xs={6} key={index}>
                <div className='text-center'>
                  <Image
                    src={`/clients/${value.imgsrc}.png`}
                    alt={value.imgsrc}
                    height={100}
                    width={100}
                  />
                  <p>{value.name}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
