import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import styled from 'styled-components'
import CartItem from './CartItem'
import {FaTimes} from 'react-icons/fa'
import {FaRegSadCry} from 'react-icons/fa'

const CartSection = styled.div``;
const ShowCartSection = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid gray;
  padding: 10px;
  z-index: 10;`;
const ShowCartStyle = styled.div`
  text-align: right;`;
const ShowCartItalic = styled.i`
  cursor: pointer;
  color: gray;
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(90deg);
  }
  `;
const CartInnerWrapper = styled.div`
  height: max-content;
  max-height: 50vh;
  overflow-y: auto;`;
const CartList = styled.ul``;
const CartTotal = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;`;
const Total = styled.div``;
const Amount = styled.div`
  margin-left: 5;`;

const Cart = () => {

  const { showCart, cartItems, showHideCart} = useContext(CartContext)

  return (
    <CartSection>
      {showCart && (
        <ShowCartSection>
          <ShowCartStyle>
            <ShowCartItalic aria-hidden='true' onClick={showHideCart}><FaTimes/></ShowCartItalic>
          </ShowCartStyle>
          <CartInnerWrapper>
            {cartItems.length === 0 ? (<h4>Cart is Empty <FaRegSadCry/></h4>) :  (
              <CartList>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item}/>
                ))}
              </CartList>
            )}
          </CartInnerWrapper>
          <CartTotal>
            <Total>Cart Total</Total>
            <Amount>
              R${(cartItems.reduce((amount, item) => item.price + amount, 0))}
            </Amount>
          </CartTotal>
        </ShowCartSection>
      )}
    </CartSection>
  )
}

export default Cart