import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../reducers/navReducer'
import styled from 'styled-components'

const Burger = () => {
    const dispatch = useDispatch();
    const { navOpen } = useSelector((store) => store.nav);

  return (
    <ScBurger onClick={() => dispatch(toggleNav())}>
		<div className={navOpen ? "active" : "line"} />
        <div className={navOpen ? "active" : "line"} />    
    </ScBurger>
  )
}

const ScBurger = styled('div')`
    background: var(--hero);
    position: fixed;
    top: 4rem;
    right: 9.2%;
    z-index: 5;
    width: 46px;
    height: 46px;
    border-radius: 100%;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.8s ease 1.6s forwards;
        
    .line,
    .active { 
    width: 26px; 
    height: 2px; 
    position: absolute;
    background: var(--light); 
    right: 0;
    margin: auto;
    left: 0;
    border-radius: 1px;
    transition: all 0.46s cubic-bezier(0.5, 0.1, 0.3, 1.4);
    width:26;top: calc(50% - ((3px)) + -2px);
        &:nth-of-type(1) {
            top: calc(50% - ((3px)) + -3px);
            transform: translate(12%, 0);
            width: 22px
        }
        &:nth-of-type(2) {
            top: calc(50% - ((3px)) + 5px);
            width: 28px
        }
    }

    .active {
    transform:scale(1.23) rotate(180deg); 
        &:nth-of-type(1) {
        transform: rotate(225deg);
        top: calc(50% - (1px))!important;
        width: 26px !important;
        }
        &:nth-of-type(2) {
        transform: rotate(-225deg);
        top: calc(50% - (1px))!important;
        width: 26px !important;
        }
    }
    @media (max-width: 1440px) {
        right: 9.8%;
    }
    @media (max-width: 1220px) {
        right: 2.6%;
    }
    @media (max-width: 768px) {
        right: 3.2%;
    }
`

export default Burger