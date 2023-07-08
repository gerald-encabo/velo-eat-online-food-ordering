import { Container, Row, Col } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductDataType } from "@/types/ListTypes";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Helmet from "@/components/helmet/Helmet";
import ProductCard from "@/components/UI/product-card/ProductCard";
import CommonSection from "@/components/UI/banner-section/BannerSection";
import products from "@/assets/data/productData.js";
import "@/styles/all-foods.scss";
import "@/styles/pagination.scss";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;

  // Search product through input data or dropdown sort
  const searchedProduct = products
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
      return false;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .sort((a: ProductDataType, b: ProductDataType): any => {
      if (sortTerm === "a-z") {
        return a.title.localeCompare(b.title);
      } else if (sortTerm === "z-a") {
        return b.title.localeCompare(a.title);
      } else if (sortTerm === "highest-price") {
        return b.price - a.price;
      } else if (sortTerm === "lowest-price") {
        return a.price - b.price;
      }
      return true;
    });

  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // React pagination
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="all-foods-search_widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  aria-label="Search"
                  placeholder="I'm looking for..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <AiOutlineSearch />
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="all-foods-sorting_widget text-end">
                <select
                  className="w-50"
                  onChange={(e) => setSortTerm(e.target.value)}
                  defaultValue="sort"
                >
                  <option disabled value="sort">
                    Sort
                  </option>
                  <option value="a-z">Alphabetically (A-Z)</option>
                  <option value="z-a">Alphabetically (Z-A)</option>
                  <option value="highest-price">High Price</option>
                  <option value="lowest-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="12" key={index} className="mb-4">
                <ProductCard item={item} key={index} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="all-foods-pagination_btns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
