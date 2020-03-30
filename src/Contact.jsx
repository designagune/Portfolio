import React from "react";
import "./scss/contact.scss";

function Sns({ link, srclnk, name }) {
  return (
    <a className="logo" href={link} target="_blank" rel="noopener noreferrer">
      <img src={srclnk} alt={name} />
    </a>
  );
}
function Contact() {
  // spring 가능하면 써보자.....
  return (
    <>
      <h1 className="contactTitle">
        About & <br /> Contact Me
      </h1>
      <div className="cardWrap">
        <div className="cardTop">
          <Sns
            link="https://www.instagram.com/designa__gune/"
            srclnk="./image/insta.png"
            name="insta"
          />
          <Sns
            link="https://www.facebook.com/designagune"
            srclnk="./image/facebook.png"
            name="facebook"
          />
          <Sns
            link="https://github.com/designagune"
            srclnk="./image/github.png"
            name="github"
          />
        </div>
        <div className="cardBottom">
          <h3>GUNE</h3>
          <a className="email" href="mailto:ehdrjs4046@gmail.com">
            ehdrjs4046@gmail.com
          </a>
          <a
            href="http://pf.kakao.com/_sxavnxb/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="kakao"
          >
            KAKAO ID : VividReality
          </a>
        </div>
        <div className="circle">
          <img src="./image/profile.jpg" alt="profile" />
        </div>
      </div>
    </>
  );
}

export default React.memo(Contact);
