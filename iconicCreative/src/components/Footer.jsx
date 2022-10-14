import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import logoAlt from '../images/graphics/logoAlt.svg';

function Footer() {
  return (
    <ScFooter>
        <ul className='pageLinks'>
            <li>
                <NavLink to="/Team">Team</NavLink>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/OurWork">Work</NavLink>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
        </ul>
        <aside>
            <NavLink to="/">
                <img src={logoAlt} alt="Iconic" />
            </NavLink>
            <ul className='socialMediaLinks'>
                <li>
                    <a href="https://www.instagram.com/iconiccreative.co/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@iconiccreative.co?_t=8VL7Z5ZWzl8&_r=1" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/iconiccreative.co" target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/iconic-creative/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                </li>
            </ul>
        </aside>
    </ScFooter>
  )
}

const ScFooter = styled('footer')`
    background: var(--dark);
    width: 100vw;
    height: 50vh;
    min-height: 24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;

    .pageLinks {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        gap: 2rem 4vw;
        li {
            a {
                color: var(--light);
                font-size: calc(0.6rem + 0.8vw);
            }
        }
    }

    aside {
        img {
            width: calc(4rem + 8vw);
            margin-bottom: 2rem;
        }
        .socialMediaLinks {
            display: flex;
            justify-content: space-between;
            li {
                a {
                    color: var(--light);
                    font-size: calc(0.6rem + 0.6vw);
                }
            }
        }
    }

    @media (max-width: 520px) {
        height: 32vh;
        min-height: 18rem;

        .pageLinks {
            gap: 1rem 0;
        }
    }
`

export default Footer