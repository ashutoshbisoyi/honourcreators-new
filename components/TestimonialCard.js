import Image from 'next/image';
import styles from '../styles/TestimonialCars.module.scss';
const TestimonialCards = (props) => {
  return (
    <div className={styles.card}>
      <div className='testimonial-card'>
        <p>{props.comment}</p>
        <div className='d-flex align-items-center'>
          <Image
            src={`/clients/${props.imgsrc}.png`}
            alt={props.imgsrc}
            height={60}
            width={60}
          />
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
