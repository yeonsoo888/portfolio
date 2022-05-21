import React from "react";
import Layout from "../common/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay , Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

import hyeon1 from '../../images/project/hyeon1.JPG'
import hyeon2 from '../../images/project/hyeon2.JPG'
import hyeon3 from '../../images/project/hyeon3.JPG'
import hyeon4 from '../../images/project/hyeon4.JPG'
import seungwon1 from '../../images/project/seungwon1.JPG'
import seungwon2 from '../../images/project/seungwon2.JPG'
import seungwon3 from '../../images/project/seungwon3.JPG'
import seungwon4 from '../../images/project/seungwon4.JPG'
import jaehyeon1 from '../../images/project/jaehyeon1.JPG'
import jaehyeon2 from '../../images/project/jaehyeon2.JPG'
import jaehyeon3 from '../../images/project/jaehyeon3.JPG'
import jaehyeon5 from '../../images/project/jaehyeon5.JPG'
import jaehyeon6 from '../../images/project/jaehyeon6.JPG'
import jaehyeon7 from '../../images/project/jaehyeon7.JPG'

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
                                    <SwiperSlide><img src={hyeon1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon4} alt="" /></SwiperSlide>
                                    
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
                                    <SwiperSlide><img src={hyeon1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={hyeon4} alt="" /></SwiperSlide>
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
                                    <SwiperSlide><img src={seungwon1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={seungwon2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={seungwon3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={seungwon4} alt="" /></SwiperSlide>
                                    
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
                                    <SwiperSlide><img src={jaehyeon1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={jaehyeon2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={jaehyeon3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={jaehyeon5} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={jaehyeon6} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={jaehyeon7} alt="" /></SwiperSlide>
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
