import ServiceCard from '../../ServiceCard';
import OurServiceData from '../../../data/OurServiceData';
import { Container, Row } from 'react-bootstrap';
const OurServices = () => {
  return (
    <section>
      <Container>
        <Row>
          {OurServiceData.map((value, index) => {
            return (
              <ServiceCard
                p={value.p}
                heading={value.heading}
                description={value.description}
                link={value.linkaddress}
                imgsrc={value.imgsrc}
                key={index}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
