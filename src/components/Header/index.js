import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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

export default function Header() {
  const cart = useSelector(state => state.cart);
  const cartSize = useSelector(state => state.cart.length);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart>
        <ButtonGoCheckout to="/cart">
          <div className="suport">
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingCart size={36} color="#FFF" />
        </ButtonGoCheckout>

        <CartList cartLength={cartSize}>
          {cartSize ? (
            <>
              {cart.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <strong>{amount[product.id]}x</strong>
                  <span>{product.priceFormatted}</span>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
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
