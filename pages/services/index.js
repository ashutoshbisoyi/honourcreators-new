import NextHead from '../../components/NextHead';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import OurServices from '../../components/sections/services.js/OurServices';

export default function Services() {
  return (
    <>
      <NextHead title='Services-HonourCreators' />
      <main>
        <PageHeader
          h3='All you need is here'
          p='explore more with us'
          h1='Our Services - Get Everything at One Place'
          action='Contact Us'
          link='/contact'
        />
        <OurServices />
      </main>
      <Footer />
    </>
  );
}
