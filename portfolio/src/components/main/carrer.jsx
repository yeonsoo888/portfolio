import React from "react";
import Layout from "../common/layout";

export default function Carrer() {
  return (
    <>
      <Layout title="carrer">
        <h4 className="mainTit">History</h4>
        <ul className="carrer__list">
          <li>
            <strong>
              2022.06 ~ <br />
              2023.05
            </strong>
            <div className="carrer__txtWrap">
              <b className="carrer__name">그로테스큐</b>
              <p className="carrer__job">프론트엔드 개발</p>
              <ul className="carrer__stack">
                <li>React</li>
                <li>React-Native</li>
                <li>Next.js</li>
                <li>Ionic</li>
              </ul>
              <p className="carrer__txt">
                Next.js 기반 웹과 React-native 기반 앱 프론트엔드 개발을
                하였습니다.
              </p>
            </div>
          </li>
          <li>
            <strong>
              2021.06 ~ <br />
              2022.06
            </strong>
            <div className="carrer__txtWrap">
              <b className="carrer__name">주식회사 웹컴퍼니 (prix)</b>
              <p className="carrer__job">퍼블리셔</p>
              <ul className="carrer__stack">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>JavaScript</li>
                <li>gnuboard</li>
                <li>ASP</li>
              </ul>
              <p className="carrer__txt">
                웹컴퍼니(프릭스)에서 퍼블리셔로 근무하였습니다. <br />
                그누보드 기반 웹사이트와 ASP 웹사이트 다수에 투입하여 여러
                웹사이트를 제작하였습니다.
              </p>
            </div>
          </li>
          <li>
            <strong>
              2020-12 ~ <br />
              2021-05
            </strong>
            <div className="carrer__txtWrap">
              <b className="carrer__name">주식회사 아반소프트 (avansoft)</b>
              <p className="carrer__job">퍼블리셔</p>
              <ul className="carrer__stack">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>JavaScript</li>
              </ul>
              <p className="carrer__txt">
                웹 에이전시 아반소프트에서 6개월간 근무 하였습니다. <br />
                2개월간의 임금체불로 인하여 어쩔수없이 이직 하였으나, 다양한
                프로젝트 경험을 할 수 있었습니다.
              </p>
            </div>
          </li>
          <li>
            <strong>
              2020-06 ~ <br />
              2020-11
            </strong>
            <div className="carrer__txtWrap">
              <b className="carrer__name">희망연구소배움</b>
              <p className="carrer__job">퍼블리셔</p>
              <ul className="carrer__stack">
                <li>WordPress</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
              <p className="carrer__txt">
                아이들 교육을위한 동영상 게시판 제작을 위해 단기로 근무했습니다.{" "}
                <br />
                워드프레스로 제작하였습니다.
              </p>
            </div>
          </li>
        </ul>
      </Layout>
    </>
  );
}
