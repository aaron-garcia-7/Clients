import { useEffect } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { container, fade, containerDelay2 } from "../../anim/animations";
import styled from "styled-components";

import SecContact from "../sections/SecContact";
import SecAboutSubHero from "../sections/SecAboutSubHero";

import locationsData from "../../data/locationsData";

import Logo from "../../components/Logo";
import GiantPick from "../../components/GiantPick";
import Map from "../../components/Map";

import phoneImg from "../../images/graphics/phone.svg";
import locationImg from "../../images/graphics/location.svg";

const LocationsPage = () => {
  const control = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
  }, [control, inView]);

  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <StyledLocationsPage>
      <Element name="top" />
      <Logo />
      <SecAboutSubHero aboutLocations={true} />
      <GiantPick fixed={true} />
      <Element name="subContent" />
      <section className="locationsContent" ref={ref}>
        <div className="locationBlock">
          <motion.div
            variants={container}
            initial="initial"
            animate={control}
            className="details"
            ref={ref2}
          >
            <motion.h3 variants={fade}>Cottonwood Heights</motion.h3>
            <motion.h5 variants={fade}>Main Studio</motion.h5>
            <motion.div variants={fade} className="address">
              <img src={locationImg} alt="" />
              {/* <p>{locationsData[0].address}</p> */}
              <p>
                2540 Bengal Blvd. <br /> Cottonwood Heights, <br /> UT 84121
              </p>
            </motion.div>
            <motion.div variants={fade} className="phone">
              <img src={phoneImg} alt="" />
              <a href="sms:801-947-9072">{locationsData[0].phone}</a>
            </motion.div>
          </motion.div>
          {inView && (
            <Map url={locationsData[0].url} unique={true} map2={false} />
          )}
        </div>
        <div className="locationBlock">
          <motion.div
            variants={containerDelay2}
            initial="initial"
            animate={control}
            className="details"
          >
            <motion.h3 variants={fade}>West Jordan</motion.h3>
            <motion.h5 variants={fade}>Home Studio</motion.h5>
            <motion.div variants={fade} className="address">
              <img src={locationImg} alt="" />
              {/* <p>{locationsData[1].address}</p> */}
              <p>
                5465 Wild Oak Dr. <br /> West Jordan, <br />
                UT 84081
              </p>
            </motion.div>
            <motion.div variants={fade} className="phone">
              <img src={phoneImg} alt="" />
              <a href="sms:801-947-9072">{locationsData[1].phone}</a>
            </motion.div>
          </motion.div>
          {inView2 && (
            <Map url={locationsData[1].url} unique={true} map2={true} />
          )}
        </div>
      </section>

      <SecContact />
    </StyledLocationsPage>
  );
};

const StyledLocationsPage = styled("div")`
  .locationsContent {
    width: 72vw;
    height: auto;
    margin: auto;
    padding-top: 12vh;
    .locationBlock {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;
      .details {
        width: 54%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          font-size: calc(0.8rem + 1.6vw);
          margin-left: 5%;
          font-weight: 200;
        }
        h5 {
          font-size: calc(0.8rem + 0.4vw);
          font-weight: 400;
          font-style: italic;
          margin-bottom: 3.2rem;
          margin-left: 6%;
        }
        .address,
        .phone {
          display: flex;
          align-items: start;
          margin-bottom: 1rem;
          width: 86%;

          img {
            width: calc(0.6rem + 0.8vw);
            margin-right: 1rem;
            margin-top: 0.4rem;
          }
          a,
          p {
            font-size: calc(0.8rem + 0.8vw);
            font-weight: 200;
            color: var(--black);
          }
        }
      }
      #mapDiv {
        width: 36rem;
        height: 46vh;
        .locationName {
          display: none;
        }
      }
    }
  }

  @keyframes mapReveal {
    to {
      width: 0%;
    }
  }

  @media screen and (max-width: 1440px) {
    .locationsContent {
      /* width: 80vw; */
      .locationBlock {
        .details {
          /* border: 2px solid grey; */
          h3 {
            margin-left: 2%;
          }
          h5 {
            margin-bottom: 2rem;
            margin-left: 3%;
          }
          .address,
          .phone {
            margin-bottom: 1.8rem;
          }
        }
        #mapDiv {
          width: 30rem;
          height: 46vh;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .locationsContent {
      width: 84vw;
    }
  }

  @media screen and (max-width: 768px) {
    .locationsContent {
      .locationBlock {
        flex-direction: column;
        .details {
          width: 80%;
          h3 {
            font-size: calc(1rem + 1.6vw);
            margin-left: 0%;
          }
          h5 {
            font-size: calc(1rem + 0.4vw);
            margin-left: 0%;
          }
        }
        #mapDiv {
          width: 100%;
          height: 54vh;
          iframe {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .locationsContent {
      .locationBlock {
        #mapDiv {
          height: 46vh;
        }
      }
    }
  }
`;

export default LocationsPage;
