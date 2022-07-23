import { useEffect } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  containerMark,
  containerMarkArticle,
  fade,
  fadeUp,
  fadeMarkStyles,
  fadeMarkStylesMobile,
  imgFade,
} from "../../anim/animations";
import SecContact from "../sections/SecContact";
import SecAboutSubHero from "../sections/SecAboutSubHero";
import Logo from "../../components/Logo";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import styled from "styled-components";

import portrait from "../../images/photos/portrait.png";
import guitarLine from "../../images/graphics/guitarLine.svg";

const MarkPage = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  //Ref2
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <StyledMarkPage>
      <Element name="top" />
      <Logo />
      <SecAboutSubHero aboutMark={true} />
      <Element name="subContent" />
      <article className="markContent" ref={ref}>
        <div className="articleHeader">
          <motion.img
            src={portrait}
            className="portrait"
            alt="Mark Veldevere holding a guitar"
            variants={imgFade}
            initial="initial"
            animate={control}
          />
          <motion.div
            className="textDetails"
            variants={containerMark}
            initial="initial"
            animate={control}
          >
            <motion.div className="bigThree" variants={fade}>
              <h3>35+ Years of Guitar Experience</h3>
              <h3>30+ Years of Teaching Experience</h3>
              <h3>1,000+ Successful Students</h3>
            </motion.div>
            <motion.div
              className="styles"
              variants={
                window.innerWidth > 480 ? fadeMarkStyles : fadeMarkStylesMobile
              }
            >
              <h4>Styles Taught:</h4>
              <p>
                Rock, Country, Bluegrass, Jazz, Fingerstyle, Latin, &amp; Punk
              </p>
            </motion.div>
            {inView && <SocialMediaLinks uniqueStyle={true} />}
          </motion.div>
        </div>
        <motion.div
          className="articleContent"
          variants={containerMarkArticle}
          initial="initial"
          animate={control}
        >
          <motion.p variants={window.innerWidth > 480 ? fade : fadeUp}>
            Mark Veldevere is a session guitarist from the Salt Lake City area.
            He has performed and is still performing with several groups in the
            area. He was born in Salt Lake City, Utah, but grew up anywhere and
            everywhere. He spent the majority of his life in Boise, Idaho, where
            he taught himself the guitar at the age of ten. After serving in the
            France Bordeaux Mission for the Church of Jesus Christ of Latter-day
            Saints, he attended Ricks College and then went on to finish his
            studies at Brigham Young University.
          </motion.p>
          <motion.p variants={window.innerWidth > 480 ? fade : fadeUp}>
            It was at BYU that he performed as a guitarist with the BYU Young
            Ambassadors. He toured with the Young Ambassadors throughout the
            southern United States, Morocco, and Tunisia. He recently returned
            from an over seas tour with Clog America, a bluegrass music and
            dance troupe, touring the Netherlands, Belgium, and France.
          </motion.p>
          <motion.p variants={window.innerWidth > 480 ? fade : fadeUp}>
            He just had the privilege of performing at the Pearl Awards in front
            of 3,000 people and also performing with Enoch Train and the Mormon
            Youth Symphony at the historic Tabernacle on Temple Square in front
            of 10,000 people both of which were televised. He also served two
            years as the Department Chair of Guitar Studies for the Crescent
            School of Music.
          </motion.p>
          <motion.p variants={window.innerWidth > 480 ? fade : fadeUp}>
            Mark has performed with Enoch Train, Jesse Thurgood, Randy
            Thorderson, Kim Brakken, Clive Romney, Dave Edwards, Doug Walker,
            and various others. He also regularly performs and teaches master
            classes at various colleges, universities, high schools, and middle
            schools for their guitar departments. He studied for several years
            under session and jazz guitar great Rich Dixon and has been mentored
            by session great Michael Dowdle for close to twenty years.
          </motion.p>
          <motion.p variants={window.innerWidth > 480 ? fade : fadeUp}>
            His influences include Michael Dowdle, Rich Dixon, Steve Lukather,
            Larry Carlton, Chet Atkins, Dan Huff, Eddie VanHalen, Steve Vai, Joe
            Satriani, Lee Ritenour, Tommy Emmanuel, Wes Montgomery, Scott
            Henderson, George Benson, Eric Johnson, George Lynch, Jeff Pevar,
            Paul Yandell, Lawrence Juber, Ed Gerhard, Grant Geissman, Russ
            Freeman, Brent Mason, Greg Howe, Pat Metheny, Brian Hughes, Tony
            Rice, the Hellecasters, Norman Brown, Paul Jackson, Jr., Ricky
            Skaggs, Chuck Loeb, Robben Ford, Stevie Ray Vaughn, Carl Verheyen,
            Paul Gilbert, Yngwie Malmsteen, and many others. His style includes
            rock, country, bluegrass, jazz, fingerstyle, Latin, and funk.
          </motion.p>
          <motion.p
            variants={window.innerWidth > 480 ? fade : fadeUp}
            ref={ref2}
          >
            He is currently writing and recording material for his first
            commercial jazz CD which will be entitled “Turning Point.” He
            strongly endorses Melancon electric guitars.
          </motion.p>
          {inView2 && <img src={guitarLine} alt="" className="guitarLine" />}
        </motion.div>
        {inView && <div className="stripe" />}
      </article>
      <SecContact />
    </StyledMarkPage>
  );
};

const StyledMarkPage = styled("div")`
  .markContent {
    /* border: 2px dashed grey; */
    position: relative;
    width: 72vw;
    margin: auto;
    padding-top: 12vh;
    .articleHeader {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 6vh;
      .portrait {
        border: 0.6rem solid var(--grey);
        position: relative;
        padding: 0.4rem;
        width: 26vw;
        height: 26vw;
        border-radius: 50%;
        object-fit: cover;
        object-position: 0% 20%;
      }
      .textDetails {
        /* border: 1px solid black; */
        width: 40%;
        height: 42vh;
        transform: translate(0, 10%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .bigThree {
          h3 {
            font-size: calc(0.6rem + 1vw);
            font-weight: 300;
            margin-bottom: 5%;
          }
        }
        .styles {
          /* border: 1px solid blue; */
          transform: translate(0, -40%);
          h4 {
            color: var(--black);
            font-size: calc(0.6rem + 0.8vw);
            font-weight: 600;
          }
          p {
            font-size: calc(0.4rem + 0.6vw);
          }
        }
        #socialLinks {
          position: static;
          transform: translate(10%, 0);
          opacity: 0;
          animation: mediaLinksAppear 1.4s 1.6s ease forwards;
          .socialLink {
            .linkImg {
              width: calc(1.4rem + 1.4vw);
            }
          }
        }
      }
    }
    .articleContent {
      position: relative;
      p {
        margin-bottom: 4vh;
        font-size: calc(0.6rem + 0.7vw);
        font-weight: 300;
        line-height: 2rem;
        &:nth-of-type(1) {
          &::first-letter {
            font-size: calc(2rem + 0.7vw);
            font-weight: 400;
            color: var(--black);
            &:hover {
              background: blue;
            }
            &::selection {
              background: #a27c6799;
              color: #fafafa;
            }
          }
        }
      }
      .guitarLine {
        position: absolute;
        right: -4%;
        bottom: -10%;
        opacity: 0;
        transform: rotate(-45deg) scale(0.6);
        animation: guitarLineAppear 2s 0.4s ease forwards;
      }
    }
    .stripe {
      position: absolute;
      top: 0;
      right: 20%;
      width: 5%;
      min-width: 2rem;
      height: 0%;
      background: var(--tan);
      opacity: 0.4;
      z-index: -1;
      animation: lineGrow 2.4s 0.2s ease forwards;
    }
  }

  @keyframes lineGrow {
    to {
      height: 100%;
    }
  }
  @keyframes mediaLinksAppear {
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes guitarLineAppear {
    to {
      opacity: 1;
      transform: rotate(0deg) scale(1.3);
    }
  }

  @media screen and (max-width: 1440px) {
    .markContent {
      .articleHeader {
        margin-bottom: 12vh;
        .textDetails {
          width: 56%;
          height: 23vw;
          transform: translate(14%, 10%);
          .bigThree {
            h3 {
              margin-bottom: 3%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .markContent {
      width: 84vw;
      padding-top: 10vh;
      .articleHeader {
        transform: translate(-2%, 0);
        margin-bottom: 8vh;
        .portrait {
          border: 0.4rem solid var(--grey);
          padding: 0.2rem;
          width: 30vw;
          height: 30vw;
          object-position: 0% 10%;
        }
        .textDetails {
          width: 60%;
          height: 28vw;
          min-height: 12rem;
          transform: translate(6%, 6%) scale(0.96);
          .bigThree {
            h3 {
              margin-bottom: 3%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .markContent {
      padding-top: 6vh;
      .articleHeader {
        margin-bottom: 6vh;
        flex-direction: column;
        .portrait {
          border: 0.2rem solid var(--grey);
          width: 46vw;
          height: 46vw;
        }
        .textDetails {
          width: 100%;
          height: 28vw;
          min-height: 10rem;
          transform: translate(0%, 10%) scale(0.96);
          .bigThree {
            width: 100%;
            h3 {
              margin-bottom: 4%;
              font-weight: 400;
            }
          }
          .styles {
            display: none;
          }
          #socialLinks {
            position: absolute;
            bottom: 14%;
            left: 0;
            transform: translate(0, 0);
            opacity: 0;
            animation: mediaLinksAppear 1.4s 1.6s ease forwards;
            .socialLink {
              .linkImg {
                width: calc(1.4rem + 1.4vw);
              }
            }
          }
        }
      }
      .articleContent {
        p {
          font-weight: 400;
          line-height: 1.6rem;
        }
        .guitarLine {
          right: -2%;
          bottom: -8%;
          opacity: 0;
          transform: rotate(-45deg) scale(0.6);
          animation: guitarLineAppear 2s 0.4s ease forwards;
        }
      }
    }
    @keyframes guitarLineAppear {
      to {
        opacity: 1;
        transform: rotate(0deg) scale(0.9);
      }
    }
  }
`;

export default MarkPage;
