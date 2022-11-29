import React, { useContext } from 'react'
import styled from 'styled-components';
import CartContext from '../Context/Cart/CartContext';
import {GrCart} from 'react-icons/gr'

const HomeSection = styled.div`
  width: 30%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 12px;
  margin: auto;
  word-wrap: break-word;
  @media screen and (max-width: 1147px) {
      width: 45%;
  };
  @media screen and (max-width: 700px) {
      width: 90%;
  };`;
const ProductsSection = styled.section``;
const Description = styled.div`
  margin: 20px 0;`;
const CardImg = styled.img`
  object-fit: cover;
  flex-shrink: 1;
  width: 100%;
  height: 281px;
  margin-bottom: 20px;`;
const DescriptionTitle = styled.h3``;
const DescriptionPrice = styled.h4`
  margin: 20px 0;`;
const AddToCart = styled.button`
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 25px;
  background-color: #ffa430;
  border: none;
  transition: all 0.2s ease-in;
  :hover{
    color: white;
    background-color: #f1b668;
    transform: translate(2px, -2px);
  };
  :focus, :active{
    outline: none;
  }`;

const HomeProducts = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <HomeSection>
      <ProductsSection>
          <CardImg src={product.image} />
          <DescriptionTitle>{product.name}</DescriptionTitle>
          <Description>
            <DescriptionPrice>{(`R$${product.price}`)}</DescriptionPrice>
          </Description>
          <AddToCart onClick={() => addToCart(product)}><GrCart/></AddToCart>
      </ProductsSection>
    </HomeSection>
  )
}

export default HomeProducts