

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Information(props) {
  return (
    <>
    <Card>
    <Card.Header>Datos personales</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Nombre  {props.level}</ListGroup.Item>
          <ListGroup.Item>Apellido {props.level}</ListGroup.Item>
          <ListGroup.Item>Nivel Mercado Puntos {props.level}</ListGroup.Item>
        </ListGroup>
    </Card>
    </>  
  );
}




