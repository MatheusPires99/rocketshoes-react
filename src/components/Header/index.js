import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { MdShoppingCart, MdRemoveShoppingCart, MdDelete } from "react-icons/md";

import * as CartActions from "../../store/modules/cart/actions";

import { formatPrice } from "../../util/format";

import {
  Container,
  Cart,
  CartList,
  ButtonGoCheckout,
  ButtonEndPurchase,
  Total,
  CartEmpty
} from "./styles";

import logo from "../../assets/images/logo.svg";

function Header({ cart, total, amount, removeFromCart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart>
        <ButtonGoCheckout to="/cart">
          <div className="suport">
            <strong>Meu carrinho</strong>
            <span>{cart.length} itens</span>
          </div>
          <MdShoppingCart size={36} color="#FFF" />
        </ButtonGoCheckout>

        <CartList cartLength={cart.length}>
          {cart.length ? (
            <>
              {cart.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <strong>{amount[product.id]}x</strong>
                  <span>{product.priceFormatted}</span>

                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdDelete color="#7159c1" size={20} />
                  </button>
                </li>
              ))}

              <Total>
                <span>Total:</span>
                <strong>{total}</strong>
              </Total>

              <ButtonEndPurchase to="/cart">FINALIZAR COMPRA</ButtonEndPurchase>
            </>
          ) : (
            <CartEmpty>
              <MdRemoveShoppingCart size={36} color="#bbb" />
              <strong>Seu carrinho está vazio.</strong>
            </CartEmpty>
          )}
        </CartList>
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
