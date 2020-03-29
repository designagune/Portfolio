import React from "react";
import "./scss/skill.scss";

export function SkillCont({
  className,
  skillTitle,
  imgsrc,
  val,
  text1,
  text2,
  text3,
  text4
}) {
  return (
    <div className={`skillcont ${className}`}>
      <h3>{skillTitle}</h3>
      <div className="imgwrap">
        <img src={imgsrc} alt={skillTitle} />
      </div>

      <span>{val}</span>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p className="proud">{text4}</p>
    </div>
  );
}

function Skill({ html, js, reactPhp }) {
  return (
    <>
      <h1 className="skilltitle">Skill</h1>
      <div className="skillWrap">
        <SkillCont
          className="html"
          imgsrc="./image/html.png"
          skillTitle="HTML5"
          val={html}
          text1="Layout"
          text2="Storage"
          text4="어디가서 꿇리진 않음"
        />
        <SkillCont
          className="css"
          imgsrc="./image/css.png"
          skillTitle="CSS3"
          val={html}
          text1="Responsive"
          text2="SCSS"
          text3="Animation"
          text4="못한다는소리 못들어봄"
        />
        <SkillCont
          className="js"
          imgsrc="./image/js.png"
          skillTitle="JAVASCRIPT"
          val={js}
          text1="Ajax"
          text2="jQuery"
          text4="요샌 다들 이정도는 함"
        />
        <SkillCont
          className="react"
          imgsrc="./image/react.svg"
          skillTitle="ReactJS"
          val={reactPhp}
          text1="Hook"
          text2="React-spring"
          text4="맨땅에 헤딩중"
        />
        <SkillCont
          className="php"
          imgsrc="./image/php.png"
          skillTitle="PHP"
          val={reactPhp}
          text1="Sign Up"
          text2="Notice board"
          text4="PHP? 기본"
        />
        <SkillCont
          className="mysql"
          imgsrc="./image/mysql.png"
          skillTitle="MYSQL"
          val={reactPhp}
          text1="Data management"
          text4="DB안써본 개발자도있나?"
        />
      </div>
    </>
  );
}

export default Skill;
