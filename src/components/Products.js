import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//redux
import { getAllProdcuts } from "redux/actions/actions";
//component
import ProductItem from "components/ProductItem";
//material ui
import { Grid } from "@material-ui/core";

const GridContainer = styled(Grid)`
  && {
    margin-top: 72px;
  }
`;

const Products = ({ products, currenFilterType, getAllProdcuts }) => {
  useEffect(() => {
    //Fetch all products when the page loading
    getAllProdcuts();
    // eslint-disable-next-line
  }, []);

  //render products based on filtering type
  const items = !!currenFilterType
    ? products.filter((item) => item.type === currenFilterType)
    : products;

  return (
    <GridContainer container>
      {items.map((item) => (
        <ProductItem item={item} key={item.productName} />
      ))}
    </GridContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    currenFilterType: state.productsReducer.currenFilterType
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAllProdcuts: () => dispatch(getAllProdcuts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
