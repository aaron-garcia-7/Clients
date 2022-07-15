import styled from 'styled-components';

const BlogCard = ({subTitle, title, text1, text2}) => {
    return  (
        <StyledBlogCard>
            <div className="stripe" />
            <div className="textAreaBlog">
                <h5>{subTitle}</h5>
                <h4>{title}</h4>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className="btnsDiv">
                <a className='mainBtn'>See Post</a>
                <a className='altBtn'>View all</a>
            </div>
            <div className="hoverDiv">
                <p className="hoverText">Click to View</p>
            </div>
        </StyledBlogCard>
    )
}

const StyledBlogCard = styled('div')`
    position: absolute;
    top: 0;
    background: var(--white);
    width: 100%;
    height: 90%;
    min-height: 26rem;
    opacity: 0;
    transform: scale(0.8);
    animation: cardAppear 2s 1.6s ease forwards;
    z-index: 1;
    cursor: pointer;
    > * {
        transition: 0.4s ease;
    }
    .stripe { 
        position: absolute;
        top: 6%;
        left: 0;
        background: #A27C6744;
        width: 100%;
        height: 10%;
    }
    .textAreaBlog {
        /* border: 1px solid black; */
        position: absolute;
        top: 19%;
        left: 4%;
        width: 90%;
        height: 60%;
        & > * {
            margin-bottom: 1rem;
        }
        h5 {
            font-size: calc(0.6rem + 0.6vw);
            font-style: italic;
            font-weight: 200;
            color: #31313180;
        }
        h4 {
            font-size: calc(0.6rem + 1vw);
            font-weight: 600;
        }
        p {
            font-size: calc(0.5rem + 0.5vw);
            font-weight: 300;
        }
    }
    .btnsDiv {
        /* border: 1px solid grey; */
        position: absolute;
        bottom: 4%;
        left: 4%;
        width: 90%;
        padding: 0.6rem 0rem;
        .mainBtn{
            padding: 0.2rem 1.4rem;
            margin-right: 4%;
            font-size: calc(0.7rem + 0.7vw);
            cursor: pointer;
        }
        .altBtn {
            color: var(--brown);
            font-size: calc(0.6rem + 0.6vw);
            border-bottom: 2px solid var(--brown);
            cursor: pointer;
            transition: 0.4s ease;
            &:hover {
                padding-bottom: 1%;
            }
        }
    }
    .hoverDiv {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        width: 100%;
        height: 100%;
        background: #fafafaee;
        backdrop-filter: blur(3px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease;
        .hoverText {
            font-size: calc(1.6rem + 1vw);
            font-weight: 200;
            letter-spacing: 0.2rem;
        }
    }

    &:hover {
        /* background: var(--lightGrey); */
        .hoverDiv {
            opacity: 1;
            pointer-events: all;
        }
    }

    @keyframes cardAppear {
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0px 4px 8px #31313122;
        }
    }
    @media screen and (max-width: 1440px) {
        padding: 1rem;
        height: 88%;
        min-height: 20rem;
        .textAreaBlog {
            & > * {
            margin-bottom: 0.6rem;
        }
        }
        .btnsDiv {
            .mainBtn {
                padding: 0 0.4rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        top: 0;
        padding: 0.6rem;
        width: 86%;
        height: 60%;
        min-height: 16rem;
        .stripe {
            width: 5%;
            height: 100%;
            top: 0;
            left: 82%;
            background: #A27C6755;
        }
        .textAreaBlog {
            top: 18%;
            & > * {
            margin-bottom: 0.3rem;
            }
            h5 {
                font-size: calc(1rem + 1vw);
            }
            h4 {
                font-size: calc(1.6rem + 1vw);
                /* border: 1px solid black; */
                width: 80%;
                min-width: 18rem;
                text-shadow: 4px 4px 0px #00000011;
            }
            p {
                display: none;
            }
        }
        .btnsDiv {
            /* border: 1px solid grey; */
            width: 10rem;
            bottom: 16%;
            .mainBtn {
                padding: 0.3rem 1rem;
                margin-right: 1rem;
            }
            .altBtn {
                display: none;
            }
        }   
    }
    @media screen and (max-width: 480px) {
        width: 86%;
        height: 100%;
        animation: cardAppear 2s 2s ease forwards;
    }
`

export default BlogCard;