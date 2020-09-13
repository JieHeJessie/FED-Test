import React from "react";
import styled from "styled-components";
//material ui
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const Container = styled(Grid)`
  && {
    text-align: center;
  }
`;
const CardContainer = styled(Card)`
  && {
    min-width: 250px;
    margin: 20px;
  }
`;
const ProductImg = styled.img`
  width: 320px;
  height: 320px;
`;
const SalesContainer = styled.div`
  height: 50px;
`;
const SalesTxt = styled.div`
  margin: 0;
  text-align: left;
  padding: 30px;
  color: red;
  font-weight: 700;
  font-size: 18px;
`;

const ProductItem = ({ item }) => {
  return (
    <Container item xs={12} sm={6} md={6} lg={3}>
      <CardContainer>
        <SalesContainer>
          {item.isSale && <SalesTxt>SALES!!!</SalesTxt>}
        </SalesContainer>
        <ProductImg
          src={`${process.env.PUBLIC_URL}/assets/${item.productImage}`}
          alt={item.roductName}
        />
        <CardContent>
          <Typography>{item.productName}</Typography>
          <Typography>{item.price}</Typography>
        </CardContent>
      </CardContainer>
    </Container>
  );
};

export default ProductItem;
