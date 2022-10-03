import React from 'react'
import styled from 'styled-components';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

function SocialMedia() {
  return (
    <ScSocialMedia>
        <img src={facebook} alt="facebook icon" className='socialMediaIcon'/>
        <img src={instagram} alt="instagram icon" className='socialMediaIcon'/>
    </ScSocialMedia>
  )
}

const ScSocialMedia = styled('div')`
    /* border: 1px solid black; */
    width: 4rem;
    display: flex;
    justify-content: space-between;
    .socialMediaIcon {
        width: 1.2rem;
        height: 1.2rem;
    }
`

export default SocialMedia