import "./ProductItems.css"; 
import Card from "react-bootstrap/Card";

function ProductItems({ name, title, img }) {
  return (
    <div className="item">
      <Card className="product-card" style={{ height: "20rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "10rem", objectFit: "cover" }} 
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItems;
