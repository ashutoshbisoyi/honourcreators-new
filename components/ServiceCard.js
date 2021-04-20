import { AiOutlineArrowRight } from 'react-icons/ai';
import { Card, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ p, heading, description, link, imgsrc }) => {
  return (
    <Col md={4} className='flex-center'>
      <Card style={{ width: '23rem' }} className='mb-4'>
        <Image
          src={`/servicebanners/${imgsrc}.jpg`}
          alt={imgsrc}
          width={500}
          height={300}
        />
        <Card.Body>
          <Card.Text>{p}</Card.Text>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link href={link}>
            <button className='outlined-black'>
              Know More <AiOutlineArrowRight className='icon' />
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
