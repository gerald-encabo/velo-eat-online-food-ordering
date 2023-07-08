import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cartActions } from "@/redux/shopping-cart/cartSlice.js";
import { ProductDataType } from "@/types/ListTypes";
import Helmet from "@/components/helmet/Helmet";
import BannerSection from "@/components/UI/banner-section/BannerSection";
import ProductCard from "@/components/UI/product-card/ProductCard";
import products from "@/assets/data/productData.js";
import TestimonialSlider from "@/components/UI/slider/TestimonialSlider";
import "@/styles/product-details.scss";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product: ProductDataType | undefined = products.find(
    (product) => product.id.toString() === productId
  );
  const { id, title, price, img, category, desc } = product as ProductDataType;

  const [previewImg, setPreviewImg] = useState(product?.img);

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name: "",
        img,
        price,
        quantity: 0,
        totalPrice: price,
        title,
      })
    );
  };

  const submitHandler = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product?.img);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Food Details">
      <BannerSection title={category} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="food-details-product_images">
                <div
                  className="food-details-img_item mb-3"
                  onClick={() => setPreviewImg(product?.img)}
                >
                  <img
                    src={product?.img}
                    alt=""
                    className="w-50"
                    loading="lazy"
                  />
                </div>
                <div
                  className="food-details-img_item mb-3"
                  onClick={() => setPreviewImg(product?.img2)}
                >
                  <img
                    src={product?.img2}
                    alt=""
                    className="w-50"
                    loading="lazy"
                  />
                </div>
                <div
                  className="food-details-img_item mb-3"
                  onClick={() => setPreviewImg(product?.img3)}
                >
                  <img
                    src={product?.img3}
                    alt=""
                    className="w-50"
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="food-details-product_main_img">
                <img src={previewImg} alt="" className="w-100" loading="lazy" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="food-details-single_product_content">
                <h2 className="food-details-product_title">{title}</h2>
                <p className="food-details-product_price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button
                  aria-label="Add to cart"
                  className="universal_btn"
                  onClick={addItem}
                >
                  Add to cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="food-details-tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${
                    tab === "desc" ? "food-details-tab_active" : ""
                  } `}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${
                    tab === "rev" ? "food-details-tab_active" : ""
                  } `}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="food-details-tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="food-details-tab_form mb-3">
                  <div className="food-details-testimonial_review">
                    <TestimonialSlider />
                  </div>
                  <form
                    className="food-details-form my-5"
                    onSubmit={submitHandler}
                  >
                    <div className="food-details-form_group">
                      <input
                        type="text"
                        aria-label="Your name"
                        placeholder="Enter your name"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="food-details-form_group">
                      <input
                        type="text"
                        aria-label="Your email"
                        placeholder="Enter your email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="food-details-form_group">
                      <textarea
                        rows={6}
                        aria-label="Your review"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="universal_btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-4">
              <h2 className="food-details-related_product_title">
                You might also like
              </h2>
            </Col>
            {
              relatedProduct.map((item, index) =>
                product?.id !== item.id ? (
                  <Col lg="3" md="4" sm="6" xs="6" key={index} className="mt-4">
                    <ProductCard item={item} />
                  </Col>
                ) : (
                  ""
                )
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
