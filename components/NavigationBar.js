import { Nav, Navbar, Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
const NavigationBar = () => {
  return (
    <>
      <Navbar
        className={styles.myNavbar}
        collapseOnSelect
        expand='lg'
        bg='light'
        sticky='top'
      >
        <Container>
          <Navbar.Brand href='/' className='flex-align-center'>
            <Image
              src='/honourcreatorsimg.png'
              alt='honourcreators logo'
              height={25}
              width={25}
              style={{ marginRight: '20px' }}
            />{' '}
            <span>HonourCreators</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Link href='/'>
                <div className='nav-link'>Home</div>
              </Link>
              <Link href='/about'>
                <div className='nav-link'>About</div>
              </Link>
              <Link href='/services'>
                <div className='nav-link'>Services</div>
              </Link>
              <button className={styles.navBtn}>Demo</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
