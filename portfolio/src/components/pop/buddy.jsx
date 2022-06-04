import React from "react";
import PopLayout from "./popLayout";

function Buddy({setIsPop}) {
    return (
        <PopLayout setIsPop={setIsPop}>
            <h4>BuddyBuddy</h4>
            <p className="linkTxt">사이트 링크 : <a rel="noreferrer" href="https://buddybuddy-351707.du.r.appspot.com/" target="_blank">https://buddybuddy-351707.du.r.appspot.com/</a></p>
            <p className="linkTxt">github 링크 : <a rel="noreferrer" href="" target="_blank">https://github.com/yeonsoo888/buddybuddy_v2</a></p>
            <hr />
            <div className="txtWrap">
                <strong>Summary</strong>
                <p>
                    버디버디의 주요기능인 실시간 채팅기능을 구현하고자 개발하였습니다. <br />
                    <br />
                    웹소켓을 간편하게 사용할수있도록 도와주는 라이브러리인 socket.io를 이용하여 구현하였습니다.<br />
                    <br />
                    개발중 useEffect훅으로 컴포넌트가 mount될 때 한번만 socket에 접속시키고자 하는 과정에서 메세지를 보내거나 컴포넌트가 update되면 socket접속이 끊기는 현상이 계속해서 발생해 어려움을
                    겪었습니다. <br />
                    <br />
                    socket을 전역에 import 한 후, component가 mount 될때 socket에 접속하고, unmount될때 disconnet하는 방식으로
                    해결하였습니다.<br />
                </p>
            </div>
        </PopLayout>
    );
}

export default Buddy;
