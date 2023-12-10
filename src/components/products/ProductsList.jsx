import { Container, Form, Row } from "react-bootstrap";
// import ProductCard from "./ProductCard";
import "./Products.scss";
import { products } from "../../helper/data";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true);

  // console.log(products);

  // console.log(search);

  const handleFav = (id, e) => {
    for (let index = 0; index < products.length; index++) {
      if (products[index].id === id) {
        setToggle(!toggle);
        toggle
          ? (e.target.style.color = "red")
          : (e.target.style.color = "black");
      }
    }
  };

  return (
    <>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-75 m-auto"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Container fluid className="product-list rounded-4  my-4 p-3">
        <Row className="g-2  mb-5 justify-content-center">
          {products
            .filter((item) => item.title.toLowerCase().includes(search))
            .map((product) => {
              return (
                <Card
                  key={product.id}
                  className="  col col-lg-3 col-md-4 col-sm-6  rounded-2  card"
                  role="button"
                >
                  <Card.Header className=" d-flex justify-content-between">
                    <Card.Title>
                      {" "}
                      <span> $</span> {product.price}{" "}
                    </Card.Title>
                    <MdFavorite
                      className="fav"
                      onClick={(e) => handleFav(product.id, e)}
                      type="button"
                      size={30}
                    />
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="player-logo"
                  />

                  <Card.Footer className="card__over">
                    <Card.Title> {product.title} </Card.Title>
                  </Card.Footer>
                </Card>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
