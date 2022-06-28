
import styled from "styled-components";
import socialMediaData from "../data/socialMediaData"

const SocialMediaLinks = ({inFooter, inMobileNav}) => {
    const socialMediaList = socialMediaData.map((obj) => (
        <a href={obj.url} target="_blank" className="socialLink" key={obj.id}>
          <img src={obj.logo} alt={obj.company} className="linkImg" />
        </a>
      ));
      
    return (
        <StyledSocialMediaLinks id={inFooter ? "footerSocialIcons" : inMobileNav ? "mobileNavSocialIcons" : ""}>
            {socialMediaList}
        </StyledSocialMediaLinks>
    )
}

const StyledSocialMediaLinks = styled('ul')`
    position: absolute;
    display: flex;
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
`

export default SocialMediaLinks;