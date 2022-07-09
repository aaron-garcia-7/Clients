import styled from "styled-components";
import AddressLinks from "./AddressLinks";

// Components
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo inFooter={true} />
      <AddressLinks inFooter={true} />
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
      <SocialMediaLinks inFooter={true}/>
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
  #footerAddressLinks {
    top: 20%;
    left: 34%;
    flex-direction: column;
    .address {
      padding-bottom: 0.6rem;
      margin-bottom: 0.6rem;
      border-bottom: 1px solid #313131;
      &:nth-child(2) {
        border: none;
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
      transition: 0.4s ease;
      &:hover {
        opacity: 1;
        color: #000;
      }
    }
  }
  #footerSocialIcons {
    top: 30%;
    right: 10%;
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
    #footerAddressLinks {
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
    #footerAddressLinks {
      display: none;
    }
    .linkDiv {
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
    #footerSocialIcons {
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
