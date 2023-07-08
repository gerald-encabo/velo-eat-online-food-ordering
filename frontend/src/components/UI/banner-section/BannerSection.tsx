import { Container } from "react-bootstrap"
import '@/styles/banner-section.scss';

const BannerSection = (props) => {
  return (
    <section className='banner-section'>
        <Container>
            <h1 className="text-white fs-1">{props.title}</h1>
        </Container>
    </section>
  )
}
export default BannerSection