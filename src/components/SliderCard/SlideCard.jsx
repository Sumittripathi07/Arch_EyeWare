import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={6}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <Link to="/shop">
            {" "}
            <button className="btn-primary">Visit Collections</button>
          </Link>
        </Col>
        <Col md={6}>
          <img src={cover} alt="#" />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
