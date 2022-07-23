import styled from 'styled-components';

const Map = ({url, name, unique, map2}) => {
    return (
        <StyledMap id={unique ? "mapDiv" : ""}>
            <iframe className={map2 ? 'map2' : ''} src={url} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" value="sameOrigin"></iframe>
            <h4 className='locationName'>{name}</h4>
        </StyledMap>
    )
}

const StyledMap = styled('div')`
    /* border: 1px solid blue; */
    width: 48%;
    height: 96%;
    display: flex;
    flex-direction: column;
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        opacity: 0;
        animation: fadeInMaps 1s 2s ease forwards;
    }
    .map2 {
        animation: fadeInMaps 1s 3.2s ease forwards;
    }
    .locationName {
        font-size: calc(1rem + 0.6vw);
        text-align: center;
        transform: translate(20%, 60%);
        opacity: 0;
        animation: slideFade 1s 2.4s ease forwards;
    }
    @keyframes fadeInMaps {
        to {
            opacity: 1;
        }
    }
    @keyframes slideFade {
        to {
            opacity: 1;
            transform: translate(0, 60%);
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        iframe {
            width: 56%;
            height: 92%;
        }
        .locationName {
            padding: 1rem;
            width: 50%;
            transform: translate(100%, 0);
        }
        @keyframes slideFade {
        to {
            opacity: 1;
            transform: translate(0, 0);
        }
    }
    }

`

export default Map;