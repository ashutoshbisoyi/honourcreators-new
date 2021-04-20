import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/Intro.module.scss';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { BsReplyAllFill } from 'react-icons/bs';
const AboutIntro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className='content'>
              <h2>
                About <span>HonourCreators</span>
              </h2>
              <hr />
              <p>
                HonourCreators is established in the year of 2020, holding a
                tagline ' Your Vision, Our Creation '. It is a technical
                organization in the field of digital communication and content
                creation, giving importance to customer satisfaction with the
                help of latest Technologies, Research, Innovation and
                Quality-expertise. In a crowded and ever-changing industry, we
                make it a priority to stay ahead of the game. Led by a
                phenomenal management staff, we’re always educating ourselves,
                keeping up with the trends, and adding new services that we
                believe will assist in our clients’ growth. The end goal is
                customer success and we’re not satisfied until that success is
                reached: even if it requires extra time and resources on our
                end. We’re firm believers that the success of our clients is
                truly our success; we’d be nowhere without them.
              </p>
              <p>
                We work upon the various type of Digital Products which are
                directly related in elevating your Business, Memories, Dream,
                Faith, and Belief of sustaining on this current Digital Market.
                We are comprising of many Developers Hard work, Smart work, and
                business enthusiasts who will constantly lead your Cherishing
                Dream come true. "Your Vision, Our Creation" is the only
                objective of our community. We put creativity in our work which
                is been visualized by you.
              </p>

              <div className='btn-group mt-2'>
                <button className='outlined-black'>
                  <FiDownload className='icon' />
                  Get Our App
                </button>
                <button className='outlined-black'>
                  <BsReplyAllFill className='icon' />
                  Explore All Services
                </button>
              </div>
            </div>
          </Col>
          <Col lg={5} className='flex-center'>
            <Image
              src='/about/about.svg'
              alt='honourcreators'
              height={550}
              width={550}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutIntro;
