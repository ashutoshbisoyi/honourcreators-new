import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/Intro.module.scss';
import Image from 'next/image';
import { AiFillEye } from 'react-icons/ai';
import { BsReplyAllFill } from 'react-icons/bs';
const Why = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <Row>
          <Col
            lg={{ span: 5, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className='flex-center'
          >
            <Image
              src='/home/why.svg'
              alt='honourcreators'
              height={550}
              width={550}
            />
          </Col>
          <Col lg={{ span: 7, order: 2 }} xs={{ span: 12, order: 1 }}>
            <div className='content'>
              <h2>
                Why <span>HonourCreators</span>
              </h2>
              <hr />
              <p>
                There are number of service providers in the market, let's know
                the top reasons to choose only HonourCreators
              </p>
              <h4>Here are our top features:</h4>
              <ul className={styles.whyList}>
                <li>
                  <div className='flex-center'>
                    <Image
                      src='/home/customprice.png'
                      alt='custom pricing services'
                      height={64}
                      width={64}
                      className='image-box'
                    />
                  </div>
                  <div>
                    <h4>Customised Budget</h4>
                    <h5>
                      You decide the price, we will provide best service within
                      that range.
                    </h5>
                  </div>
                </li>
                <li>
                  <div className='flex-center'>
                    <Image
                      src='/home/time.png'
                      alt='quality'
                      height={64}
                      width={64}
                    />
                  </div>
                  <div className='ml-2'>
                    <h4>Work on Time</h4>
                    <h5>
                      We value your time, we assure a complete delivery with in
                      your time period.
                    </h5>
                  </div>
                </li>
                <li className='mb-5'>
                  <div className='flex-center'>
                    <Image
                      src='/home/quality.png'
                      alt='quality'
                      height={64}
                      width={64}
                    />
                  </div>
                  <div className='ml-2'>
                    <h4>Quality Sevices</h4>
                    <h5>
                      Quality assurance is our key, get the best quality
                      according to your price.
                    </h5>
                  </div>
                </li>
              </ul>
              <div className='btn-group'>
                <button className='outlined-black'>
                  <AiFillEye className='icon' />
                  Watch a Demo
                </button>
                <button className='outlined-black'>
                  <BsReplyAllFill className='icon' />
                  Explore All Services
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Why;
