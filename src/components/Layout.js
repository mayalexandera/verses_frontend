import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class Layout extends React.Component {
  componentDidMount() {
    this.props.initBrands();
    this.props.initProducts();
    this.props.initFetchPlans();


   return this.props.current_user ? this.props.fetchUser() : null
  }

  render() {
    return <main>{this.props.children}</main>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    userId: state.auth.userId,
    current_user: state.auth.current_user,
    brands: state.brand.select,
    products: state.product.select,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initProducts: () => dispatch(actions.initProducts()),
    initBrands: () => dispatch(actions.initBrands()),
    initFetchPlans: () => dispatch(actions.initFetchPlans()),
    fetchUser: () => dispatch(actions.fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
