import React from 'react'
import styled from 'styled-components';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

function SocialMedia({inHero, inFooter}) {
  return (
    <ScSocialMedia id={inHero ? "socialMediaHero" : inFooter ? "socialMediaFooter" : null}>
      <a href="https://www.facebook.com/profile.php?id=100057303255853&ref=hl" target="_blank">
        <img src={facebook} alt="facebook icon" className='socialMediaIcon'/>
      </a>
      <a href="https://www.instagram.com/bonniesdanceschool/" target="_blank">
        <img src={instagram} alt="instagram icon" className='socialMediaIcon'/>
      </a>
    </ScSocialMedia>
  )
}

const ScSocialMedia = styled('div')`
    width: 4rem;
    display: flex;
    justify-content: space-between;
    .socialMediaIcon {
        width: 1.2rem;
        height: 1.2rem;
    }
`

export default SocialMedia