import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import "./scss/main.scss";

const items = ["FRONT END", "DEVELOPER", "gune's portfolio", "ASTRA DESIGNA"];
const config = { mass: 50, tension: 2000, friction: 800 };

function HomeMain() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 70,
    height: toggle ? 150 : 0,
    from: { opacity: 0, x: 500, height: 100 }
  });

  return (
    <>
      <div className="backgroundWarp">
        <div className="background"></div>
      </div>
      <div className="trails-main" onLoad={() => set(state => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default React.memo(HomeMain);
