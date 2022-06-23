import styled from "styled-components";

import Logo from "../components/Logo";
import socialPlatforms from "../data/socialMediaData";

const Footer = () => {
  const socialMediaLinks = socialPlatforms.map((obj) => (
    <a href={obj.url} target="_blank" className="socialLink" key={obj.id}>
      <img src={obj.logo} alt={obj.company} className="linkImg" />
    </a>
  ));

  return (
    <StyledFooter>
      <Logo inFooter={true} />
      <div className="addressDiv">
        <a
          href="https://www.google.com/maps/place/2540+Bengal+Blvd,+Cottonwood+Heights,+UT+84121/@40.6108083,-111.836597,14z/data=!3m1!4b1!4m5!3m4!1s0x875262dd1093cd47:0x16fb93566800642e!8m2!3d40.610777!4d-111.8191303"
          target="_blank"
          className="address"
        >
          2540 Bengal Blvd, <br />
          Cottonwood Heights,
          <br /> UT 84121
        </a>
        <a
          href="https://www.google.com/maps/place/Mark+Veldevere+Guitar+Studios/@40.5992498,-112.021824,18.33z/data=!4m5!3m4!1s0x87528e4856922a47:0xdafb69a8f1bdef8a!8m2!3d40.5994447!4d-112.0210543"
          target="_blank"
          className="address"
        >
          5465 Wild Oak Dr,
          <br /> West Jordan, UT 84081
        </a>
      </div>
      <div className="linkDiv">
        <a href="" className="footerLink">
          Site Map
        </a>
        <a href="" className="footerLink">
          Legal Info
        </a>
        <a href="" className="footerLink">
          Cookies
        </a>
      </div>
      <div className="socialLinksDiv">{socialMediaLinks}</div>
      <p className="credits">&#169; 2022 - Made with care by Aaron Garcia</p>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  position: relative;
  background: var(--grey);
  height: 28vh;
  min-height: 10rem;
  #footerLogo {
    width: 20%;
    top: 28%;
    left: 10%;
    img {
      width: calc(6rem + 8vw);
    }
  }
  .addressDiv {
    position: absolute;
    top: 20%;
    left: 34%;
    display: flex;
    flex-direction: column;
    transition: 0.4s ease;
    &:hover {
      .address {
        opacity: 0.3;
      }
    }
    .address {
      color: #313131;
      font-size: calc(0.4rem + 0.4vw);
      font-weight: 500;
      padding-bottom: 0.6rem;
      margin-bottom: 0.6rem;
      cursor: pointer;
      border-bottom: 1px solid #313131;
      text-decoration: none;
      transition: 0.4s ease;
      &:nth-child(2) {
        border: none;
      }
      &:hover {
        opacity: 1;
        color: #000;
      }
    }
  }
  .linkDiv {
    position: absolute;
    top: 16%;
    right: 38%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    transition: 0.4s ease;
    &:hover {
      .footerLink {
        opacity: 0.3;
      }
    }
    .footerLink {
      color: var(--black);
      font-size: calc(0.4rem + 0.6vw);
      font-weight: 500;
      width: 6rem;
      padding-bottom: 0.6rem;
      margin-bottom: 0.6rem;
      cursor: pointer;
      text-decoration: none;
      transition: 0.4s ease;
      &:hover {
        opacity: 1;
        color: #000;
      }
    }
  }
  .socialLinksDiv {
    position: absolute;
    display: flex;
    top: 30%;
    right: 10%;
    .socialLink {
      margin-right: calc(0.2rem + 2vw);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s ease;
      .linkImg {
        width: calc(1.4rem + 2vw);
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .credits {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: calc(0.4rem + 0.4vw);
    font-weight: 200;
  }

  @media screen and (max-width: 1440px) {
    .addressDiv {
      top: 20%;
      left: 34%;
    }
    .linkDiv {
      padding: 0.6rem;
      top: 18%;
      right: 36%;
    }
    .socialLinksDiv {
      top: 30%;
      right: 10%;
    }
  }

  @media screen and (max-width: 768px) {
    height: 18vh;
    #footerLogo {
      left: 8%;
    }
    .addressDiv {
      display: none;
    }
    .linkDiv {
      /* border: 1px dashed #c0c0c0; */
      padding: 0.2rem;
      right: 50%;
      transform: translate(50%, 0);
      .footerLink {
        margin-bottom: 0.2rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    #footerLogo {
      top: 32%;
      left: 4%;
    }
    .linkDiv {
      top: 28%;
      right: 46%;
      .footerLink {
        padding-bottom: 0.2rem;
        margin-bottom: 0.2rem;
      }
    }
    .socialLinksDiv {
      top: 34%;
      right: 4%;
    }
    .credits {
      bottom: 18%;
      width: 80%;
      text-align: center;
    }
  }
`;

export default Footer;
