import React, { useContext } from 'react'
import styled from 'styled-components';
import {GrCart} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs';
import CartContext from '../Context/Cart/CartContext';
import {VscFlame} from 'react-icons/vsc'

const NavBar = styled.nav`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #353839;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;`;
const NavLeft = styled.div`
    flex: 1;
    font-size: xx-large;
    font-family: 'Kanit', sans-serif;`;
const NavMiddle = styled.div`
    color: gray;
    flex: 1;`;
const NavRight = styled.div`
    flex: 1;`;
const NavInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 25px;
    background-color: white;`;
const NavInput = styled.input`
    width: 100%;
    padding: 0 10px;
    border: none;
    display: block;
    :focus, :active {
        outline: none;
    }`;
const NavIcon = styled.i`
 padding-right: 10px;`;
const NavItalic = styled.i`
    cursor: pointer;
    margin-right: 50px;
    padding: 10px;
    border-radius: 10px;
    background-color: white;`;
const CartIcon = styled.div`
    position: relative;
    width: max-content;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;`;
const ItemCount = styled.div``;

const Nav = () => {

    const {cartItems, showHideCart} = useContext(CartContext)

  return (
    <NavBar>
        <NavLeft>Car Shop<VscFlame/></NavLeft>
        <NavMiddle>
            <NavInputWrapper>
                <NavInput type='text'/>
                <NavIcon><BsSearch/></NavIcon>
            </NavInputWrapper>
        </NavMiddle>
        <NavRight>
            <CartIcon>
                <NavItalic aria-hidden='true' onClick={showHideCart}><GrCart/></NavItalic>
                {cartItems.length > 0 && (<ItemCount><span>{cartItems.length}</span></ItemCount>)}
            </CartIcon>
        </NavRight>
    </NavBar>
  )
}

export default Nav