import React, { useEffect, useState , useRef } from "react";
import Layout from "../common/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay , Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import {data} from '../../data/project'


SwiperCore.use([Autoplay,Pagination ])

function Project({setScrollTarget}) {
    const path = process.env.PUBLIC_URL;

    const [projectList,setProjectList] = useState([]);

    const mainSec = document.querySelectorAll(".mainSec");
    useEffect(() => {
        setProjectList(data); 
        setTarget();
        window.addEventListener("resize", setTarget);
    },[projectList])

    const setTarget = () => {
        const arrTarget = [];
        let headerheight = document.querySelector(".header").offsetHeight;

        for (let item of mainSec) {
            arrTarget.push(item.offsetTop - headerheight);
        }
        setScrollTarget(arrTarget);
    }

    return (
        <>
            <Layout title="projects">
                <h4 className="mainTit">Projects</h4>
                {/* <ul className="projectList">
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
                                    <SwiperSlide><img src={`${path}/images/project/todo1.JPG`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${path}/images/project/todo2.JPG`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${path}/images/project/todo3.JPG`} alt="" /></SwiperSlide>
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
                                        <span>??????</span>
                                        <p>
                                            1. JWT??? ????????? ????????? ?????? (cookie) <br/>
                                            2. node.js + express ?????? ?????? <br/>
                                            3. typescript ?????? <br/>
                                            4. CRUD ??????
                                        </p>
                                    </li>
                                </ul>
                                <button className="btn__readeMe" onClick={() => {setIsPop("sec1")}}>READE ME</button>
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
                                    <SwiperSlide><img src={`${path}/images/project/youtube1.JPG`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${path}/images/project/youtube2.JPG`} alt="" /></SwiperSlide>
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
                                        <span>??????</span>
                                        <p>
                                            youtube API??? ????????? youtube clone coding <br />
                                            1. ?????? ????????? ??????????????? ?????? <br />
                                            2. ????????? ???????????? ?????? ???????????? ?????? <br />
                                            3. ????????? ????????? ????????? iframe??? ????????? ?????? ??????
                                        </p>
                                    </li>
                                </ul>
                                <button className="btn__readeMe" onClick={() => {setIsPop("sec2")}}>READE ME</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <strong className="projectList__tit">BuddyBuddy_v2</strong>
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
                                    <SwiperSlide><img src={`${path}/images/project/budy1.JPG`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${path}/images/project/budy2.JPG`} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={`${path}/images/project/budy3.JPG`} alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="project__txtWrap">
                                <ul className="project__info">
                                    <li>
                                        <span>URL</span>
                                        <a href="https://buddybuddy-351707.du.r.appspot.com/" target="_blank">https://buddybuddy-351707.du.r.appspot.com/</a>
                                    </li>
                                    <li>
                                        <span>GitHub</span>
                                        <a href="https://github.com/yeonsoo888/buddybuddy_v2" target="_blank">https://github.com/yeonsoo888/buddybuddy_v2</a>
                                    </li>
                                    <li>
                                        <span>??????</span>
                                        <p>
                                            1. Node.js, express??? ????????? ????????? ?????? <br />
                                            2. socket.io??? ????????? ????????? ?????? 
                                        </p>
                                    </li>
                                </ul>
                                <button className="btn__readeMe" onClick={() => {setIsPop("sec3")}}>READE ME</button>
                            </div>
                        </div>
                    </li>
                </ul> */}
                <ul className="project1__list">
                    {
                        projectList.map( (item,i) => {
                            return(
                                <li className="project1__item" key={i}>
                                    <div className="project1__img" style={{background: `url(${path}/images/project/p${item.imgNum}.jpg)no-repeat`}}></div>
                                    <div className="project1__txtWrap">
                                        <div>
                                            <strong className="project1__tit">{item.title}</strong>
                                            <a href={item.link} target="_blank" rel="noreferrer" className="project1__link">View</a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </Layout>

        </>
    )
}

export default Project;