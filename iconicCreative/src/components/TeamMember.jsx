import React from 'react'
import styled from 'styled-components'

function TeamMember({id, name, img, title, title2, inView}) {

    const cardStyle = {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0, 0)' : 'translate(0, 20%)',
        transition: id === 1 ? '0.6s ease 0.2s, opacity 1.6s ease 0.2s' : id === 2 ? '0.6s ease 0.3s, opacity 1.6s ease 0.2s' : id === 3 ? '0.6s ease 0.4s, opacity 1.6s ease 0.2s' : '0.6s ease 0.5s, opacity 1.6s ease 0.2s',
    }

  return (
    <ScTeamMember style={cardStyle}>
        <figure>
            <img src={img} alt={name} />
        </figure>
        <div className="textArea">
            <h3>{name}</h3>
            <p className="title1">{title}</p>
            <p className="title2">{title2}</p>
        </div>
    </ScTeamMember>
  )
}

const ScTeamMember = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    figure {
        background: #E8E8E8;
        padding: 2.6vw;
        border-radius: 50%;
        width: 24vw;
        height: 24vw;
        img {
            width: 100%;
        }
    }
    .textArea {
        padding-top: 2vw;
        text-align: center;
        width: 140%;
        > * {
            margin-bottom: 0.8vw;
        }
        h3 {
            font-size: calc(0.6rem + 2vw);
            font-weight: 400;
        }
        p {
            color: #87888A;
            font-size: calc(0.4rem + 1vw);
        }
    }

    @media (max-width: 520px) {
        width: 60vw;
        figure {
            width: 48vw;
            height: 48vw;
        }
        .textArea {
            > * {
                margin-bottom: 1.6vw;
            }
            h3 {
                font-size: calc(1.2rem + 2vw);
            }
            p {
                font-size: calc(0.8rem + 1vw);
            }
        }
    }
`

export default TeamMember