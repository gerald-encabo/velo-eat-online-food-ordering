import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { AiOutlineCopyrightCircle} from 'react-icons/ai'
import { BsVimeo } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Moment from 'moment';
import '@/styles/footer.scss'
import '@/index.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer-logo text-start">
              <Link to='/home'>
                <BsVimeo className='footer-logo_icon' />
              </Link>
              <h5>Velo<span>Eat</span> Online Food Ordering</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam illum vero necessitatibus consectetur deserunt facere!</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
              <h5 className="footer-title">Delivery Time</h5>
              <ListGroup className="footer-deliver_time_list">
                  <ListGroupItem className="footer-delivery_time_item border-0 ps-0">
                    <span>Monday - Thursday</span>
                    <p>8:00 am - 10:00 pm</p>
                  </ListGroupItem>
                  <ListGroupItem className="footer-delivery_time_item border-0 ps-0">
                    <span>Friday - Sunday</span>
                    <p>8:00 am - 12:00 pm</p>
                  </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
              <h5 className="footer-title">Contact</h5>
              <ListGroup className="footer-deliver-_time_list">
                  <ListGroupItem className="footer-delivery_time_item border-0 ps-0">
                    <span>Location: 416 Yonge St. North York, ON M2N 0B3</span>
                  </ListGroupItem>
                  <ListGroupItem className="footer-delivery_time_item border-0 ps-0">
                    <span>Phone: 647-232-1345</span>
                  </ListGroupItem>
                  <ListGroupItem className="footer-delivery_time_item border-0 ps-0">
                    <span>Email: admin@veloeat.com</span>
                  </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
              <h5 className="footer-title">Newsletter</h5>
              <p>Subscribe our letter</p>
              <div className="footer-newsletter">
                  <input aria-label="newsletter email" type="email" placeholder="Enter your email" />
                <span><RiSendPlaneLine /></span>
              </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='footer-copyright_text'>
              <AiOutlineCopyrightCircle />&nbsp;{ Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className="footer-social_links d-flex align-items-center gap-4">
              <span><Link to='https://www.facebook.com/'><FaFacebook /></Link></span>
              <span><Link to='https://www.instagram.com/'><FaInstagram /></Link></span>
              <span><Link to='https://twitter.com/'><FaTwitter /></Link></span>
              <span><Link to='https://www.youtube.com/'><FaYoutube /></Link></span>
              <span><Link to='https://www.linkedin.com/'><FaLinkedin /></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer