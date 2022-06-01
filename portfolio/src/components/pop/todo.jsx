import React from "react";
import PopLayout from "./popLayout";

function Todo():JSX.Element {
    return (
        <PopLayout>
            <h4>To Do App</h4>
            <p>사이트 링크 : <a rel="noreferrer" href="https://todoapp-351107.du.r.appspot.com/" target="_blank">https://todoapp-351107.du.r.appspot.com/</a></p>
            <p>github 링크 : <a rel="noreferrer" href="https://github.com/yeonsoo888/to-do-app" target="_blank">https://github.com/yeonsoo888/to-do-app</a></p>
            <hr />
            <div>
                <strong>Summary</strong>
                <p>
                    할일을 메모하고 체크할 수 있는 웹 앱 입니다. 어플리케이션의 기본기능인
                    Create,Reading,Update,Delete 기능과 회원기능(로그인)을 구현하고자 개발하였습니다. <br />
                    <br />
                    React.js와 Node.js의 학습에 많은 도움이 되었고 특히 Node.js를 처음으로 다루어보았다는
                    점에서 의미가 크다고 생각합니다. <br />
                    <br />
                    이전까지는 서버를 다루는 방법을 몰라 localstroage를 이용하여 데이터를 저장하고 호출했었는데, <br />
                    실제로 저장되는 데이터가 아니다보니 흥미도 느껴지지 않았습니다. <br />
                    이번 프로젝트를 게기로 api를 통한 서버와의 통신을 통해 db에 데이터를 저장하고 호출하는 방식에대해 이해 할 수 있었습니다. <br />
                    <br />
                    그리고 회원 로그인 기능을 개발하는 중 jwt방식과 session방식이 있다는 것을 배웠으며, <br />
                    xss공격에 취약하고 장기간 방치시 해킹의 위험이 커진다는 단점이 있지만, 모바일 앱으로 까지의 확장성을 고려할 여지가 있다고 판단하여
                    쿠키를 사용할 수 없는 모바일 앱에서는 jwt방식이 최적이라고 판단하였기에 jwt방식으로 로그인 기능을 개발하였습니다. <br />
                </p>
            </div>
                
        </PopLayout>
    );
}

export default Todo;
