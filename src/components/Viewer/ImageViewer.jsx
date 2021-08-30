import React from "react";
import styled from "styled-components";
import {HashLink as Link} from 'react-router-hash-link';
import {Route} from "react-router-dom";


const ImageViewer = (props) => {

  const {closeImagePath} = props,
    imageCollection = props.collection;

  const ImageTemplate = imageCollection.map((item, id) => {

    const Wrapper = styled.div`
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom:0;
      width: 100%;
      height: 100vh;
      max-width: 2000px;
      margin: 0 auto;
      background-color: #fff;
      z-index: 10;
    `;
    const Image = styled.img`
      display: block;
      margin: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      max-width: 85%;
      max-height: 85%;
      animation-duration: 1s;
      animation-name: showPic;
    `;
    const ImageChangerBtn = styled.div`
      display: flex;
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
			background-color: darkgray;
			border: 1px solid #fff;
			border-radius: 50%;
      transition: all .4s ease;
      ${props => {
      if (props.leftSide) {
        return `left:${props.leftSide}px;`;
      } else if (props.rightSide) {
        return `right:${props.rightSide}px;`;
      }
    }};
      @media screen and (min-width: 992px) {
        &:hover {
          width: 25px;
          height: 25px;
          background-color: gray;
          transition: all .4s ease;
          transform: translateY(-2px);
          cursor: pointer;
        };
      };
      @media screen and (max-width: 992px) {
        width: 25px;
        height: 25px;
        ${props => {
      if (props.leftSide) {
        return `left:${props.leftSide - 10}px;`;
      } else if (props.rightSide) {
        return `right:${props.rightSide - 10}px;`;
      }
    }};
      }
      &:hover {
        cursor: pointer;
      }
      `;

    const ImageCloser = () => {
      const Wrapper = styled.div`
        width: 45px;
        height: 45px;
        position: absolute;
        top: 20px;
        right: 20px;
        &:hover span::before,
        &:hover span::after {
          background-color: gray;
          transition: all .4s ease;
        }         
        @media screen and (max-width: 992px) {
          top: 10px;
          right: 10px;
        }
      `;
      const CloseBtn = styled.div`
        display: flex;
        position: relative;
        top: 20px;
        left: 20px;
        width: 30px;
        height: 4px;
        transition: all .4s ease;
        &:hover {
          cursor: pointer;
        }      
      `;
      const Pseudo = styled.span`
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          height: 4px;
          margin-left: -10px;
          width: 30px;
          background-color: darkgray;
          transition: all .4s ease;
        }
        &::before {
          transform: rotate(-45deg);
        }
        &::after {
          transform: rotate(45deg);
        }
      `;

      return (
        <Link to={closeImagePath}>
          <Wrapper>
            <CloseBtn>
              <Pseudo/>
            </CloseBtn>
          </Wrapper>
        </Link>
      )
    };

    const ComponentRender = () => {
      return (
        <React.Fragment>
          <Wrapper>
            <ImageCloser/>
            <Image src={item.picture} alt="Image"/>
            {item.pathId <= 1 ?
              null :
              <Link to={closeImagePath + '/' + (parseInt(item.pathId) - 1)}>
                <ImageChangerBtn leftSide='20'/>
              </Link>
            }
            {item.pathId >= imageCollection.length ?
              null :
              <Link to={closeImagePath + '/' + (parseInt(item.pathId) + 1)}>
                <ImageChangerBtn rightSide='20'/>
              </Link>
            }
          </Wrapper>
        </React.Fragment>
      )
    };

    return (
      <Route path={item.path} key={id} component={ComponentRender}/>
    )
  });

  return (
    <React.Fragment>
      {ImageTemplate}
    </React.Fragment>
  );
};

export default ImageViewer;
