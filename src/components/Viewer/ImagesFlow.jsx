import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
import LazyLoad from 'react-lazyload';
import s from "../Pages/MainPage.module.css";


const ImagesFlow = props => {
  const images = props.content;

  const FlowLine = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: flex-start;
    flex-wrap: nowrap;
    max-width: 2000px;
    margin: 0 auto;

    animation-name: ${props.slide};
    animation-duration: ${props.duration};
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;

    @media screen and (max-width: 576px) {
      animation: none;
      padding: 0 10px;
      margin: 0;
    }
    
    @media screen and (min-width: 576px) {
      width: 100%;
    }
  `;

  const flow = images.map((img, id) => {

    const ImageCard = () => {
      const Image = styled.div`
          display: block;
          background-image: url(${images[id].picture});
          background-color: gray;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 100%;
          min-width: 200px;
          min-height: 350px;
          
          margin: 10px 0;
          border-radius: 20px;
          animation-duration: 1s;
          animation-name: showPic;
        `;
      const ImageDescription = styled.div`
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #fff;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
          opacity: 0;
          
          @media screen and (max-width: 992px) {
            display: none;
          }
        `;
      const Text = styled.div`
          ${props.hoverNone ? `display: none;` : null};
        `;
      /*const Separator = styled.div`
          width: 30px;
          height: 1px;
          margin: 10px 0;
          border-bottom: 1px solid black;

          @media screen and (max-width: 992px) {
            display: none;
          }
        `;
      */  

      return (
        <Link className={s.overlay} to={images[id].path} >
          <ImageDescription className={s.overlayDescription}>
            <Text>
              
            </Text>
          </ImageDescription>
          <LazyLoad>
            <Image/>
          </LazyLoad>
        </Link>
      );
    };

    return <ImageCard key={id}/>
  });

  return <FlowLine className={`${s.imagesFlow}`}>{ flow }</FlowLine>;
};

export default ImagesFlow;
