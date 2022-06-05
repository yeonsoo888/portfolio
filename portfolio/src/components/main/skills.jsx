import React from "react";
import Layout from "../common/layout";


export default function Skills() {
    const path = process.env.PUBLIC_URL;

    return (
        <>
            <Layout title="skills">
                <h4 className="mainTit">Skills</h4>
                <ul className="skills__list">
                    <li>
                        <img src={`${path}/images/skill1.jpg`} alt="" style={{width: ""}} />
                        <img src={`${path}/images/skill2.jpg`} alt="" style={{width: "16.6rem"}} />
                        <img src={`${path}/images/skill3.jpg`} alt="" style={{width: "16.4rem"}} />
                        <img src={`${path}/images/skill4.jpg`} alt="" style={{width: "19.7rem"}} />
                        <img src={`${path}/images/skill5.jpg`} alt="" style={{width: "8.6rem"}} />
                        <img src={`${path}/images/skill6.png`} alt="" style={{width: "8rem"}} />
                        <img src={`${path}/images/skill7.png`} alt="" style={{width: "8rem"}} />
                    </li>
                    <li>

                    </li>
                </ul>
            </Layout>
        </>
    )
}
