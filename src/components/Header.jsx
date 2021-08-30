import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import s from "./Header.module.css";
import NavSideBar from "./NavMenu/NavSideBar";

function Header() {

  const randomColor = function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[getRandomNumber(0, 15)];
    }
    return color;
  };
  function getRandomNumber(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }


  const Word = styled.ul`
    display: flex;
    flex-flow: row nowrap;
  `;
  const Letter = styled.li`
    transition: all 2.5s ease;
    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.2);
      color: ${randomColor};
    }
    @media screen and (max-width: 992px) {
      &:hover {
        color: #333;
        transform: none;
      }
    }
  `;

  const Header = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    z-index: 5;
    @media screen and (max-width: 576px) {
      height: 70px;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    max-width: 1560px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
  `;

  const PageTitle = styled.div`
    display: flex;
    align-items: center;
  `;

  const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 90%;
    font-family: "Circe Extra Bold", sans-serif;
    & > :last-child {
      position: relative;
      left: 12px;
    }
    transition: all 1s ease;
    &:hover {
      transition: all 0.5s ease;
      transform: translateX(5px);
    }
    @media screen and (max-width: 576px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 992px) {
      &:hover {
        transform: translateX(0);
      }
    }
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 700px;
    margin-right: -25px;
    transition: all 0.5s ease;
    @media screen and (max-width: 992px) {
      display: none;
    }
    @media screen and (min-width: 1200px) {
      width: 800px;
      transition: all 0.5s ease;
    }
  `;

  const NavItem = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Circe Bold", sans-serif;
    transition: all 0.5s ease;
    &:hover {
      color: green;
      transition: all 0.3s ease;
      transform: translateX(-5px); 
    }
    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    } 
    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  `;

  return (
    <Header>
      <Wrapper>

        <PageTitle>
          <Link to="/">
            <Title>
              <Word>
                <Letter>M</Letter>
                <Letter>o</Letter>
                <Letter>z</Letter>
                <Letter>h</Letter>
                <Letter>g</Letter>
                <Letter>a</Letter>
                <Letter>n</Letter>
              </Word>
              <Word>
                <Letter>N</Letter>
                <Letter>a</Letter>
                <Letter>m</Letter>
                <Letter>i</Letter>
              </Word>
            </Title>
          </Link>
        </PageTitle>

        <NavSideBar/>

        <Nav>
          <NavLink to="/Conceptual_Art" activeClassName={s.activeLink}>
            <NavItem>Conceptual Art</NavItem>
          </NavLink>

          <NavLink to="/Nature" activeClassName={s.activeLink}>
            <NavItem>Nature</NavItem>
          </NavLink>

          <NavLink to="/portraits" activeClassName={s.activeLink}>
            <NavItem>Portrait</NavItem>
          </NavLink>

          <NavLink to="/Child Photography" activeClassName={s.activeLink}>
            <NavItem>Child Photography</NavItem>
          </NavLink>

          <NavLink to="/about" activeClassName={s.activeLinkAbout}>
            <NavItem>about</NavItem>
          </NavLink>
        </Nav>
      </Wrapper>
    </Header>
  );
}

export default Header;
