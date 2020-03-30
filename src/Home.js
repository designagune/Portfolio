import React, { useCallback } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import HomeMain from "./HomeMain";
import Skill from "./Skill";
import { useCountUp } from "react-countup";
import Portcont from "./Portcont";
import "./scss/common.scss";
import Contact from "./Contact";

const anchors = ["MAIN", "SKILL", "PORTFOLIO", "CONTACT"];

function Home(props) {
  const { countUp: html, reset: htmlReset, start: htmlStart } = useCountUp({
    start: 0,
    end: 92,
    duration: 5,
    suffix: "%"
  });

  const { countUp: js, reset: jsReset, start: jsStart } = useCountUp({
    start: 0,
    end: 85,
    duration: 5,
    suffix: "%"
  });

  const {
    countUp: reactPhp,
    reset: reactReset,
    start: reactStart
  } = useCountUp({
    start: 0,
    end: 30,
    duration: 5,
    suffix: "%"
  });

  const onLeaveFunc = useCallback(() => {
    console.log("onLeavefunc");
    htmlReset();
    jsReset();
    reactReset();
  }, [
    //props.location.hash.match(/[^\#]+/g)[0] === "SKILL",
    htmlReset,
    jsReset,
    reactReset
  ]);

  const onafterFunc = () => {
    console.log("onafterfunc");
    htmlStart();
    jsStart();
    reactStart();
  };

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      // navigationTooltips={anchors}
      sectionsColor={["#FFF", "#FFF", "#FFF", "#FFF"]}
      onLeave={onLeaveFunc}
      afterLoad={onafterFunc}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <div id="fullpage-wrapper">
              <div className="section main">
                <HomeMain />
              </div>
              <div className="section skill">
                <Skill html={html} js={js} reactPhp={reactPhp} />
              </div>
              <div className="section portfolio">
                <Portcont />
              </div>
              <div className="section contact">
                <Contact />
              </div>
            </div>
          </>
        );
      }}
    ></ReactFullpage>
  );
}

export default Home;
