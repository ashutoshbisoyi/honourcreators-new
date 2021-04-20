import React from 'react';
import NextHead from '../../NextHead';
import PageHeader from '../../PageHeader';
import Footer from '../../Footer';
import ServiceIntro from './ServiceIntro';
import Contact from '../home/Contact';
import ServiceSample from './ServiceSample';
const ServicePage = (props) => {
  return (
    <>
      <NextHead title={props.serviceName} />
      <main>
        <PageHeader
          h3={props.h3}
          p={props.p}
          h1={`${props.serviceName} With HonourCreators`}
          action='Contact Us'
          link='/contact'
        />
        <ServiceIntro
          serviceName={props.serviceName}
          reason={props.reason}
          reason1={props.reason1}
          reason2={props.reason2}
          reason3={props.reason3}
        />
        <Contact />
        <ServiceSample
          data={props.sampledata}
          servicename={props.serviceName}
          keyname={props.keyname}
        />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
