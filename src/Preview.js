import React from "react";
import "./scss/preview.scss";
import Command from "./Command";
import { Link } from "react-router-dom";

const Interval = setInterval(() => {
  const focus = document.querySelector(".focus");
  if (!focus) return clearInterval(Interval);
  !focus.classList.contains("fade")
    ? focus.classList.add("fade")
    : focus.classList.remove("fade");
}, 500);

function Preview() {
  return (
    <>
      <header>
        <ul className="menu">
          <li>파일(F)</li>
          <li>편집(E)</li>
          <li>선택 영역(S)</li>
          <li>보기(V)</li>
          <li>이동(G)</li>
          <li>디버그(D)</li>
          <li>터미널(T)</li>
          <li>도움말(H)</li>
        </ul>
        <span className="title">Gune.js - Portfolio - Visual Donggun Code</span>
      </header>
      <section className="body">
        <div className="side">
          <ul>
            <li>
              <img src="./image/document.png" alt="탐색기" />
            </li>
            <li>
              <img src="./image/magnifying-glass.png" alt="검색" />
            </li>
            <li>
              <img src="./image/links.png" alt="소스제어" />
            </li>
            <li>
              <img src="./image/debug.png" alt="디버그" />
            </li>
            <li>
              <img src="./image/plugin.png" alt="extensions" />
            </li>
          </ul>
        </div>
        <div className="contWrap">
          <div className="editList">Donggun.js</div>
          <div className="editmap">src > Donggun.js > ...</div>
          <div className="editField">
            <div className="text">
              <Command />
              <div className={"focus " + Interval}></div>
              <div className="function">
                <div
                  className="arrowFunc"
                  onClick={() => {
                    window.open("http://pf.kakao.com/_sxavnxb/chat");
                  }}
                >
                  <div className="line1">
                    <span className="cyan">const</span>
                    <span className="green"> Donggun</span>
                    <span className="red"> = </span>
                    <span className="orange"> you </span>
                    <span className="cyan"> => </span>
                  </div>
                  <div>
                    <span className="gray"> {"{"} </span>
                  </div>
                  <div className="line2">
                    <span className="cyan">const</span>
                    <span className="gray"> nickname</span>
                    <span className="red"> = </span>
                    <span className="yellow"> "GUNE" </span>
                    <span className="gray">;</span>
                  </div>
                  <div className="line3">
                    <span className="cyan">const</span>
                    <span className="gray"> major</span>
                    <span className="red"> = </span>
                    <span className="yellow"> "Front-End Engineer" </span>
                    <span className="gray">;</span>
                  </div>
                  <div className="line4">
                    <span className="cyan">const</span>
                    <span className="gray"> kakaID</span>
                    <span className="red"> = </span>
                    <span className="yellow"> "VividReality" </span>
                    <span className="gray">;</span>
                  </div>
                  <div className="line5">
                    <span className="cyan">const</span>
                    <span className="gray"> owner</span>
                    <span className="red"> = </span>
                    <span className="orange"> you </span>
                    <span className="gray">;</span>
                  </div>

                  <div className="line6">
                    <span
                      className="red"
                      dangerouslySetInnerHTML={{
                        __html: "// CLICK! if u wanna contact"
                      }}
                    ></span>
                  </div>

                  <div className="line7 gray">{"}"}</div>
                </div>
                {/*  */}
                <div className="EnterFunc">
                  <div className="line8">
                    <span className="cyan">const</span>
                    <span className="gray"> Enter</span>
                    <span className="red"> = </span>
                  </div>
                  <div>
                    <span className="gray"> {"{"} </span>
                  </div>
                  <div className="line9">
                    <span className="gray">domain :</span>
                    <span className="yellow"> "https://blabla.com" </span>
                    <span className="gray">,</span>
                  </div>
                  <div className="line10">
                    <span className="gray">click :</span>
                    <span className="red"> this </span>
                  </div>
                  <div>
                    <span className="gray"> {"}"} </span>
                  </div>
                </div>
              </div>
              <div className="neuContainer">
                <Link to="/index" className="neumorphism">
                  ENTER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Preview;
