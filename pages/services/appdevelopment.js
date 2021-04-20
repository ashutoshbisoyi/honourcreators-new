import ServicePage from '../../components/sections/services.js/ServicePage';
import Data from '../../data/appdevelopmentdata';
const Appdevelopment = () => {
  return (
    <ServicePage
      serviceName='App Development'
      keyname='appdevelopment'
      h3='Every business needs to be present online'
      p='make your App today'
      reason='HonourCreators is more than a service providing platform and a
                business tool. It’s the online based service that helps you both
                start your own startup and boost your online presence through
                digital marketing and branding. It’s a all in one solution for
                all you need to make you stand out in the online market.'
      reason1='Lorem ipsum dolar emit now why the service is important'
      reason2='Lorem ipsum dolar emit now why the service is important'
      reason3='Lorem ipsum dolar emit now why the service is important'
      sampledata={Data}
    />
  );
};

export default Appdevelopment;
