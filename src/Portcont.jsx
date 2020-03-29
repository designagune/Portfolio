import React from "react";
import "./scss/portfolio.scss";

function Portcont() {
  const portData = [
    {
      id: 1,
      title: "VIVID",
      image: "./image/portcont1.jpg",
      text:
        "웹 쇼핑몰 광고페이지로 의류 쇼핑몰들을 모아 놓고 유저가 객관적으로 후기를 남겨 공유하는 페이지를 구현...",
      codelink: "https://github.com/designagune/vivid",
      pagelink: "http://astragun.com"
    },
    {
      id: 2,
      title: "배달의민족",
      image: "./image/portcont2.jpg",
      text:
        "배달의민족 페이지를 리뉴얼하여 앱에서 할수있었던 배달서비스를 웹에서도 이용할 수 있도록 레이아웃 구성...",
      codelink: "#",
      pagelink: "http://set555.dothome.co.kr/baemin"
    },
    {
      id: 3,
      title: "국문관광정보서비스",
      image: "./image/portcont3.jpg",
      text:
        "공공데이터 포탈의 데이터로 전국의 관광정보를 다양하게 알아볼 수있는 페이지...",
      codelink: "#",
      pagelink: "http://flexcode.dothome.co.kr/donggun/"
    }
  ];

  const List = portData.map(v => (
    <div key={v.id}>
      <div className="portWrap">
        <div className="portImage">
          <a href={v.pagelink} target="_blank" rel="noopener noreferrer">
            <img src={v.image} alt={v.title} />
          </a>
        </div>
        <div className="portTxt">
          <h3>{v.title}</h3>
          <p>{v.text}</p>
          <a href={v.codelink} target="_blank" rel="noopener noreferrer">
            <img src="./image/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h1 className="portTitle">Portfolio</h1>
      <div className="portcontWrap">{List}</div>
    </>
  );
}

export default Portcont;
