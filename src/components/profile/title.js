

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'


export default function Title(props) {
  return (
    <Card>
    <Card.Body>
        <Image style={{ width: '5rem'}} rounded src={props.image}></Image>
    <Card.Text>
        {props.lastName}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}
