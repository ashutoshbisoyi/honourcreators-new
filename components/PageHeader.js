import Link from 'next/link';
import styles from '../styles/PageHeader.module.scss';
const PageHeader = ({ h3, p, h1, action, link, icon }) => {
  return (
    <header className={`container-fluid ${styles.pageHeader}`}>
      <div>
        <h3>{h3}</h3>
        <p>{p}</p>
        <h1>{h1}</h1>
        <Link href={link}>
          <button className='outlined-white'>
            {action}
            {icon}
          </button>
        </Link>
      </div>
    </header>
  );
};
export default PageHeader;
