import categoryData from '@/assets/data/categoryData'
import { Container, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'
import '@/styles/category.scss'

const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item, index) => (
                    <Col lg='3' md='4' sm='6' xs='6' key={index} className="mb-3">
                        <Link to='/foods'>
                            <div className="category-item d-flex align-items-center gap-3">
                                <div className="category-img">
                                    <img src={item.imgUrl} alt='category-item' loading="lazy" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}
export default Category