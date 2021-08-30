import React, {Component} from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

class Page404 extends Component {

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 100px;
      width: 100%;
      height: calc(100vh - 150px);
    `;
    const Text = styled.h1`
      color: #888;
      margin: 0 auto;
      text-align: center;
      animation-duration: 1s;
      animation-name: showPic;
    `;
    const BackToHomeLink = styled.h2`
      color: #444;
      margin: 0 auto;
      text-align: center;
      animation-duration: 1s;
      animation-name: showPic;
      transition: all 0.3s ease;    
      &:hover {
        color: #5f23bc;
        transition: all 0.3s ease;
      }
    `;

    return (
      <Wrapper>
        <Text>This page does not exist</Text>
        <br/>
        <Link to="/">
          <BackToHomeLink>Back to the Main Page</BackToHomeLink>
        </Link>
      </Wrapper>
    );
  }
}

export default Page404;
