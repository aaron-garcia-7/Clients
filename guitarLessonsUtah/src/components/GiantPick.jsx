import styled from 'styled-components';

import giantPick from "../images/graphics/giantPick.svg";

const GiantPick = (props) => {
    return <StyledGiantPick src={giantPick} alt="" style={props.fixed ? {position: "fixed"} : {position: "absolute"}}/>
}

const StyledGiantPick = styled('img')`
    user-select: none;
    top: 50%;
    right: 50%;
    transform: translate(50%, -40%) scale(0.6);
    width: calc(20rem + 12vw);
    opacity: 0;
    animation: grow 1.2s 0.2s ease forwards;

    @keyframes grow {
        to {
            transform: translate(50%, -40%) scale(1);
            opacity: 0.04;
        }
    }

    @media screen and (max-width: 480px){
        top: 46%;
    }

`

export default GiantPick;