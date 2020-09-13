import React, { useEffect } from "react";
import { connect } from "react-redux";
//redux
import { getAllProdcuts } from "redux/actions/actions";
//component
import ProductItem from "components/ProductItem";
//material ui
import { Grid } from "@material-ui/core";

const Products = ({ products, getAllProdcuts }) => {
  useEffect(() => {
    //Fetch all products when the page loading
    getAllProdcuts();
    // eslint-disable-next-line
  }, []);
  return (
    <Grid container>
      {products.map((item) => (
        <ProductItem item={item} key={item.productName} />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAllProdcuts: () => dispatch(getAllProdcuts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
