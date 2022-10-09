import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import logoAlt from '../images/graphics/logoAlt.svg';

function Footer() {
  return (
    <ScFooter>
        <ul className='pageLinks'>
            <li>
                <a href="#">Team</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Work</a>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
        </ul>
        <aside>
            <img src={logoAlt} alt="Iconic" />
            <ul className='socialMediaLinks'>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                </li>
            </ul>
        </aside>
    </ScFooter>
  )
}

const ScFooter = styled('footer')`
    background: var(--offDark);
    width: 100vw;
    height: 50vh;
    min-height: 24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;

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
`

export default Footer