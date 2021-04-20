import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../../../styles/Contact.module.scss';
const Contact = () => {
  return (
    <section className={`container-fluid ${styles.contact}`}>
      <h4>Getting confused! Want a one to one conversation?</h4>
      <div className='btn-group'>
        <a href='tel:9777111809'>
          <button className='outlined-white'>
            <FiPhoneCall className='icon' /> Call Us
          </button>
        </a>
        <a href='mailto:ashutoshbisoyi205@gmail.com'>
          <button className='outlined-white'>
            <AiOutlineMail className='icon' />
            Mail Us
          </button>
        </a>
      </div>
    </section>
  );
};
export default Contact;
