import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/Intro.module.scss';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { BsReplyAllFill } from 'react-icons/bs';
const ServiceIntro = (props) => {
  return (
    <section className={styles.intro}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className='content'>
              <h2>
                Why you need <span>{props.serviceName}</span>
              </h2>
              <hr />
              <p>{props.reason}</p>
              <h4>Benifits of {props.serviceName} from honourcreators:</h4>
              <ul className={styles.checkList}>
                <li>{props.reason1}</li>
                <li>{props.reason2}</li>
                <li>{props.reason3}</li>
              </ul>
              <div className='btn-group mt-2'>
                <button className='outlined-black'>
                  <FiDownload className='icon' />
                  Get Service
                </button>
                <button className='outlined-black'>
                  <BsReplyAllFill className='icon' />
                  Contact
                </button>
              </div>
            </div>
          </Col>
          <Col lg={5} className='flex-center'>
            <Image
              src='/home/intro.svg'
              alt='honourcreators'
              height={450}
              width={450}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceIntro;
