import React, {Component} from 'react';
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";

import s from './NavSideBar.module.css';

import instagram from "../../img/icons/instagram.svg";
import telegram from "../../img/icons/telegram.svg";
//import facebook from "../../img/icons/facebook.svg";
//import github from '../../img/icons/github.svg'


class NavSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false
    };
  }

  toggleMenuClass = () => {
    let currentState = this.state.activeMenu;
    this.setState({activeMenu: !currentState});
  };

  render() {

    const List = styled.ul`
      display: flex;
      margin: auto;
      flex-flow: column nowrap;
      align-content: center;
    `;
    const ListItems = styled.li`
      &>a {
        font-size: 3rem;
        font-family: "Circe Extra Bold", sans-serif;
        color: #fff;
        @media screen and (max-width: 576px) {
          font-size: 2rem;
        }
      }
      
      &>a:hover {
        color: #5f23bc;
      }
    `;

    const Contacts = styled.div`
      display: flex;
      margin: auto;
      flex-flow: column nowrap;
      align-content: center;
      justify-content: space-between;
      height: 180px;
    `;
    const ContactsTitle = styled.p`
      font-size: 3rem;
      font-family: "Circe Extra Bold", sans-serif;
      color: #fff;
      text-align: center;
      transition: all 0.3s ease;  
      &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease;  
      }
      @media screen and (max-width: 576px) {
        font-size: 2rem;
      }
    `;
    const Mail = styled.a`
      font-size: 1.4rem;
      color: #fff;
      margin-top: -15px;
      transition: all 0.3s ease;
    `;
    const SocialMedia = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `;
    const Icon = styled.img`
      display: block;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;  
      margin: 0 10px;
      filter: invert(94%) sepia(0%) saturate(7494%) hue-rotate(317deg) brightness(106%) contrast(109%);
    `;

    return (
        <React.Fragment>

          <div className={s.navMenuBtn}>
            <button className={this.state.activeMenu
                ? `${s.menuBtn} ${s.menuBtn_active}`
                : `${s.menuBtn}`}
                    onClick={this.toggleMenuClass}>
              <span/>
            </button>
          </div>

          <div
              className={this.state.activeMenu
                  ? `${s.leftMenuSection_active}`
                  : `${s.leftMenuSection_closed}`}
          >
            <List>
              <ListItems><Link to='/beauty' onClick={this.toggleMenuClass}>Conceptual Art</Link></ListItems>
              <ListItems><Link to='/product-photography' onClick={this.toggleMenuClass}>Nature</Link></ListItems>
              <ListItems><Link to='/portraits' onClick={this.toggleMenuClass}>Portrait</Link></ListItems>
              <ListItems><Link to='/models-tests' onClick={this.toggleMenuClass}>Child Photography</Link></ListItems>
            </List>
          </div>

          <div className={this.state.activeMenu
              ? `${s.rightMenuSection_active}`
              : `${s.rightMenuSection_closed}`}
          >
            <Contacts>
              <Link to='/about' onClick={this.toggleMenuClass}><ContactsTitle>About</ContactsTitle></Link>
              <Mail href='mailto:mozhgannamiseghinsera@gmail.com'>mozhgannamiseghinsera@gmail.com</Mail>
              <SocialMedia>
                <a href='https://www.instagram.com/mozhganphotography/'><Icon src={instagram} alt='instagram'/></a>
                <a href='@mozhganmozhi'><Icon src={telegram} alt='telegram'/></a>
              </SocialMedia>
            </Contacts>
          </div>

        </React.Fragment>
    )
  }
}

export default NavSideBar;