import NextHead from '../components/NextHead';
import PageHeader from '../components/PageHeader';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Intro from '../components/sections/home/Intro';
import Why from '../components/sections/home/Why';
import Contact from '../components/sections/home/Contact';
import Testimonial from '../components/sections/home/Testimonial';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NextHead title='HonourCreators' />
      <main>
        <PageHeader
          h3='New Startup! Want to grow digitally?'
          p='meet your new partner'
          h1='HonourCreators :) Your digital partner'
          action='Get Our Service'
          // icon={<AiOutlineArrowRight className='icon' />}
          link='/services'
        />
        <Intro />
        <Why />
        <Contact />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
