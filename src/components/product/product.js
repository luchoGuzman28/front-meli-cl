import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product() {
  return (
    <Card style={{ width: '10rem'}}>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_670715-MLA50817056907_072022-F.webp" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
      </Card.Body>
    </Card>
  );
}