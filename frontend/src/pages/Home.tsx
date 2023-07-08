import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { BsShieldCheck, BsCheck2Square } from "react-icons/bs";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FeaturedData, ProductDataType } from "@/types/ListTypes";
import Helmet from "@/components/helmet/Helmet";
import Category from "@/components/UI/category/Category";
import ProductCard from "@/components/UI/product-card/ProductCard";
import TestimonialSlider from "@/components/UI/slider/TestimonialSlider";
import heroImg from "@/assets/images/hero.png";
import foodCategoryImg01 from "@/assets/images/hamburger.png";
import foodCategoryImg02 from "@/assets/images/pizza.png";
import foodCategoryImg03 from "@/assets/images/sushi.png";
import foodCategoryImg04 from "@/assets/images/taco.png";
import whyImg from "@/assets/images/location.png";
import products from "@/assets/data/productData.js";
import networkImg from "@/assets/images/network.png";
import featureData from "@/assets/data/featureData";
import "@/styles/hero-section.scss";
import "@/styles/home.scss";

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState<ProductDataType[]>([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      const filteredProducts = products.filter(
        (item) => item.popular === "yes"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger" && item.popular === "yes"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza" && item.popular === "yes"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "SUSHI") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sushi" && item.popular === "yes"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "TACO") {
      const filteredProducts = products.filter(
        (item) => item.category === "Taco" && item.popular === "yes"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="home-hero_content">
                <h5 className="mb-3">Quick food delivery to your home</h5>
                <h1 className="mb-4 home-hero_title">
                  <span>Login!</span> make an order &<br /> food will{" "}
                  <span>be at your doorstep</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae fuga suscipit rerum sunt cum nihil.
                </p>
                <div className="home-hero_btns d-flex align-items-center gap-5 mt-4">
                  <button
                    className="home-order_btn d-flex aligh-items-center justify-content-between"
                    aria-label="Order now"
                  >
                    <Link to="/foods">
                      Order Now <MdArrowForwardIos />
                    </Link>
                  </button>
                  <button className="home-all_foods_btn" aria-label="All foods">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="home-hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="home-shipping_icon">
                      <AiOutlineCar />
                    </span>
                    Low delivery charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="home-shipping_icon">
                      <BsShieldCheck />
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="home-hero_img">
                <img
                  src={heroImg}
                  alt="home-hero_img"
                  className="w-100 mt-5"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="home-feature_subtitle mb-4">What we serve</h5>
              <h2 className="home-feature_title">Just sit back at home</h2>
              <h2 className="home-feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 home-feature_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam, itaque.
              </p>
              <p className="home-feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                accusamus.{" "}
              </p>
            </Col>
            {
              featureData.map((item: FeaturedData, index) => (
                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                  <div className="home-feature_item text-center px-5 py-3">
                    <img
                      src={item.imgUrl}
                      alt="feature-img"
                      className="w-25 mb-3"
                      loading="lazy"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
              </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="home-food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`home-all_btn ${
                    category === "ALL" ? "home-foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("ALL");
                  }}
                  aria-label="All categories"
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "home-foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("BURGER");
                  }}
                  aria-label="Burger category"
                >
                  <img src={foodCategoryImg01} alt="Burger" loading="lazy" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "home-foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("PIZZA");
                  }}
                  aria-label="Pizza category"
                >
                  <img src={foodCategoryImg02} alt="Pizza" loading="lazy" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SUSHI" ? "home-foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("SUSHI");
                  }}
                  aria-label="Sushi category"
                >
                  <img src={foodCategoryImg03} alt="sushi" loading="lazy" />
                  Sushi
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "TACO" ? "home-foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("TACO");
                  }}
                  aria-label="Taco category"
                >
                  <img src={foodCategoryImg04} alt="Taco" loading="lazy" />
                  Taco
                </button>
              </div>
            </Col>
            {
              allProducts.map((item, index) => (
                <Col lg="3" md="4" sm="6" x="6" key={index} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section className="home-why_choose_us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src={whyImg}
                alt="home-why_tasty_treat"
                className="w-100 mt-5"
              />
            </Col>
            <Col lg="6" md="6">
              <div className="home-why_tasty_treat">
                <h2 className="home-tasty_treat_title mb-4">
                  Why Velo<span>Pro</span>?
                </h2>
                <p className="home-tasty_treat_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore libero sit placeat exercitationem dolores excepturi,
                  debitis totam maiores sapiente molestiae modi veritatis illum?
                  Ad fugit, distinctio corporis nulla tempora qui ex aut
                  inventore accusantium laborum in atque neque sapiente fuga
                  odio ipsa adipisci possimus est vero eos earum consequatur
                  modi.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-3">
                    <p className="home-choose_us_title d-flex align-items-center gap-2">
                      <BsCheck2Square className="check" /> Fresh and tasty foods
                    </p>
                    <p className="home-choose_us_desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vitae ab tempore a fuga corrupti ducimus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-3">
                    <p className="home-choose_us_title d-flex align-items-center gap-2">
                      <BsCheck2Square className="check" /> Quality support
                    </p>
                    <p className="home-choose_us_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi nulla accusantium explicabo aliquid voluptatem sunt,
                      labore vero at.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-3">
                    <p className="home-choose_us_title d-flex align-items-center gap-2">
                      <BsCheck2Square className="check" /> Order from any
                      location
                    </p>
                    <p className="home-choose_us_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est doloremque hic temporibus, modi corporis laborum non!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item) => (
                <Col lg="3" md="4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="home-testimonial">
                <h5 className="home-testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="home-testimonial_title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="home-testimonial_desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae consequuntur hic earum ipsa placeat necessitatibus! At,
                  itaque id exercitationem quasi magni accusamus eius error
                  aperiam reiciendis doloribus recusandae, dolorem incidunt.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={networkImg}
                alt="home-testimonial_img"
                className="w-100 mt-5"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Home;
