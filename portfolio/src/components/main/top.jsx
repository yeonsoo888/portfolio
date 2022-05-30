import React from "react";

export default function Top() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <div className="mainVis" style={{backgroundImage: `url(${path}/images/mainTop.jpg)`}}>
                <div className="mainVis__inner">
                    <b className="mainVis__tit">프론트엔드 개발자 포트폴리오</b>
                    <strong className="mainVis__name">김 연 수</strong>
                    <p className="mainVis__txt">
                        안녕하십니까. <br />
                        공부하는 습관이 중요하다고 생각하는 <br />
                        주니어 프론트엔드 개발자입니다. <br />
                        계획성과 문제해결 능력, 커뮤니케이션이 저의 장점입니다.
                    </p>
                </div>
            </div>
        </>
    )
}