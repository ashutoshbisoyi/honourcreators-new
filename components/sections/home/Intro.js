import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/Intro.module.scss';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { BsReplyAllFill } from 'react-icons/bs';
const Intro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className='content'>
              <h2>
                We are <span>HonourCreators</span>
              </h2>
              <hr />
              <p>
                HonourCreators is more than a service providing platform and a
                business tool. It’s the online based service that helps you both
                start your own startup and boost your online presence through
                digital marketing and branding. It’s a all in one solution for
                all you need to make you stand out in the online market.
              </p>
              <h4>Let's know what you can do with us:</h4>
              <ul className={styles.checkList}>
                <li>Creating your unique logo design.</li>
                <li>
                  Launching your own website to improve coustomer approach.
                </li>
                <li>
                  Running digital advertisement online to gain more audience.
                </li>
                <li>
                  Creating future approached animated videos for more reach.
                </li>
                <li>Creating brand name via coustom printing and banner.</li>
                <li>Posting your own application to modern playstore.</li>
              </ul>
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
              src='/home/intro.svg'
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

export default Intro;
