import React from 'react'
import styled from 'styled-components';

const PageNum = ({number, alt}) => {
    const altStyleText = {
        color: 'var(--hero)',
    }
    const altStyleDiv = {
        borderColor: 'var(--hero)',
    }

  return (
      <ScPageNum>
        <p className="pageNum" style={alt ? altStyleText : null}>{number}</p>
        <div className="smallDivider" style={alt ? altStyleDiv : null} />
        <p className="pageNum" style={alt ? altStyleText : null}>3</p>
      </ScPageNum>
    )
}

const ScPageNum = styled('div')`
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translate(0, -80%);
    width: 2rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: fadeIn 0.8s ease 3.6s forwards;
    .pageNum {
      color: var(--light);
      font-size: calc(0.6rem + 0.6vw);
    }
    .smallDivider {
      border-bottom: 2px solid var(--light);
      width: 60%;
    }

    @media (max-width: 1220px) {
        .smallDivider {
            border-bottom: 1px solid var(--light);
        }
    }
    
    @media (max-width: 768px) {
        top: auto;
        bottom: -4%;
        left: 6%;
        .smallDivider {
            width: 40%;
        }
    }
    @media (max-width: 520px) {
        bottom: 0%;
    }
`

export default PageNum;