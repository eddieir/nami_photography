import React from "react";
import styled from "styled-components";
import ImagesGrid from "./ImagesGrid";
import ImageViewer from "./ImageViewer";


const Viewer = ({pathForClose, component, content}) => {

  const Wrapper = styled.div`
    margin: 100px auto 20px;
    
    @media screen and (max-width: 576px) {
      margin: 70px auto 10px;
    }
  `;

  return (
    <Wrapper>

      <ImageViewer
        collection={component}
        closeImagePath={pathForClose}
      />

      <ImagesGrid content={content}/>

    </Wrapper>
  );
};

export default Viewer;
