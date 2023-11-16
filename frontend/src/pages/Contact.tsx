import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '@/components/helmet/Helmet'
import BannerSection from '@/components/UI/banner-section/BannerSection'
import '@/styles/contact.scss'

const Contact = () => {

  return (
    <Helmet title='Contact'>
      <BannerSection title='Contact'/>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='8' sm='12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8150.9244425001025!2d-79.413293352952!3d43.75652031163202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d6239aee439%3A0x529c4703a019fe11!2s416%20Yonge%20St%2C%20North%20York%2C%20ON%20M2N%200B3!5e0!3m2!1sen!2sca!4v1677851273899!5m2!1sen!2sca" title="location map"></iframe>
            </Col>
            <Col lg='4' md='4' sm='12'>
            <div className='contact-container'>
              <h2>Contact</h2>
              <h6>Address:</h6>
              <p>416 Yonge St. North York, ON M2N 0B3</p>
              <h6>Phone:</h6>
              <p>647-232-1345</p>
              <h6>Email:</h6>
              <p>tastytreat@gmail.com</p>
              <h6>Office Hours:</h6>
              <p>Monday - Friday</p>
              <p>9:00 am - 5:00</p>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
export default Contact