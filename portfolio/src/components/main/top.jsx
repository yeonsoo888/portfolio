import React from "react";

export default function Top() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <div className="mainVis" style={{backgroundImage: `url(${path}/images/mainTop.jpg)`}}>
                <div className="mainVis__inner">
                    <div>
                    <b className="mainVis__txt">FrontEnd + Publisher</b>
                    <p className="mainVis__tit">
                        When work is a pleasure, life is a joy! <br />
                        When work is a duty, life is slavery.
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}