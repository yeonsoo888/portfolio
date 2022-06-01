import React from "react";
import PopLayout from "./popLayout";

function Yeontube({setIsPop}) {
    return (
        <PopLayout setIsPop={setIsPop}>
            <h4>YeonTube</h4>
            <p className="linkTxt">사이트 링크 : <a rel="noreferrer" href="https://yeonsoo888.github.io/yeontube/" target="_blank">https://yeonsoo888.github.io/yeontube/</a></p>
            <p className="linkTxt">github 링크 : <a rel="noreferrer" href="" target="_blank">https://github.com/yeonsoo888/yeontube</a></p>
            <hr />
            <div className="txtWrap">
                <strong>Summary</strong>
                <p>
                    youtube Open API를 이용한 youtube 앱 입니다. <br />
                    <br />
                    이번 프로젝트에서는 MVVM패턴을 코딩에 적용시켜보고자 하였습니다. <br />
                    service폴더의 youtube.js 안에 youtubeAPI 호출하는 함수를 class로 만들고 UI로직 내에서 import하여 비동기 통신 하였습니다. <br />
                </p>
            </div>
        </PopLayout>
    )
}

export default Yeontube;
