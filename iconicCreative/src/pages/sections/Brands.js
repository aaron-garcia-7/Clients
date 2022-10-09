import React from "react";
import styled from "styled-components";
import brandList from "../../data/brands";

function Brands() {
  return (
    <ScBrands>
      <div className="gallery">
        {brandList.map((obj) => (
          <figure key={obj.id} className="brandBlock">
            <img src={obj.img} alt={obj.name} />
          </figure>
        ))}
      </div>
    </ScBrands>
  );
}

const ScBrands = styled("section")`
  /* border: 4px dashed blue; */
  background: var(--dark);
  /* width: 80vw; */
  height: 80vh;
  min-height: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .gallery {
    /* border: 2px dashed grey; */
    width: 80vw;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    .brandBlock {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1440px) {
    /* height: 60vh; */
    /* min-height: 28rem; */
  }

  @media (max-width: 1224px) {
    height: 68vh;
    min-height: 24rem;
  }

  @media (max-width: 1224px) {
    height: 60vh;
    /* min-height: 20rem; */
  }
`;

export default Brands;
