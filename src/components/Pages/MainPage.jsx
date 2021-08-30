import React from "react";
import styled from "styled-components";
import {ContentData} from "../ContentData";
// import {HashLink as Link} from "react-router-hash-link";
// import LazyLoad from 'react-lazy-load';
// import s from "./MainPage.module.css";
// import ImagesGrid from '../Viewer/ImagesGrid';
import ImagesFlow from "../Viewer/ImagesFlow";


function MainPage() {

  const {
    beautyForMainPage,
    productForMainPage,
    portraitsForMainPage,
    modelsForMainPage
  } = ContentData;

  const Wrapper = styled.div`
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      max-height: calc(100vh - 100px);
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 576px) {
        max-height: 100%;
        overflow: scroll;
      }
    `;

  const Waterfall = () => {

    const WaterfallColumns = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;

      @media screen and (max-width: 576px) {
        padding: 0;
        margin-top: 70px;
        flex-flow: column;
      }
    `;

    return (
      <WaterfallColumns>
        <ImagesFlow slide="slideUp" duration="100s" content={beautyForMainPage}/>
        <ImagesFlow slide="slideDown" duration="130s" content={productForMainPage}/>
        <ImagesFlow slide="slideUp" duration="150s" content={portraitsForMainPage}/>
        <ImagesFlow slide="slideDown" duration="90s" content={modelsForMainPage}/>
      </WaterfallColumns>
    );
  };

  return (
    <Wrapper>
      <Waterfall/>
    </Wrapper>
  );
}

export default MainPage;
