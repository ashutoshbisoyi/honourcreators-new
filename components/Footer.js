import {
  AiOutlineMail,
  AiOutlineDownload,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='container-fluid' className={styles.footer}>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              {/* <Image /> */}
              <h2>HonourCreators</h2>
              <p>Copyright © 2020 HonourCreators All Rights Reserved.</p>
              <p className='mb-5'>
                At HonourCreators, we are committed to putting our users first.
                This means being open about how we use and protect the data that
                you entrust with us. With this in mind, we have updated our
                Privacy Policy.
              </p>
              <Link href='/'>
                <button>
                  <AiOutlineDownload className='icon' /> Get our mobile app
                </button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <h3>Contact</h3>
                <hr />
                <ul>
                  <li>
                    <a href='#'>
                      <FiPhoneCall className='icon' /> +919777111809
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <AiOutlineMail className='icon' />{' '}
                      honourcreators@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <GiEarthAfricaEurope className='icon' />{' '}
                      www.honourcreators.com
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h3>Our Services</h3>
                <hr />
                <div className='d-flex'>
                  <ul className='mr-3'>
                    <li>
                      <Link href='/services/logodesigning'>Logo Desgining</Link>
                    </li>
                    <li>
                      <Link href='/services/admaking'>Ad Making</Link>
                    </li>
                    <li>
                      <Link href='/services/businessconsulting'>
                        Business Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href='/services/videomaking'>Video Making</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href='/services/customprinting'>
                        Custom Printing
                      </Link>
                    </li>
                    <li>
                      <Link href='/services/postermaking'>Poster Making</Link>
                    </li>
                    <li>
                      <Link href='/services/graphicsdesigning'>
                        Graphics Designing
                      </Link>
                    </li>
                    <li>
                      <Link href='/services/webdevelopment'>
                        Web Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md='12' className='socialMedia'>
                <h3>Social Media</h3>
                <hr />
                <ul className='d-flex'>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <AiOutlineLinkedin
                        className='icon'
                        style={{ fontSize: '25px' }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <AiOutlineFacebook
                        className='icon'
                        style={{ fontSize: '25px' }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/honourcreators/'
                      target='_blank'
                      rel='noopener'
                    >
                      <AiOutlineInstagram
                        className='icon'
                        style={{ fontSize: '25px' }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://api.whatsapp.com/send?phone=919348025940&amp;text=&amp;source=&amp;data='
                      target='_blank'
                      rel='noopener'
                    >
                      <FaWhatsapp
                        className='icon'
                        style={{ fontSize: '25px' }}
                      />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
