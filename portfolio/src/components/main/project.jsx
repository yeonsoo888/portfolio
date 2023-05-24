import React, { useEffect, useState, useRef } from "react";
import Layout from "../common/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "../../data/project";

SwiperCore.use([Autoplay, Pagination]);

function Project({ setScrollTarget }) {
  const path = process.env.PUBLIC_URL;

  const [projectList, setProjectList] = useState([]);

  const mainSec = document.querySelectorAll(".mainSec");
  useEffect(() => {
    setProjectList(data);
    setTarget();
    window.addEventListener("resize", setTarget);
  }, [projectList]);

  const setTarget = () => {
    const arrTarget = [];
    let headerheight = document.querySelector(".header").offsetHeight;

    for (let item of mainSec) {
      arrTarget.push(item.offsetTop - headerheight);
    }
    setScrollTarget(arrTarget);
  };

  return (
    <>
      <Layout title="projects">
        <h4 className="mainTit">Projects</h4>
        <strong className="Project__sTitle">Front-End</strong>
        <ul className="projectList">
          <li>
            <strong className="projectList__tit">착공앱</strong>
            <div className="projectList__cnts">
              <div className="project__slideWrap">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  speed={1000}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong1.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong2.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong3.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong7.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong9.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong11.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong14.png`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/chakgong16.png`} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="project__txtWrap">
                <ul className="project__info">
                  <li>
                    <p>1. React-Native 기반</p>
                  </li>
                  <li>
                    <p>
                      2. 네이버 지도 API 연동 및 커스텀 마커 추가, 위치 검색
                      기능 구현
                    </p>
                  </li>
                  <li>
                    <p>3. 소셜로그인 기능 구현</p>
                  </li>
                  <li>
                    <p>4. 카메라를 이용한 qr스캔 기능 구현</p>
                  </li>
                  <li>
                    <p>5. Jotai를 이용한 전역 상태관리</p>
                  </li>
                  <li>
                    <p>6. 기여도 60%</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <strong className="projectList__tit">88TV 리뉴얼</strong>
            <div className="projectList__cnts">
              <div className="project__slideWrap">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  speed={1000}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_1.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_2.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_3.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_4.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_5.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/88tv_6.PNG`} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="project__txtWrap">
                <ul className="project__info">
                  <li>
                    <p>1. 웹 - Next.js / 앱 - React-Ionic 기반</p>
                  </li>
                  <li>
                    <p>2. 반응형 UI 구현</p>
                  </li>
                  <li>
                    <p>3. 실시간 스트리밍 사이트</p>
                  </li>
                  <li>
                    <p>4. 소셜로그인 기능 구현</p>
                  </li>
                  <li>
                    <p>5. Jotai를 이용한 전역 상태관리</p>
                  </li>
                  <li>
                    <p>6. 기여도 60%</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <strong className="projectList__tit">팝콘TV 리뉴얼</strong>
            <div className="projectList__cnts">
              <div className="project__slideWrap">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  speed={1000}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_1.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_2.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_3.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_4.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_5.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_6.PNG`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${path}/images/project/pop_7.PNG`} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="project__txtWrap">
                <ul className="project__info">
                  <li>
                    <p>1. Next.js 기반</p>
                  </li>
                  <li>
                    <p>2. 반응형 UI 구현</p>
                  </li>
                  <li>
                    <p>3. 실시간 스트리밍 사이트</p>
                  </li>
                  <li>
                    <p>4. 소셜로그인 기능 구현</p>
                  </li>
                  <li>
                    <p>5. Jotai를 이용한 전역 상태관리</p>
                  </li>
                  <li>
                    <p>6. 기여도 40%</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div style={{ height: "100px" }} />
        <strong className="Project__sTitle">Publishing</strong>
        <ul className="project1__list">
          {projectList.map((item, i) => {
            return (
              <li className="project1__item" key={i}>
                <div
                  className="project1__img"
                  style={{
                    background: `url(${path}/images/project/p${item.imgNum}.jpg)no-repeat`,
                  }}
                ></div>
                <div className="project1__txtWrap">
                  <div>
                    <strong className="project1__tit">{item.title}</strong>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project1__link"
                    >
                      View
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

export default Project;
