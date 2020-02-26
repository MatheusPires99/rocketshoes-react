import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from "../../services/api";

import * as CartAction from "../../store/modules/cart/actions";

import { Container, ProductList } from "./styles";

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired
  };

  state = {
    products: [],
    loading: true
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    this.setState({
      products: data,
      loading: false
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

    return (
      <Container loading={loading}>
        {loading ? (
          <FaSpinner color="#FFF" size={36} />
        ) : (
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button
                  type="button"
                  onClick={() => this.handleAddProduct(product.id)}
                >
                  <div>
                    <MdAddShoppingCart size={16} color="#fff" />{" "}
                    {amount[product.id] || 0}
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            ))}
          </ProductList>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
