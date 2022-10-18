import React from "react";
import Carousel from "../carousel/carousel"
import Product from "../product/product"
import Title from "./title"
import Information from "./information"
import Container from 'react-bootstrap/Container';
import Purchase from "./purchase";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useQuery } from '@apollo/client';
import { GET_PAYMENT,GET_USER_INFORMATION } from '../../client'


export default function Profile(props) {
  const {datosPersonales} = props;
  return (
    <Container>
          <Container>
                <Row><Col><Title datosPersonales={props.datosPersonales}/></Col></Row>
          </Container>

          <Container style={{ marginTop: '2rem' }}>
                <Row><Col><Information /></Col></Row>
          </Container>

          <Container style={{ marginTop: '2rem' }}>
                <Row><Col><Purchase /></Col></Row>
          </Container>
    </Container>
  );
}