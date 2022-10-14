import React from "react";
import styled from "styled-components";
import brandData from "../../data/brandsData";

function Brands() {
  return (
    <ScBrands>
      <div className="gallery">
        {brandData.map((obj) => (
          <figure key={obj.id} className="brandBlock">
            <img src={obj.img} alt={obj.name} />
          </figure>
        ))}
      </div>
    </ScBrands>
  );
}

const ScBrands = styled("section")`
  background: var(--dark);
  height: 86vh;
  min-height: 32rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: -1;
  .gallery {
    width: 80vw;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    .brandBlock {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1440px) {
    padding-top: 2vw;
  }

  @media (max-width: 1024px) {
    height: 72vh;
    min-height: 28rem;
  }

  @media (max-width: 768px) {
    height: 64vh;
    min-height: 24rem;
    padding-top: 0;
    align-items: center;
  }

  @media (max-width: 520px) {
    height: 42vh;
    min-height: 24rem;
    padding-bottom: 2rem;
  }
`;

export default Brands;
