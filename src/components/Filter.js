import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//redux
import { filterProducts } from "redux/actions/actions";
//@material-ui core
import AppBar from "@material-ui/core/AppBar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//constants
import { PRODUCT_TYPE } from "constants/product";

const NavBarContainer = styled(AppBar)`
  && {
    background-color: white;
    flex-direction: row;
    padding: 0;
    height: 72px;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
  }
`;
const Dropdown = styled(FormControl)`
  && {
    width: 250px;
    margin: 8px 20px 0px 0px;
  }
`;

const Filter = ({ currenFilterType, filterProducts }) => {
  const handleFilterChange = (event) => {
    filterProducts(event.target.value);
  };

  return (
    <NavBarContainer>
      <Dropdown variant="outlined">
        <InputLabel id="produc-filter-label">Product Filter</InputLabel>
        <Select
          labelId="produc-filter-label"
          id="product-filter"
          value={currenFilterType}
          onChange={handleFilterChange}
          label="Product Filter"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Object.keys(PRODUCT_TYPE).map((key) => (
            <MenuItem value={PRODUCT_TYPE[key]}>{PRODUCT_TYPE[key]}</MenuItem>
          ))}
        </Select>
      </Dropdown>
    </NavBarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currenFilterType: state.productsReducer.currenFilterType
  };
};
const mapDispatchToProps = (dispatch) => ({
  filterProducts: (data) => dispatch(filterProducts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
