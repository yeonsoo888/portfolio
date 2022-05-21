import React from "react";
import Layout from "../common/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay , Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay,Pagination ])

function Project() {
    const patch = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="projects">
                <h4 className="mainTit">Projects</h4>
                <ul className="projectList">
                    <li>
                        <strong className="projectList__tit">To do App</strong>
                        <div className="projectList__cnts">
                            <div className="project__slideWrap">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{delay: 3000}}
                                >
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon1.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon2.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon3.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon4.jpg`} alt="" /></SwiperSlide>
                                    
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="//www.hyundaieverdigm.com/main/" target="_blank">https://www.hyundaieverdigm.com/main/</a>
                                    </li>
                                    <li>
                                        <span>device</span>
                                        <p>반응형 웹사이트</p>
                                    </li>
                                    <li>
                                        <span>작업기간</span>
                                        <p>10일</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <b className="project__tit">퍼블리싱</b>
                <ul className="projectList">
                    <li>
                        <strong className="projectList__tit">현대에버다임</strong>
                        <div className="projectList__cnts">
                            <div className="project__slideWrap">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{delay: 3000}}
                                >
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon1.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon2.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon3.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/hyeon4.jpg`} alt="" /></SwiperSlide>
                                    
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="//www.hyundaieverdigm.com/main/" target="_blank">https://www.hyundaieverdigm.com/main/</a>
                                    </li>
                                    <li>
                                        <span>device</span>
                                        <p>반응형 웹사이트</p>
                                    </li>
                                    <li>
                                        <span>작업기간</span>
                                        <p>10일</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong className="projectList__tit">승원건설그룹</strong>
                        <div className="projectList__cnts">
                            <div className="project__slideWrap">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{delay: 3000}}
                                >
                                    <SwiperSlide><img src={`${patch}/images/project/seungwon1.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/seungwon2.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/seungwon3.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/seungwon4.jpg`} alt="" /></SwiperSlide>
                                    
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="//www.seungwongroup.com/" target="_blank">http://www.seungwongroup.com/</a>
                                    </li>
                                    <li>
                                        <span>device</span>
                                        <p>반응형 웹사이트</p>
                                    </li>
                                    <li>
                                        <span>작업기간</span>
                                        <p>5일</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong className="projectList__tit">재현하늘창</strong>
                        <div className="projectList__cnts">
                            <div className="project__slideWrap">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    autoplay={{delay: 3000}}
                                >
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon1.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon2.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon3.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon5.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon6.jpg`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${patch}/images/project/jaehyeon7.jpg`} alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="//jhintex.co.kr/" target="_blank">http://jhintex.co.kr/</a>
                                    </li>
                                    <li>
                                        <span>device</span>
                                        <p>반응형 웹사이트</p>
                                    </li>
                                    <li>
                                        <span>작업기간</span>
                                        <p>1주일</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </Layout>
        </>
    )
}

export default Project;
