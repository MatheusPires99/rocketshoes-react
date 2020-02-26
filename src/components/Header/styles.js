import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const CartList = styled.ul`
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  list-style: none;

  display: none;
  position: absolute;
  top: 45px;
  left: -30px;

  &::before {
    content: "";
    width: 15px;
    height: 15px;
    background-color: #fff;
    position: absolute;
    top: -12px;
    right: ${props => (props.cartLength ? "156px" : "70px")};
    transform: translateY(0.5em) rotate(45deg);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 270px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    img {
      max-width: 70px;
    }

    strong {
      font-size: 16px;
      color: #333;
    }

    span {
      font-weight: bold;
      font-size: 18px;
      color: #000;
    }

    button {
      background: none;
      border: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-top: 5px;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const ButtonEndPurchase = styled(Link)`
  background: #7159c1;
  padding: 12px 20px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, "#7159c1")};
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-bottom: 10px;
  }

  strong {
    text-align: center;
    white-space: nowrap;
    font-size: 16px;
  }
`;

export const Cart = styled.div`
  position: relative;

  &:hover ${CartList} {
    display: flex;
  }

  .suport {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const ButtonGoCheckout = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
