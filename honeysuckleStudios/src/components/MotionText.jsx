import { useState, useRef } from 'react'

// 'Scroll Velocity' from framer motion documentation
// https://www.framer.com/docs/scroll-animations/

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import styled from 'styled-components'

const MotionText = ({width, first, second, third, fourth, children, baseVelocity = 100}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 400], [0, 1], { // The smaller the first set of brakets' y value, the faster the text moves on scroll.
    clamp: false,
  })
  const x = useTransform(baseX, (v) => `${width >= 1220 ? wrap(100, -140, v) : width <= 520 ? wrap(140, -140, v) : wrap(120, -120, v)}%`);
  const directionFactor = useRef(1)
  const prevT = useRef(0);

  const [timing, setTiming] = useState(-10000); // for dynamic directions

  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;
    const timeDelta = t - prevT.current;
    width < 768 && second || fourth ? setTiming(10000) : setTiming(-10000) // changing positive vs negative alters the direction
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / timing);
    
    if (velocityFactor.get() < 0) { //This is what changes the direction of the scroll once we switch scrolling directions.
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
    prevT.current = t;
  });

  return (
    <ScMotionText id={first ? 'motionText1' : second ? 'motionText2' : third ? 'motionText3' : 'motionText4'}>
      <motion.div className="scroller" style={{ x }}>
        <span className='scrollText'>{children}</span>
      </motion.div>
    </ScMotionText>  
  )
}

const ScMotionText = styled('div')`
    position: absolute;
    overflow: hidden;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
    .scrollText {
      font-family: "Cormorant Garamond", serif;
      text-transform: uppercase;
      font-size: calc(3.2rem + 3.2vw);
      line-height: 0;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }
`

export default MotionText;