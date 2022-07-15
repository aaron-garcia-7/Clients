
import styled from 'styled-components';

const AddressLinks = ({inFooter, inMobileNav}) => {
    return (
        <StyledAddressLinks id={inFooter ? "footerAddressLinks" : inMobileNav ? "mobileNavAddressLinks" : ""}>
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
                <br /> West Jordan, <br style={inFooter ? {display: "none"} : inMobileNav ? {display: "block"} : null}/>UT 84081
            </a>
        </StyledAddressLinks>
    )
}

const StyledAddressLinks = styled('div')`
    position: absolute;
    display: flex;
    &:hover {
      .address {
        opacity: 0.4;
      }
    }
    .address {
      color: #313131;
      font-size: calc(0.4rem + 0.4vw);
      font-weight: 500;
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        opacity: 1;
        color: #000;
      }
    }
`

export default AddressLinks;