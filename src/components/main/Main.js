import React from "react";
import Carousel from "../carousel/carousel"
import Product from "../product/product"
import Profile from "../profile/profile"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useQuery } from '@apollo/client';
import { GET_PAYMENT,GET_USER_INFORMATION, GET_USER_PURCHASE } from '../../client'




import "./Main.css";

export default function Main(props) {

  return (
    <>
    <Container>
          <Row>
            <Col><Profile></Profile></Col>
          </Row>
    </Container>

    </>
  );
}