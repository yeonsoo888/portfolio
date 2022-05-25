import React, { useEffect, useState } from "react";
import Layout from "../common/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay , Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

import hyeon1 from '../../images/project/hyeon1.JPG';
import hyeon2 from '../../images/project/hyeon2.JPG';
import hyeon3 from '../../images/project/hyeon3.JPG';
import hyeon4 from '../../images/project/hyeon4.JPG';
import seungwon1 from '../../images/project/seungwon1.JPG';
import seungwon2 from '../../images/project/seungwon2.JPG';
import seungwon3 from '../../images/project/seungwon3.JPG';
import seungwon4 from '../../images/project/seungwon4.JPG';
import jaehyeon1 from '../../images/project/jaehyeon1.JPG';
import jaehyeon2 from '../../images/project/jaehyeon2.JPG';
import jaehyeon3 from '../../images/project/jaehyeon3.JPG';
import jaehyeon5 from '../../images/project/jaehyeon5.JPG';
import jaehyeon6 from '../../images/project/jaehyeon6.JPG';
import jaehyeon7 from '../../images/project/jaehyeon7.JPG';
import todo1 from '../../images/project/todo1.JPG';
import todo2 from '../../images/project/todo2.JPG';
import todo3 from '../../images/project/todo3.JPG';
import youtube1 from '../../images/project/youtube1.JPG';
import youtube2 from '../../images/project/youtube2.JPG';

SwiperCore.use([Autoplay,Pagination ])

function Project({setScrollTarget}) {
    const path = process.env.PUBLIC_URL;
    const [viewAmt,setViewAmt] = useState(0);

    let newNum;
    const handleViewMore = () => {
        newNum = viewAmt + 1;
        setViewAmt(newNum);
    }
    const handleFlod = () => {
        setViewAmt(0);
    }

    useEffect(() => {
        targetPush();
    },[viewAmt])

    const mainSec = document.querySelectorAll(".mainSec");
    function targetPush() {
        const arrTarget = [];
        let headerheight = document.querySelector(".header").offsetHeight;
        
        for( let item of mainSec) {
            arrTarget.push(item.offsetTop - headerheight);
        }
        setScrollTarget(arrTarget);
    }

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
                                    <SwiperSlide><img src={todo1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={todo2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={todo3} alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="https://todoapp-351107.du.r.appspot.com/" target="_blank">https:https://todoapp-351107.du.r.appspot.com/</a>
                                    </li>
                                    <li>
                                        <span>GitHub</span>
                                        <a href="https://github.com/yeonsoo888/to-do-app" target="_blank">https://github.com/yeonsoo888/to-do-app</a>
                                    </li>
                                    <li>
                                        <span>기능</span>
                                        <p>
                                            1. JWT를 이용한 로그인 구현 (cookie) <br/>
                                            2. mongoDB atlas 호스팅 <br/>
                                            3. node.js + express 서버 구현 <br/>
                                            4. typescript 적용 <br/>
                                            5. CRUD 구현
                                        </p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong className="projectList__tit">yeontube</strong>
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
                                    <SwiperSlide><img src={youtube1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={youtube2} alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="https://yeonsoo888.github.io/yeontube/" target="_blank">https://yeonsoo888.github.io/yeontube/</a>
                                    </li>
                                    <li>
                                        <span>GitHub</span>
                                        <a href="https://github.com/yeonsoo888/yeontube" target="_blank">https://github.com/yeonsoo888/yeontube</a>
                                    </li>
                                    <li>
                                        <span>기능</span>
                                        <p>
                                            youtube API를 이용한 youtube clone coding <br />
                                            1. 인기동영상 <br />
                                            2. 검색기능 <br />
                                            3. 동영상 View
                                        </p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong className="projectList__tit">BuddyBuddy_v2</strong>
                        <div className="projectList__cnts">
                            <div className="project__slideWrap">
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="https://github.com/yeonsoo888/buddybuddy_v2" target="_blank">https://github.com/yeonsoo888/buddybuddy_v2</a>
                                    </li>
                                    <li>
                                        <span>GitHub</span>
                                        <a href="https://github.com/yeonsoo888/buddybuddy_v2" target="_blank">https://github.com/yeonsoo888/buddybuddy_v2</a>
                                    </li>
                                    <li>
                                        <span>기능</span>
                                        <p>
                                            -제작중-
                                            <br />
                                            1. socket.io를 이용한 실시간 채팅
                                            2. 채팅 방 생성
                                            3. 로그인
                                        </p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <b className="project__tit">퍼블리싱</b>
                <ul className="projectList">
                    <li className="half">
                        <div>
                            <strong className="projectList__tit">재현하늘창</strong>
                            <div className="projectList__cnts">
                                <div className="project__txtWrap">
                                    <ul className="project__info">
                                        <li>
                                            <span>URL</span>
                                            <a href="http://jhintex.co.kr/" target="_blank">http://jhintex.co.kr/</a>
                                        </li>
                                        <li>
                                            <span>device</span>
                                            <p>반응형 웹사이트</p>
                                        </li>
                                        <li>
                                            <span>작업기간</span>
                                            <p>7일</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong className="projectList__tit">승원건설그룹</strong>
                            <div className="projectList__cnts">
                                <div className="project__txtWrap">
                                    <ul className="project__info">
                                        <li>
                                            <span>URL</span>
                                            <a href="http://www.seungwongroup.com/" target="_blank">http://www.seungwongroup.com/</a>
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
                        </div>
                    </li>
                    <li>
                        
                    </li>
                    {
                        viewAmt >= 1 && (
                            <>
                            <li className="half">
                                <div>
                                    <strong className="projectList__tit">대한병원코디네이터협회</strong>
                                    <div className="projectList__cnts">
                                        <div className="project__txtWrap">
                                            <ul className="project__info">
                                                <li>
                                                    <span>URL</span>
                                                    <a href="http://khca.iceserver.co.kr/main/" target="_blank">http://khca.iceserver.co.kr/main/</a>
                                                </li>
                                                <li>
                                                    <span>device</span>
                                                    <p>반응형 웹사이트</p>
                                                </li>
                                                <li>
                                                    <span>작업기간</span>
                                                    <p>7일</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <strong className="projectList__tit">유니센터</strong>
                                    <div className="projectList__cnts">
                                        <div className="project__txtWrap">
                                            <ul className="project__info">
                                                <li>
                                                    <span>URL</span>
                                                    <a href="https://uniedu.com.au/" target="_blank">https://uniedu.com.au/</a>
                                                </li>
                                                <li>
                                                    <span>device</span>
                                                    <p>반응형 웹사이트</p>
                                                </li>
                                                <li>
                                                    <span>작업기간</span>
                                                    <p>6일</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="half">
                                <div>
                                    <strong className="projectList__tit">삼우에레코</strong>
                                    <div className="projectList__cnts">
                                        <div className="project__txtWrap">
                                            <ul className="project__info">
                                                <li>
                                                    <span>URL</span>
                                                    <a href="http://www.samwooeleco.com/" target="_blank">http://www.samwooeleco.com/</a>
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
                                </div>
                                <div>
                                    <strong className="projectList__tit">티제이씨라이프</strong>
                                    <div className="projectList__cnts">
                                        <div className="project__txtWrap">
                                            <ul className="project__info">
                                                <li>
                                                    <span>URL</span>
                                                    <a href="http://rxtem.inpiad.co.kr/" target="_blank">http://rxtem.inpiad.co.kr/</a>
                                                </li>
                                                <li>
                                                    <span>device</span>
                                                    <p>반응형 웹사이트</p>
                                                </li>
                                                <li>
                                                    <span>작업기간</span>
                                                    <p>2일</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </>
                        )
                    }
                    {
                        viewAmt >= 2 && (
                            <>
                                <li className="half">
                                    <div>
                                        <strong className="projectList__tit">유원디스플레이</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="http://uonedp.com/" target="_blank">http://uonedp.com/</a>
                                                    </li>
                                                    <li>
                                                        <span>device</span>
                                                        <p>반응형 웹사이트</p>
                                                    </li>
                                                    <li>
                                                        <span>작업기간</span>
                                                        <p>3.5일</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <strong className="projectList__tit">현대에버다임</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="https://www.hyundaieverdigm.com/main/" target="_blank">https://www.hyundaieverdigm.com/main/</a>
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
                                    </div>
                                </li>
                                <li className="half">
                                    <div>
                                        <strong className="projectList__tit">SWM</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="https://www.swm.ai/" target="_blank">https://www.swm.ai/</a>
                                                    </li>
                                                    <li>
                                                        <span>device</span>
                                                        <p>반응형 웹사이트</p>
                                                    </li>
                                                    <li>
                                                        <span>작업기간</span>
                                                        <p>3일</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <strong className="projectList__tit">유학앤교육</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="http://uhak.iceserver.co.kr/" target="_blank">http://uhak.iceserver.co.kr/</a>
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
                                    </div>
                                </li>
                            </>
                        )
                    }
                    {
                        viewAmt >= 3 && (
                            <>
                                <li className="half">
                                    <div>
                                        <strong className="projectList__tit">미카도스시</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="http://mikadosushi.co.kr/" target="_blank">http://mikadosushi.co.kr/</a>
                                                    </li>
                                                    <li>
                                                        <span>device</span>
                                                        <p>반응형 웹사이트</p>
                                                    </li>
                                                    <li>
                                                        <span>작업기간</span>
                                                        <p>3일</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <strong className="projectList__tit">TNS</strong>
                                        <div className="projectList__cnts">
                                            <div className="project__txtWrap">
                                                <ul className="project__info">
                                                    <li>
                                                        <span>URL</span>
                                                        <a href="https://tbjeong.cafe24.com/" target="_blank">https://tbjeong.cafe24.com/</a>
                                                    </li>
                                                    <li>
                                                        <span>device</span>
                                                        <p>반응형 웹사이트</p>
                                                    </li>
                                                    <li>
                                                        <span>작업기간</span>
                                                        <p>4일</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    }
                </ul>
                <div className="btnMore__wrap">
                    {
                        viewAmt == 3
                        ? <button type="button" onClick={handleFlod}>접기</button>
                        : <button type="button" onClick={handleViewMore}>더보기</button>
                    }
                </div>
            </Layout>
        </>
    )
}

export default Project;