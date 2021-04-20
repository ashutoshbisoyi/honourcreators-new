import NextHead from '../components/NextHead';
import PageHeader from '../components/PageHeader';
import AboutIntro from '../components/sections/about/AboutIntro';
import Clients from '../components/sections/about/Clients';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <NextHead title='About - HonourCreators' />
      <main>
        <PageHeader
          h3='Quality with Honesty'
          p='want to know more about us?'
          h1='About Us - Everything You Want To Know'
          action='Contact Us'
          link='/contact'
        />
        <AboutIntro />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default About;
