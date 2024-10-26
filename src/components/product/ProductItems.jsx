import "./ProductItems.css";
import Card from "react-bootstrap/Card";

function ProductItems({ name, title, img }) {
  return (
    <div className="item">
      <Card className="relative card-container">
        <div className="card-image-wrapper">
          <Card.Img src={img} alt={name} className="product-image" />
        </div>
        <div className="overlay" />
        <div className="card-text-wrapper">
          <Card.Body className="text-wrapper">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default ProductItems;
