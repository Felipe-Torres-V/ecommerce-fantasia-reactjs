import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import styled from 'styled-components';
import {CgRemoveR} from 'react-icons/cg'

const CartItemList = styled.li`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  list-style-type: none;
  height: 100px;
  display: flex;
  gap: 5px;
  align-items: center;
  :nth-child(1) {
    border-top: 1px solid gray;
  }`;
const ItemImage = styled.img`
  height: 100%;
  width: 100px;
  object-fit: cover;`;
const ItemName = styled.div``;
const ItemRemove = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  :focus, :active {
    outline: none;
  }`;

const CartItem = ({item}) => {

  const { removeItem } = useContext(CartContext)

  return (
    <CartItemList>
      <ItemImage src={item.image}/>
      <ItemName>
        {item.name} {(`R$${item.price}`)}
      </ItemName>
      <ItemRemove onClick={() => removeItem(item._id)}>
        <CgRemoveR/>
      </ItemRemove>
    </CartItemList>
  )
}

export default CartItem